import { useEffect } from "react";
import NotFound from "../assets/404.jpg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  // redirect to previous page
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 6000);
  });

  return (
    <div className="errorPage">
      <div className="errorPage__container">
        <img src={NotFound} alt="Page Not Found" />
        <h1>Oops! 404</h1>
        <p>
          Sorry, the page you are looking for does not exist.You will be
          redirected to the previous page shortly...
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
