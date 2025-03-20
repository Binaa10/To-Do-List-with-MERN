import React from "react";

export default function SignIn() {
  return (
    <div className="body">
      <div class="container">
        <h1>Sign In</h1>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />

        <button class="signup-btn">Sign in</button>
        <p>
          Dont have an account? <a href="/sign-up">Signup</a>
        </p>
      </div>
    </div>
  );
}
