import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// React Number Format
import { PatternFormat } from "react-number-format";

// Libphonenumber-js
import { parsePhoneNumber } from "libphonenumber-js";

// Components
import AuthLayout from "@/components/AuthLayout";

// Assets
import { LogoPNG } from "@/assets/images";

// Actions
import { login } from "@/store/actions";

const Login = () => {
  const navigate = useNavigate();

  // Dispatch
  const dispatch = useDispatch<AppDispatch>();
  const { status, isAuth } = useSelector((state: RootState) => state.auth);

  // Data
  const [data, setData] = useState({
    phone: "",
    password: "",
    remember: false,
  });

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = parsePhoneNumber(data.phone, "AZ").number.slice(4);
    dispatch(
      login({
        phone: phoneNumber,
        password: data.password,
        remember: data.remember,
      })
    );
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <AuthLayout>
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

            {/* Error */}
            {status.failure && status.lastAction === login.typePrefix && (
              <div className="alert alert-danger" role="alert">
                Telefon nömrəsi və ya şifrə yanlışdır.
              </div>
            )}

            {/* Form */}
            <form name="login-form" onSubmit={handleSubmit}>
              {/* Phone */}
              <div className="user-login-page-row">
                <PatternFormat
                  type="tel"
                  name="phone"
                  format="+994 (##) ###-##-##"
                  allowEmptyFormatting
                  required
                  mask="_"
                  value={data.phone}
                  className="form-control"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>

              {/* Password */}
              <div className="user-login-page-row">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  className="form-control"
                  placeholder="Şifrə"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="user-login-page-row mb-0 d-flex align-items-center justify-content-between">
                {/* Remember me */}
                <div className="checkbox-custom">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={data.remember}
                    onChange={() =>
                      setData((prev) => ({ ...prev, remember: !prev.remember }))
                    }
                  />
                  <label
                    htmlFor="remember"
                    onClick={() =>
                      setData((prev) => ({ ...prev, remember: !prev.remember }))
                    }>
                    Məni xatırla
                  </label>
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
                  style={{ backgroundColor: "#0b8ccd" }}
                  disabled={status.loading}>
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
    </AuthLayout>
  );
};

export default Login;
