import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div className="ps-login">
      <Image
        src="/images/passion-logo.png"
        alt="passion-logo"
        width={50}
        height={50}
      />
      <div>Welcome Back</div>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
