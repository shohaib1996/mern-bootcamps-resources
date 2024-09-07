import { useState } from "react";
import "../styles/Login.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [fullName, setFulName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: fullName,
        password,
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );

      if (response?.data?.isOtpSend) {
        setIsOtpSend(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();

    try {
      const data = {
        otp,
        email,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );

      if (response?.data?.success) {
        alert("Registered successfull!");
        setIsOtpSend(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="login-form-container">
      {isOtpSend ? (
        <div className="login-form-box">
          <h2>Verify OTP</h2>
          <form onSubmit={handleOTP} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send & Verify</button>
          </form>
        </div>
      ) : (
        <div className="login-form-box">
          <h2>Sign Up</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFulName(e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>

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

            <button type="submit">Sign up</button>
          </form>

          <Link to="/sign-in">
            <p>Already have an account?</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
