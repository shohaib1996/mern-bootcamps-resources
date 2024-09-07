import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import axios from "axios";
import { SignInLink } from "../components/SignInLink";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        { email, password }
      );
      const token = response?.data?.token;
      if (token) {
        localStorage.setItem("user-token", token);
      }
      setTimeout(() => {
        naigate("/profile");
      }, 500);
    } catch (error) {
      alert("Error login!");
      console.log(error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit">Sign in</button>
        </form>

        <SignInLink text="Create a new account" />
      </div>
    </div>
  );
};

export default SignIn;
