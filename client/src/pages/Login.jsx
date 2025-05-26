import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // function to handle our controlled inputs
  const handleChangeInput = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(formData);

  const handleSubmit = () => {};
  return (
    <section className="register">
      <div className="container register__container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <p className="form__error-message">any error from backend</p>

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChangeInput}
            autoComplete="true"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChangeInput}
            autoComplete="true"
          />

          <button type="submit" className="btn primary">
            Sign In
          </button>
          <p>
            Ready to vote? Create your account{" "}
            <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
