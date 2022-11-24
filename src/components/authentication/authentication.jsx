import React from "react";
import SignIn from "../signIn/signIn";
import "./authentication.scss";
import SignUp from "../signUp/signUp";
const Authentication = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
