import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Helpers
import { getFormData } from "@/helpers";

// Actions
import { changePassword } from "@/store/actions";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Account
  const { errors, status } = useSelector((state: RootState) => state.account);

  // Data
  const [data, setData] = useState({
    new_password: "",
    new_password_confirm: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changePassword(getFormData(data)));
  };

  if (!isAuth) navigate("/");

  useEffect(() => {
    if (status.success && status.lastAction === changePassword.typePrefix) {
      setInterval(() => {
        navigate("/");
      }, 2000);
    }
  }, [status, navigate]);

  return (
    <div className="signup-container account-box">
      <div className="contentbox-header">
        <h2>Şifrəni Yenilə</h2>
      </div>

      {status.success && status.lastAction === changePassword.typePrefix && (
        <div className="alert alert-success">Şifrəniz yeniləndi! Yönləndirilirsiniz...</div>
      )}

      <div className="contentbox-body">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="form-group row">
            <label htmlFor="new_password" className="col-12 col-lg-4 control-label">
              Yeni Şifrə
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="password"
                  name="new_password"
                  value={data.new_password}
                  onChange={(e) => setData({ ...data, new_password: e.target.value })}
                  className={`form-control ${errors?.new_password ? "invalid" : ""}`}
                  required
                />
                <span className="required">*</span>
              </div>

              {errors?.new_password && (
                <div>
                  <span className="text-danger">{errors.new_password}</span>
                </div>
              )}
            </div>
          </div>

          {/* New Password Confirm */}
          <div className="form-group row">
            <label htmlFor="new_password_confirm" className="col-12 col-lg-4 control-label">
              Yeni Şifrə Təsdiq
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="password"
                  name="new_password_confirm"
                  value={data.new_password_confirm}
                  onChange={(e) => setData({ ...data, new_password_confirm: e.target.value })}
                  className={`form-control ${errors?.new_password_confirm ? "invalid" : ""}`}
                  required
                />
                <span className="required">*</span>
              </div>

              {errors?.new_password_confirm && (
                <div>
                  <span className="text-danger">{errors.new_password_confirm}</span>
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
                disabled={status.loading && status.lastAction == changePassword.typePrefix}>
                Yenilə
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
