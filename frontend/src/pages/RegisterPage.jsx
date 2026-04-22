import { Link } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";

// Renders the /register page route.
export default function RegisterPage() {
  return (
    <PublicLayout logoPosition="center">
      <section className="auth-page">
        <div className="auth-page__card">
          <h1 className="auth-page__title">Create An Account:</h1>

          <form className="auth-page__form">
            <label className="auth-page__field">
              <span>Email:</span>
              <input className="auth-page__input" type="email" name="email" />
            </label>

            <label className="auth-page__field">
              <span>Password:</span>
              <input
                className="auth-page__input"
                type="password"
                name="password"
              />
            </label>

            <label className="auth-page__field">
              <span>Re-enter Password:</span>
              <input
                className="auth-page__input"
                type="password"
                name="confirmPassword"
              />
            </label>

            <button className="auth-page__button" type="submit">
              Register
            </button>
          </form>

          <p className="auth-page__footer">
            Already have an account?{" "}
            <Link to="/login">Click here to log in.</Link>
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}
