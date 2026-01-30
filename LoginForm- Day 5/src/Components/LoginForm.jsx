import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Email validation (regex only)
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation (regex only)
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must have 1 uppercase, 1 number & 1 special character";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login Successful ✅");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={styles.field}>
          <label>Email</label>
          <input
            type="text"   // 👈 NOT email type
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            style={errors.email ? styles.inputError : styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label>Password</label>

          <div style={styles.passwordBox}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={errors.password ? styles.inputError : styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.toggleBtn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && (
            <p style={styles.error}>{errors.password}</p>
          )}
        </div>

        <button type="submit" style={styles.loginBtn}>
          Login
        </button>
      </form>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "350px",
    margin: "60px auto",
    padding: "25px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial"
  },
  field: {
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  inputError: {
    width: "100%",
    padding: "10px",
    border: "1px solid red",
    borderRadius: "4px"
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginTop: "5px"
  },
  passwordBox: {
    display: "flex",
    gap: "10px"
  },
  toggleBtn: {
    padding: "8px",
    cursor: "pointer"
  },
  loginBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

