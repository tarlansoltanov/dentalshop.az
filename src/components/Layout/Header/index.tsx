import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Assets
import { LogoPNG, MenuIconSVG, SearchIconSVG } from "@/assets/images";

// Helpers
import { toggleMobileNavigation } from "@/helpers";

// Actions
import { getCategories } from "@/store/actions";

const Header = () => {
  const { items } = useSelector((state: RootState) => state.categories);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (items == null) dispatch(getCategories({ limit: "all" }));
  }, [dispatch, items]);

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
                  <form>
                    <select name="category" id="category">
                      <option value="0">Kategoriyada axtar</option>
                      {items?.map((e, i) => (
                        <option key={i} value={e.slug}>
                          {e.name}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      name="search"
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
                        {items?.map((e1, i) => (
                          <li key={i} className="has-sub-category">
                            <Link to={`/category/${e1.slug}`} title={e1.name}>
                              <span>{e1.name}</span>
                            </Link>

                            {/* Level 2 */}
                            <div className="sub-category category-level-2">
                              <div className="container">
                                <ul>
                                  {e1.children?.map((e2, i) => (
                                    <li key={i} className="has-sub-category">
                                      <Link to={`/category/${e2.slug}`} title={e2.name}>
                                        <span>{e2.name}</span>
                                      </Link>

                                      {/* Level 3 */}
                                      <div className="sub-category category-level-3">
                                        <ul>
                                          {e2.children?.map((e3, i) => (
                                            <li key={i}>
                                              <Link to={`/category/${e3.slug}`} title={e3.name}>
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
