import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="body">
      <div class="container">
        <h1>Sign Up</h1>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />

        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Enter your password"
        />

        <button class="signup-btn">Sign Up</button>
        <p>
          Already have an account?
          <Link to={"/sign-in"}>
            <span className="a ">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
