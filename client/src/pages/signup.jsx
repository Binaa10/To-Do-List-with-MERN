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

    // Password validation
    if (formData.password !== formData["confirm-password"]) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

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

  return (
    <div className="body">
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={handleChange}
            required
          />

          {error && <p className="red">{error}</p>}

          <button className="signup-btn" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/sign-in">
              <span className="a">Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
