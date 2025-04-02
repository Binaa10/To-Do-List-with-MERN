import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
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
      const res = await fetch("/api/auth/signin", {
        method: "post",
        headers: {
          "content-type": "application/json",
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
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button className="signup-btn">
            {loading ? "loading" : "Sign in"}
          </button>
          <p>
            Dont have an account?{" "}
            <Link to={"/signup"}>
              <span className="a">Signup</span>
            </Link>
          </p>
          {error && <p className="red">{error}</p>}
        </form>
      </div>
    </div>
  );
}
