import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;

/* auth,
  signInWithGoogleRedirect
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
<button onClick={signInWithGoogleRedirect}>
Sign in with Google Redirect
</button>
useEffect(() => {
  const loadData = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  loadData();
}, []); */ // SIGN IN WITH REDIRECT
