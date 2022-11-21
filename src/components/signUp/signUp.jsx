import React from "react";

function SignUp() {
  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input required type="text" />

        <label>Email</label>
        <input required type="email" />

        <label>Password</label>
        <input required type="password" />

        <label>Confirm Password</label>
        <input required type="password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
