import React from "react";
import { Link } from "react-router-dom";

// Assets
import { LogoPNG } from "@/assets/images";

// Components
import Copyright from "@/components/Copyright";

const Login = () => {
  return (
    <React.Fragment>
      <div className="user-login-page-wrapper">
        <div className="user-login-page-container">
          <div className="user-login-page-logo">
            <Link to="/">
              <img src={LogoPNG} alt="Logo" />
            </Link>
          </div>

          <div className="user-login-page-content">
            <div className="user-login-page-title">
              <span>Giriş</span>
            </div>

            <form name="login-form">
              {/* Phone */}
              <div className="user-login-page-row">
                <input
                  className="form-control"
                  type="text"
                  name="text"
                  placeholder="Telefon nömrəsi"
                />
              </div>

              {/* Password */}
              <div className="user-login-page-row">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Şifrə"
                />
              </div>

              <div className="user-login-page-row mb-0 d-flex align-items-center justify-content-between">
                {/* Remember me */}
                <div className="checkbox-custom">
                  <input type="checkbox" name="remember" id="remember-me" value="1" />
                  <label htmlFor="remember">Məni xatırla</label>
                </div>

                {/* Forgot Password */}
                <div className="user-login-forgot-pass">
                  <Link to="/auth/forgot-password">Şifrəmi Unuttum</Link>
                </div>
              </div>

              <div className="user-login-page-row mb-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#0b8ccd" }}>
                  Giriş
                </button>
              </div>
            </form>
          </div>

          <div className="user-login-page-title user-login-page-sub-title">
            <span>Hesabınız yoxdur?</span>
          </div>

          <div className="user-login-page-row">
            <Link to="/auth/register" className="btn btn-secondary btn-block">
              Qeydiyyatdan Keçin
            </Link>
          </div>
        </div>
      </div>

      <Copyright />
    </React.Fragment>
  );
};

export default Login;
