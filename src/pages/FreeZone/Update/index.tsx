import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Helpers
import { getFormData } from "@/helpers";

// Actions
import { getFreezoneItem, updateFreezoneItem } from "@/store/actions";

// Actions

const FreeZoneUpdate = () => {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Freezone
  const { item, status, errors } = useSelector((state: RootState) => state.freezone);

  useEffect(() => {
    dispatch(getFreezoneItem(slug));
  }, [dispatch, slug]);

  // Data
  const [data, setData] = useState({
    title: "",
    price: "",
    address: "",
    description: "",
  });

  useEffect(() => {
    if (item === null) return;
    setData({
      title: item.title || "",
      price: item.price || "",
      address: item.address || "",
      description: item.description || "",
    });
  }, [item]);

  useEffect(() => {
    if (status.success && status.lastAction == updateFreezoneItem.typePrefix) {
      navigate("/account/free-zone");
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = getFormData(data);

    if (e.currentTarget.image.files[0]) formData.append("image", e.currentTarget.image.files[0]);

    // Dispatch
    dispatch(updateFreezoneItem({ slug, formData }));
  };

  if (!isAuth) navigate("/free-zone");

  return (
    <div className="signup-container account-box">
      <div className="contentbox-header">
        <h4>Elan Redaktə et</h4>
      </div>

      <div className="contentbox-body">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="form-group row">
            <label htmlFor="title" className="col-12 col-lg-4 control-label">
              Başlıq
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  className={`form-control ${errors?.data.title ? "invalid" : ""}`}
                  required
                />
                <span className="required">*</span>
              </div>

              {errors?.data.title && (
                <div>
                  <span className="text-danger">{errors.data.title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="form-group row">
            <label htmlFor="image" className="col-12 col-lg-4 control-label">
              Şəkil
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="file"
                  name="image"
                  className={`form-control ${errors?.data.image ? "invalid" : ""}`}
                />
                <span className="required">*</span>
              </div>

              {errors?.data.image && (
                <div>
                  <span className="text-danger">{errors.data.image}</span>
                </div>
              )}
            </div>

            <div className="col-12 col-lg-2">
              <div>
                <img src={item?.image} alt={data.title} style={{ width: "100px" }} />
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="form-group row">
            <label htmlFor="price" className="col-12 col-lg-4 control-label">
              Qiymət
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  className={`form-control ${errors?.data.price ? "invalid" : ""}`}
                />
                <span className="required">*</span>
              </div>

              {errors?.data.price && (
                <div>
                  <span className="text-danger">{errors.data.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="form-group row">
            <label htmlFor="address" className="col-12 col-lg-4 control-label">
              Ünvan
            </label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="text"
                  name="address"
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                  className={`form-control ${errors?.data.address ? "invalid" : ""}`}
                />
              </div>

              {errors?.data.address && (
                <div>
                  <span className="text-danger">{errors.data.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="form-group row">
            <label className="col-12 col-lg-4 control-label">Təsvir</label>

            <div className="col-12 col-lg-5">
              <div>
                <input
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={(e) => setData({ ...data, description: e.target.value })}
                  className={`form-control ${errors?.data.description ? "invalid" : ""}`}
                />
              </div>

              {errors?.data.description && (
                <div>
                  <span className="text-danger">{errors.data.description}</span>
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
                disabled={status.loading && status.lastAction == updateFreezoneItem.typePrefix}>
                Redaktə et
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeZoneUpdate;
