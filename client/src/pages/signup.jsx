import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/auth/signup", {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(formData);

  return (
    <div className="body">
      <div class="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button class="signup-btn" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p>
            Already have an account?
            <Link to={"/sign-in"}>
              <span className="a ">Sign in</span>
            </Link>
          </p>
        </form>
      </div>
      {error && <p className="red">{error}</p>}
    </div>
  );
}
