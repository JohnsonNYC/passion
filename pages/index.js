import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Cookies from "js-cookie";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();
    setUserDetails(data);
  };

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
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
      {/* TODO: Add Redux to app */}
      {userDetails ? (
        <div className="user-profile">
          <div className="card">
            <img
              src={userDetails.picture}
              alt={`${userDetails.given_name}'s profile`}
              className="profile-pic"
            />
            <p>Welcome</p>
            <h1 className="name">{userDetails.name}</h1>
            <p className="email">{userDetails.email} </p>
            <p>{`Locale: ${userDetails.locale}`}</p>
          </div>
        </div>
      ) : (
        <div>is Loading ...</div>
      )}
      <footer></footer>
    </div>
  );
};

export default Home;
