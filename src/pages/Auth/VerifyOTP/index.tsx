import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

import Cookies from "js-cookie";

// Assets
import { LogoPNG } from "@/assets/images";

// Actions
import { verifyOTPCode } from "@/store/actions";

const VerifyOTP = () => {
  const navigate = useNavigate();

  // Dispatch
  const dispatch = useDispatch<AppDispatch>();
  const { status, isAuth } = useSelector((state: RootState) => state.auth);

  // Data
  const [data, setData] = useState({
    phone: "",
    otp_code: "",
  });

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(verifyOTPCode(data));
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  useEffect(() => {
    if (status.success && status.lastAction === verifyOTPCode.typePrefix) {
      navigate("/");
    }
  }, [status, navigate]);

  useEffect(() => {
    const phone = Cookies.get("phone");
    if (!phone) navigate("/auth/login");
    else setData({ ...data, phone: phone });
  }, []);

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
              <span>OTP Kodu daxil edin</span>
            </div>

            {/* Error */}
            {status.failure && status.lastAction === verifyOTPCode.typePrefix && (
              <div className="alert alert-danger" role="alert">
                OTP kodu yanlışdır.
              </div>
            )}

            {/* Form */}
            <form name="login-form" onSubmit={handleSubmit}>
              {/* OTP */}
              <div className="user-login-page-row d-flex">
                <input
                  name="otp_code"
                  type="number"
                  value={data.otp_code}
                  className="form-control"
                  placeholder="OTP Kodu"
                  onChange={(e) => setData({ ...data, otp_code: e.target.value })}
                />
              </div>

              <div className="user-login-page-row mb-0 d-flex align-items-center justify-content-between">
                {/* Resend */}
                <div className="user-login-forgot-pass">
                  <Link to="/auth/forgot-password">Yenidən göndər</Link>
                </div>
              </div>

              <div className="user-login-page-row mb-0">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ backgroundColor: "#0b8ccd" }}
                  disabled={status.loading}>
                  Təsdiqlə
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerifyOTP;
