import React, { useEffect } from "react";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Assets
import { LogoPNG } from "@/assets/images";

// Helpers
import { toggleMobileNavigation } from "@/helpers";

// Actions
import { getCategories } from "@/store/actions";

const Header = () => {
  const { items } = useSelector((state: RootState) => state.categories);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (items == null) dispatch(getCategories());
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
                  <div className="toggle-bar">
                    <a href="#" onClick={toggleMobileNavigation}>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.584 26.001C10.4269 25.9946 10.2786 25.928 10.1697 25.8149C10.0608 25.7019 10 25.5512 10 25.3945C10 25.2378 10.0608 25.0871 10.1697 24.9741C10.2786 24.861 10.4269 24.7944 10.584 24.788H25.416C25.5731 24.7944 25.7214 24.861 25.8303 24.9741C25.9392 25.0871 26 25.2378 26 25.3945C26 25.5512 25.9392 25.7019 25.8303 25.8149C25.7214 25.928 25.5731 25.9946 25.416 26.001H10.584ZM10.584 18.601C10.4269 18.5946 10.2786 18.528 10.1697 18.4149C10.0608 18.3019 10 18.1512 10 17.9945C10 17.8378 10.0608 17.6871 10.1697 17.5741C10.2786 17.461 10.4269 17.3944 10.584 17.388H25.416C25.5731 17.3944 25.7214 17.461 25.8303 17.5741C25.9392 17.6871 26 17.8378 26 17.9945C26 18.1512 25.9392 18.3019 25.8303 18.4149C25.7214 18.528 25.5731 18.5946 25.416 18.601H10.584ZM10.584 11.213C10.4269 11.2066 10.2786 11.14 10.1697 11.0269C10.0608 10.9139 10 10.7632 10 10.6065C10 10.4498 10.0608 10.2991 10.1697 10.1861C10.2786 10.073 10.4269 10.0064 10.584 10H25.416C25.5731 10.0064 25.7214 10.073 25.8303 10.1861C25.9392 10.2991 26 10.4498 26 10.6065C26 10.7632 25.9392 10.9139 25.8303 11.0269C25.7214 11.14 25.5731 11.2066 25.416 11.213H10.584Z"
                          fill="#110F21"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="logo">
                    <a href="#" aria-label="Logo">
                      <img src={LogoPNG} alt="Logo" />
                    </a>
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
                      name="label"
                      placeholder="Məhsul axtarışı"
                      aria-label="Search"
                      className="auto-complete"
                    />

                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.9367 20.8698C5.43667 20.8698 1 16.4257 1 10.9533C1 5.4808 5.43667 1 10.9367 1C16.4367 1 20.8733 5.44407 20.8733 10.9533C20.8733 12.7162 20.3967 14.4424 19.5533 15.9482C19.26 16.4624 18.5633 16.6461 18.05 16.3523C17.5367 16.0584 17.3533 15.3606 17.6467 14.8464C18.3433 13.6711 18.6733 12.3489 18.6733 10.9533C18.6367 6.65609 15.19 3.20367 10.9367 3.20367C6.68333 3.20367 3.2 6.65609 3.2 10.9533C3.2 15.2504 6.64667 18.7028 10.9367 18.7028C12.2933 18.7028 13.65 18.3356 14.8233 17.6745C15.3367 17.3806 16.0333 17.5643 16.3267 18.0785C16.62 18.5927 16.4367 19.2905 15.9233 19.5843C14.3833 20.429 12.66 20.8698 10.9367 20.8698Z"
                          fill="black"></path>
                        <path
                          d="M10.9367 20.8698C5.43667 20.8698 1 16.4257 1 10.9533C1 9.19032 1.47667 7.46411 2.32 5.95826C2.61333 5.44407 3.31 5.26043 3.82333 5.55426C4.33667 5.84808 4.52 6.54591 4.22667 7.0601C3.56667 8.23539 3.2 9.59432 3.2 10.9533C3.2 15.2137 6.64667 18.7028 10.9367 18.7028C15.2267 18.7028 18.6733 15.2504 18.6733 10.9533C18.6733 6.65609 15.19 3.20367 10.9367 3.20367C9.58 3.20367 8.22333 3.57095 7.05 4.23205C6.53667 4.52588 5.84 4.34224 5.54667 3.82805C5.25333 3.31386 5.43667 2.61603 5.95 2.3222C7.45333 1.47746 9.17667 1 10.9367 1C16.4 1 20.8367 5.44407 20.8367 10.9533C20.8367 16.4624 16.4 20.8698 10.9367 20.8698Z"
                          fill="black"></path>
                        <path
                          d="M21.9 23.0001C21.6066 23.0001 21.35 22.8899 21.13 22.6695L16.4733 18.0051C16.0333 17.5643 16.0333 16.8665 16.4733 16.4625C16.9133 16.0218 17.61 16.0218 18.0133 16.4625L22.67 21.1269C23.11 21.5677 23.11 22.2655 22.67 22.6695C22.45 22.8899 22.1566 23.0001 21.9 23.0001Z"
                          fill="black"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* User Menu */}
              <div className="col-auto col-xl-3 order-2 order-xl-3">
                <div className="header-top-right d-flex align-items-center justify-content-end">
                  <div className="user-menu">
                    <p></p>
                    <div className="member-login-market">
                      <a href="#" aria-label="Member Login">
                        <i className="fas fa-user-md" aria-hidden="true"></i>&nbsp;
                        <span>Daxil olun</span>
                      </a>
                    </div>

                    <br />

                    <div className="member-uyeol">
                      <a href="#" aria-label="Member Signup">
                        <i className="fas fa-user-plus" aria-hidden="true"></i>&nbsp;
                        <span>Qeydiyyat</span>
                      </a>
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
                            <a href="#" title={e1.name}>
                              <span>{e1.name}</span>
                            </a>

                            {/* Level 2 */}
                            <div className="sub-category category-level-2">
                              <div className="container">
                                <ul>
                                  {e1.children?.map((e2, i) => (
                                    <li key={i} className="has-sub-category">
                                      <a href="#" title={e2.name}>
                                        <span>{e2.name}</span>
                                      </a>

                                      {/* Level 3 */}
                                      <div className="sub-category category-level-3">
                                        <ul>
                                          {e2.children?.map((e3, i) => (
                                            <li key={i}>
                                              <a href="#" title={e3.name}>
                                                <span>{e3.name}</span>
                                              </a>
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
