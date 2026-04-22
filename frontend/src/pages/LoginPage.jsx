import { Link } from "react-router-dom";
import PublicLayout from "../components/layout/PublicLayout";

// Renders the /login page route.
export default function LoginPage() {
  return (
    <PublicLayout logoPosition="center">
      <section className="auth-page">
        <div className="auth-page__card">
          <h1 className="auth-page__title">Sign in to Password Protector</h1>

          <form className="auth-page__form">
            <label className="auth-page__field">
              <span>Email:</span>
              <input
                className="auth-page__input"
                type="email"
                name="email"
                placeholder=""
              />
            </label>

            <label className="auth-page__field">
              <span>Password:</span>
              <input
                className="auth-page__input"
                type="password"
                name="password"
                placeholder=""
              />
            </label>

            <button className="auth-page__button" type="submit">
              Sign In
            </button>
          </form>

          <p className="auth-page__footer">
            Don’t have an account?{" "}
            <Link to="/register">Click here to register.</Link>
          </p>
        </div>
      </section>
    </PublicLayout>
  );
}
