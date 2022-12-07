import React from "react";
import "./signUp.scss";
import Button from "../button/button";
import { useState } from "react";
import FormInput from "../form-input/form-input";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirmed Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmedPassword"
          value={confirmedPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
