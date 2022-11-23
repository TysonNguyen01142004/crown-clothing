import React from "react";
import SignIn from "../signIn/signIn";
import "./authentication.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
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
