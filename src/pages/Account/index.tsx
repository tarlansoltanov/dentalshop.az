import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Actions
import { getAccount, updateAccount } from "@/store/actions";
import { getFormData } from "@/helpers";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Account
  const { user, errors, status } = useSelector((state: RootState) => state.account);

  // Data
  const [data, setData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    birth_date: user?.birth_date || "",
  });

  useEffect(() => {
    if (!user) dispatch(getAccount());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateAccount(getFormData(data)));
  };

  if (!isAuth) navigate("/");

  return (
    <div className="signup-container account-box">
      <div className="contentbox-header">
        <h4>Şəxsi Məlumatlar</h4>
      </div>

      {status.success && status.lastAction === updateAccount.typePrefix && (
        <div className="alert alert-success">Məlumatlarınız yeniləndi</div>
      )}

      <div className="contentbox-body">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group row">
            <label htmlFor="first_name" className="col-12 col-lg-4 control-label">
              Ad
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="text"
                  name="first_name"
                  value={data.first_name}
                  onChange={(e) => setData({ ...data, first_name: e.target.value })}
                  className={`form-control ${errors?.first_name ? "invalid" : ""}`}
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
            <label htmlFor="last_name" className="col-12 col-lg-4 control-label">
              Soyad
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="text"
                  name="last_name"
                  value={data.last_name}
                  onChange={(e) => setData({ ...data, last_name: e.target.value })}
                  className={`form-control ${errors?.last_name ? "invalid" : ""}`}
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
            <label className="col-12 col-lg-4 control-label">Doğum Tarixi</label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="date"
                  name="birth_date"
                  value={data.birth_date}
                  onChange={(e) => setData({ ...data, birth_date: e.target.value })}
                  className={`form-control ${errors?.birth_date ? "invalid" : ""}`}
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

          <div className="form-group row">
            <div className="col-12 col-lg-9 text-right">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ backgroundColor: "#0b8ccd" }}
                disabled={status.loading && status.lastAction == updateAccount.typePrefix}>
                Yenilə
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
