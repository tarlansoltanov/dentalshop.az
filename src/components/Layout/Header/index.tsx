import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Assets
import { LogoPNG, MenuIconSVG, SearchIconSVG } from "@/assets/images";

// Helpers
import { getURLWithFilterParams, toggleMobileNavigation } from "@/helpers";

// Actions
import { getAccount, getBrands, getCategories } from "@/store/actions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Account
  const { user } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    if (isAuth && user == null) dispatch(getAccount());
  }, [dispatch, isAuth, user]);

  // Categories
  const { items: categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (categories == null) dispatch(getCategories({ limit: "all" }));
  }, [categories]);

  // Brands
  const { items: brands } = useSelector((state: RootState) => state.brands);

  useEffect(() => {
    if (brands == null) dispatch(getBrands({ limit: "all" }));
  }, [brands]);

  return (
    <React.Fragment>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col col-xl-3 order-1">
                <div className="header-mobile-left d-flex align-items-center">
                  <div className="toggle-bar" onClick={toggleMobileNavigation}>
                    <img src={MenuIconSVG} alt="Menu Icon" />
                  </div>

                  <div className="logo">
                    <Link to="/">
                      <img src={LogoPNG} alt="Logo" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="col-xl-6 order-3 order-xl-2">
                <div className="search">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target as any;

                      const params = {
                        name: form.name.value,
                        category: form.category.value,
                      };

                      navigate(getURLWithFilterParams("/products", params));
                    }}>
                    <select name="category">
                      <option value="">Kategoriyada axtar</option>
                      {categories?.map((e, i) => (
                        <option key={i} value={e.slug}>
                          {e.name}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      name="name"
                      placeholder="Məhsul axtarışı"
                      className="auto-complete"
                    />

                    <button>
                      <img src={SearchIconSVG} alt="Search Icon" />
                    </button>
                  </form>
                </div>
              </div>

              {/* User Menu */}
              <div className="col-auto col-xl-3 order-2 order-xl-3">
                <div className="header-top-right d-flex align-items-center justify-content-end">
                  <div className="user-menu">
                    {!isAuth ? (
                      <React.Fragment>
                        <div className="member-login-market">
                          <Link to="/auth/login">
                            <i className="fas fa-user-md" aria-hidden="true"></i>&nbsp;
                            <span>Daxil olun</span>
                          </Link>
                        </div>

                        <br />

                        <div className="member-uyeol">
                          <Link to="/auth/register">
                            <i className="fas fa-user-plus" aria-hidden="true"></i>&nbsp;
                            <span>Qeydiyyat</span>
                          </Link>
                        </div>
                      </React.Fragment>
                    ) : (
                      <div className="member-login-market">
                        <div
                          role="button"
                          onClick={(e) => e.currentTarget.children[2].classList.toggle("active")}
                          className="dropdown-toggle">
                          <i className="fas fa-user-md" aria-hidden="true"></i>&nbsp;
                          <span>{user ? `${user.first_name} ${user.last_name}` : "Hesabım"}</span>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/account">Hesabım</Link>
                            </li>

                            <li>
                              <Link to="/account/favorites">Favorilərim</Link>
                            </li>

                            <li>
                              <Link to="/account/freezone">Elanlarım</Link>
                            </li>

                            <li>
                              <Link to="/account/orders">Sifarişlərim</Link>
                            </li>

                            <li>
                              <Link to="/auth/logout">Çıxış</Link>
                            </li>
                          </ul>
                        </div>

                        <Link to="/cart">
                          <i className="fas fa-cart-shopping" aria-hidden="true"></i>&nbsp;
                          <span>Səbət</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="header-bottom">
            <div className="container">
              <nav id="navigation">
                <div className="row">
                  <div className="col-lg-9 position-static">
                    {/* Level 1 */}
                    <div className="category-level-1">
                      <ul>
                        {/* Brands */}
                        <li className="has-sub-category">
                          <a role="button">
                            <span>Markalar</span>
                          </a>

                          <div className="sub-category category-level-2">
                            <div className="container">
                              <ul>
                                {brands?.map((item, index) => (
                                  <li key={index}>
                                    <Link to={`/products?brand=${item.slug}`} title={item.name}>
                                      <span>{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </li>

                        {/* FreeZone */}
                        <li className="has-sub-category">
                          <Link to="/free-zone">
                            <span>Free Zone</span>
                          </Link>
                        </li>

                        {categories?.map((e1, i) => (
                          <li key={i} className="has-sub-category">
                            <Link to={`/products?category=${e1.slug}`} title={e1.name}>
                              <span>{e1.name}</span>
                            </Link>

                            {/* Level 2 */}
                            <div className="sub-category category-level-2">
                              <div className="container">
                                <ul>
                                  {e1.children?.map((e2, i) => (
                                    <li key={i} className="has-sub-category">
                                      <Link to={`/products?category=${e2.slug}`} title={e2.name}>
                                        <span>{e2.name}</span>
                                      </Link>

                                      {/* Level 3 */}
                                      <div className="sub-category category-level-3">
                                        <ul>
                                          {e2.children?.map((e3, i) => (
                                            <li key={i}>
                                              <Link
                                                to={`/products?category=${e3.slug}`}
                                                title={e3.name}>
                                                <span>{e3.name}</span>
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
