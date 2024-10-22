import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/reducers/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);
  const userDetails = useSelector((state) => state.user.userInfo);

  const getUserDetails = async (accessToken) => {
    /* Make a request to the Google OAuth2.0 API to fetch user information using an access token. */
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();

    const formattedData = {
      user_id: data.id,
      email: data.email,
      display_name: data.name,
      first_name: data.given_name,
      last_name: data.family_name,
      picture_url: data.picture,
    };
    dispatch(login(formattedData));
  };

  /* extracting an access token from the current URL and storing it in a cookie named "access_token"*/
  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      console.log({ isMatch });
    }

    const baseUrl = window.location.origin;
    window.history.replaceState({}, document.title, baseUrl);
  }, []);

  /* check if there is an access token stored in a cookie named
"access_token". If there is an access token, use it to get the user's details */
  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    if (!accessToken) return;

    getUserDetails(accessToken);
  }, [isLoggedIn]);

  return (
    <div>
      <Head>
        <title>Passion: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* *TODO: Update with home page component */}

      {userDetails ? (
        <div className="user-profile">
          <div className="card">
            <img
              src={userDetails.picture_url}
              alt={`${userDetails.first_name}'s profile`}
              className="profile-pic"
            />
            <p>Welcome</p>
            <h1 className="name">{userDetails.name}</h1>
            <p className="email">{userDetails.email} </p>
          </div>
        </div>
      ) : (
        <div>is Loading ...</div>
      )}
    </div>
  );
};

export default Home;
