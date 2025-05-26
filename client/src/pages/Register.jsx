import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    password2: "",
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
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <p className="form__error-message">any error from backend</p>

          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChangeInput}
            autoComplete="true"
            autoFocus
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={handleChangeInput}
            autoComplete="true"
          />
          <button type="submit" className="btn primary">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
