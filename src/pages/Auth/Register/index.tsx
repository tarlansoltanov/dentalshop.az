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
import { register } from "@/store/actions";

const Register = () => {
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { errors, status, isAuth } = useSelector(
    (state: RootState) => state.auth
  );

  // Data
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    password: "",
    password_confirm: "",
  });

  // Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      register({
        ...data,
        phone: parsePhoneNumber(data.phone, "AZ").number.slice(4),
      })
    );
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <AuthLayout>
      <div className="signup-page-logo">
        <Link to="/">
          <img src={LogoPNG} alt="Logo" />
        </Link>
      </div>

      <div className="container">
        <div className="signup-container">
          <div className="contentbox-header">
            <h4>Qeydiyyatdan keçin...</h4>
          </div>

          <div className="contentbox-body">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="form-group row">
                <label
                  htmlFor="first_name"
                  className="col-12 col-lg-4 control-label">
                  Ad
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      value={data.first_name}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.first_name ? "invalid" : ""
                      }`}
                      required
                    />
                    <span className="required">*</span>
                  </div>

                  {errors?.first_name && (
                    <div>
                      <span className="text-danger">{errors.first_name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Last Name */}
              <div className="form-group row">
                <label
                  htmlFor="last_name"
                  className="col-12 col-lg-4 control-label">
                  Soyad
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      value={data.last_name}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.last_name ? "invalid" : ""
                      }`}
                      required
                    />
                    <span className="required">*</span>
                  </div>

                  {errors?.last_name && (
                    <div>
                      <span className="text-danger">{errors.last_name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Birth Date */}
              <div className="form-group row">
                <label className="col-12 col-lg-4 control-label">
                  Doğum Tarixi
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <input
                      type="date"
                      name="birth_date"
                      value={data.birth_date}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.birth_date ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.birth_date && (
                    <div>
                      <span className="text-danger">{errors.birth_date}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="form-group row">
                <label
                  htmlFor="phone"
                  className="col-12 col-lg-4 control-label">
                  Telefon nömrəsi
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <PatternFormat
                      type="tel"
                      name="phone"
                      format="+994 (##) ###-##-##"
                      allowEmptyFormatting
                      mask="_"
                      className={`form-control ${
                        errors?.phone ? "invalid" : ""
                      }`}
                      placeholder="Telefon nömrəsi daxil edin"
                      value={data.phone}
                      onChange={handleChange}
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.phone && (
                    <div>
                      <span className="text-danger">{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="form-group row">
                <label
                  htmlFor="password"
                  className="col-12 col-lg-4 control-label">
                  Şifrə
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <div className="toggle-password">
                      <i className="fa fa-eye"></i>
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.password ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.password && (
                    <div>
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Password Confirm */}
              <div className="form-group row">
                <label
                  htmlFor="password_confirm"
                  className="col-12 col-lg-4 control-label">
                  Şifrə Təkrarı
                </label>

                <div className="col-12 col-lg-5">
                  <div>
                    <div className="toggle-password">
                      <i className="fa fa-eye"></i>
                    </div>

                    <input
                      type="password"
                      name="password_confirm"
                      value={data.password_confirm}
                      onChange={handleChange}
                      className={`form-control ${
                        errors?.password_confirm ? "invalid" : ""
                      }`}
                      required
                    />

                    <span className="required">*</span>
                  </div>

                  {errors?.password_confirm && (
                    <div>
                      <span className="text-danger">
                        {errors.password_confirm}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12 col-lg-9 text-right">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ backgroundColor: "#0b8ccd" }}
                    disabled={status.loading}>
                    {/* Qeydiyyat */}
                    Qeydiyyat
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
