import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // regex (real-world)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{6,}$/;

  // EMAIL live validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // PASSWORD live validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value === "") {
      setPasswordError("Password is required");
    } else if (!passwordRegex.test(value)) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError || passwordError || email === "" || password === "") {
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error">{emailError}</p>}

          {/* Password */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error">{passwordError}</p>}

          {/* Show / Hide */}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
