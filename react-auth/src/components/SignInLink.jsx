import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SignInLink = ({ text = "" }) => {
  return (
    <Link to="/sign-up">
      <p>{text}</p>
    </Link>
  );
};
