import React from "react";
import { Link } from "react-router-dom";

// Assets
import { LogoPNG } from "@/assets/images";

const Register = () => {
  return (
    <React.Fragment>
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
            <form className="form-horizontal">
              {/* First Name */}
              <div className="form-group row">
                <label htmlFor="first_name" className="col-12 col-lg-4 control-label">
                  Ad
                </label>

                <div className="col-12 col-lg-5">
                  <input type="text" className="form-control" name="first_name" />
                  <span className="required">*</span>
                </div>
              </div>

              {/* Last Name */}
              <div className="form-group row">
                <label htmlFor="last_name" className="col-12 col-lg-4 control-label">
                  Soyad
                </label>

                <div className="col-12 col-lg-5">
                  <input type="text" className="form-control" name="last_name" />
                  <span className="required">*</span>
                </div>
              </div>

              {/* Birth Date */}
              <div className="form-group row">
                <label className="col-12 col-lg-4 control-label">Doğum Tarixi</label>

                <div className="col-12 col-lg-5">
                  <div className="input-group input-group-right">
                    <input type="date" className="form-control" name="birth_date" />
                  </div>

                  <span className="required">*</span>
                </div>
              </div>

              {/* Phone */}
              <div className="form-group row">
                <label htmlFor="phone" className="col-12 col-lg-4 control-label">
                  Telefon nömrəsi
                </label>

                <div className="col-12 col-lg-5">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="(5X) XXX XX XX"
                    name="phone"
                  />

                  <span className="required">*</span>
                </div>
              </div>

              {/* Password */}
              <div className="form-group row">
                <label htmlFor="password" className="col-12 col-lg-4 control-label">
                  Şifrə
                </label>

                <div className="col-12 col-lg-5">
                  <div className="toggle-password">
                    <i className="fa fa-eye"></i>
                  </div>

                  <input type="password" className="form-control" name="password" />

                  <span className="required">*</span>
                </div>
              </div>

              {/* Password Confirm */}
              <div className="form-group row">
                <label htmlFor="password_confirm" className="col-12 col-lg-4 control-label">
                  Şifrə Təkrarı
                </label>

                <div className="col-12 col-lg-5">
                  <div className="toggle-password">
                    <i className="fa fa-eye"></i>
                  </div>

                  <input type="password" className="form-control" name="password_confirm" />

                  <span className="required">*</span>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12 col-lg-9 text-right">
                  <button type="submit" className="btn btn-primary btn-block">
                    Kaydet
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
