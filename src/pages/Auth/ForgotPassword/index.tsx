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
import { sendOTPCode } from "@/store/actions";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // Dispatch
  const dispatch = useDispatch<AppDispatch>();
  const { status, isAuth } = useSelector((state: RootState) => state.auth);

  // Data
  const [data, setData] = useState({
    phone: "",
  });

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = parsePhoneNumber(data.phone, "AZ").number.slice(4);
    dispatch(sendOTPCode(phoneNumber));
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  useEffect(() => {
    if (status.success && status.lastAction === sendOTPCode.typePrefix) {
      navigate("/auth/verify-otp");
    }
  }, [status, navigate]);

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
              <span>Telefon nömrənizi daxil edin</span>
            </div>

            {/* Error */}
            {status.failure && status.lastAction === sendOTPCode.typePrefix && (
              <div className="alert alert-danger" role="alert">
                Telefon nömrəsi yanlışdır.
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

              <div className="user-login-page-row mb-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#0b8ccd" }}
                  disabled={status.loading}>
                  Göndər
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
