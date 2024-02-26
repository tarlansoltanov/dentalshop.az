import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Components
import NotFound from "@/pages/NotFound";
import Loader from "@/components/Loader";

// Actions
import { deleteFreezoneItem, getFreezoneItem } from "@/store/actions";

const FreeZoneDetails = () => {
  const location = useLocation();

  const slug = location.pathname.split("/")[2];

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Account
  const { user } = useSelector((state: RootState) => state.account);

  // Product Data
  const { item, status } = useSelector((state: RootState) => state.freezone);

  useEffect(() => {
    dispatch(getFreezoneItem(slug));
  }, [dispatch, slug]);

  if (item === null) {
    if (status.loading) {
      return <Loader />;
    }
    return <NotFound />;
  }

  return (
    <main id="main">
      <section>
        <div id="product-detail-container">
          <div className="container">
            {/* Breadcumbs */}
            <div id="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">
                    <span>
                      <span>Ana Səhifə</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/free-zone">
                    <span>
                      <i></i>
                      <span>Free Zone</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <span>
                    <i></i>
                    <span>{item.title}</span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="product-area-top">
              <div className="row">
                <div className="col-xl-6">
                  <div className="product-left position-relative">
                    <div className="product-image">
                      <div id="product-primary-image">
                        <img id="primary-image" src={item.image} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="product-right">
                    {/* Title */}
                    <div className="product-list-group">
                      <div className="product-title">
                        <h1>{item.title}</h1>
                      </div>
                    </div>

                    <div className="product-list-group">
                      <div className="product-list-container">
                        {/* User */}
                        <div className="product-list-row product-brands">
                          <div className="product-list-title">İstifadəçi</div>
                          <div className="product-list-content">
                            {item.user?.first_name} {item.user?.last_name}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="product-list-row product-brands">
                          <div className="product-list-title">Əlaqə</div>
                          <div className="product-list-content">{item.user?.phone}</div>
                        </div>

                        {/* Address */}
                        <div className="product-list-row product-brands">
                          <div className="product-list-title">Ünvan</div>
                          <div className="product-list-content">{item.address}</div>
                        </div>

                        {/* Address */}
                        <div className="product-list-row product-brands">
                          <div className="product-list-title">Status</div>
                          <div className="product-list-content">
                            <span className="badge info">{item.status}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="product-list-row">
                          <div className="product-list-title">Qiymət</div>
                          <div className="product-list-content">
                            <span className="current-price">
                              {item.price}
                              <span>AZN</span>
                            </span>
                          </div>
                        </div>

                        {item.description && (
                          <div className="detay-info">
                            <ul>
                              <li>{item.description}</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isAuth && item.user.phone === user?.phone && (
              <div className="user-bottom">
                <div id="product-user-buttons">
                  <div className="product-favorite">
                    <Link to={`/free-zone/${item.slug}/update`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{ color: "#2b9b2f", fontSize: "20px" }}></i>
                      <span>Redaktə et</span>
                    </Link>
                  </div>
                  <div className="product-favorite">
                    <a
                      role="button"
                      onClick={() => {
                        dispatch(deleteFreezoneItem(item.slug));
                        navigate("/account/free-zone");
                      }}>
                      <i
                        className="fas fa-trash"
                        style={{ color: "#2b9b2f", fontSize: "20px" }}></i>
                      <span>Sil</span>
                    </a>
                  </div>
                </div>

                {/* New Arrivals */}
                <div className="entry-outlet-bottom1">
                  <span>
                    <Link to="/products?is_new=true">
                      <div className="entry-outlet-bottom">Yeni Məhsullar</div>
                    </Link>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FreeZoneDetails;
