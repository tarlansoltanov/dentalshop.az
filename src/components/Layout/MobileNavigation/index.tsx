import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Redux
import { RootState } from "@/store";
import { useSelector } from "react-redux";

// Helpers
import { toggleMobileNavigation } from "@/helpers";

const MobileNavigation = () => {
  const location = useLocation();

  // Categories
  const { items: categories } = useSelector(
    (state: RootState) => state.categories
  );

  // Brands
  const { items: brands } = useSelector((state: RootState) => state.brands);

  const [selectedCategory, setSelectedCategory] = useState<number[]>([-1, -1]);
  const [navigationHeight, setNavigationHeight] = useState<string>("auto");

  const handleCategory = (id: number, level: 0 | 1) => {
    const newSelectedCategory = [...selectedCategory];

    if (newSelectedCategory[level] === id) newSelectedCategory[level] = -1;
    else newSelectedCategory[level] = id;

    setSelectedCategory(() => [...newSelectedCategory]);
    setNavigationHeight(() => {
      const startHeight = 105.47;
      const elementHeight = 49.563;

      if (newSelectedCategory[0] === -1) return "auto";
      else if (newSelectedCategory[0] === -10) {
        const children = brands?.length;
        return children
          ? startHeight + children * elementHeight + "px"
          : startHeight + "px";
      } else if (newSelectedCategory[0] === -20) {
        const children = 5;
        return children
          ? startHeight + children * elementHeight + "px"
          : startHeight + "px";
      } else if (newSelectedCategory[1] === -1) {
        const children = categories?.[newSelectedCategory[0]].children?.length;
        return children
          ? startHeight + (children + 1) * elementHeight + "px"
          : startHeight + elementHeight + "px";
      } else {
        const children =
          categories?.[newSelectedCategory[0]].children?.[
            newSelectedCategory[1]
          ].children?.length;
        return children
          ? startHeight + (children + 1) * elementHeight + "px"
          : startHeight + elementHeight + "px";
      }
    });
  };

  useEffect(() => {
    document.body.classList.remove("navigation-active");
  }, [location.pathname, location.search]);

  return (
    <React.Fragment>
      <div
        className="navigation-menu-overlay"
        onClick={toggleMobileNavigation}></div>

      {/* Mobile Navigation */}
      <div id="mobile-navigation">
        <div className="mobile-navigation" style={{ height: navigationHeight }}>
          {/* Level 1 */}
          <div className="category-level-1">
            <ul>
              {/* Brands */}
              <li
                className={`has-sub-category ${
                  -10 == selectedCategory[0] && "active"
                }`}>
                <a role="button" onClick={() => handleCategory(-10, 0)}>
                  <div>
                    <span>Brendlər</span>
                  </div>

                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </a>

                {/* Level 2 */}
                <div className="category-level-2">
                  <div className="mobile-navigation-back">
                    <a role="button" onClick={() => handleCategory(-1, 0)}>
                      <i className="fas fa-chevron-left" aria-hidden="true"></i>
                      <span>Geri Dön</span>
                    </a>
                  </div>

                  <div className="mobile-navigation-parent">
                    <a role="button">Brendlər</a>
                  </div>

                  <ul>
                    {brands?.map((item, index) => (
                      <li key={index}>
                        <Link to={`/products?brand=${item.slug}`}>
                          <div>
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Free Zone */}
              <li>
                <Link to="/free-zone">
                  <div>
                    <span>Azad Zona</span>
                  </div>
                </Link>
              </li>

              {categories?.map((e1, i) => (
                <li
                  key={i}
                  className={`has-sub-category ${
                    i == selectedCategory[0] && "active"
                  }`}>
                  <a role="button" onClick={() => handleCategory(i, 0)}>
                    <div>
                      <span>{e1.name}</span>
                    </div>

                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                  </a>

                  {/* Level 2 */}
                  <div className="category-level-2">
                    <div className="mobile-navigation-back">
                      <a role="button" onClick={() => handleCategory(i, 0)}>
                        <i
                          className="fas fa-chevron-left"
                          aria-hidden="true"></i>
                        <span>Geri Dön</span>
                      </a>
                    </div>

                    <div className="mobile-navigation-parent">
                      <a role="button">{e1.name}</a>
                    </div>

                    <ul>
                      <li>
                        <Link to={`/products?category=${e1.slug}`}>
                          <div>
                            <span>Hamısı</span>
                          </div>
                        </Link>
                      </li>

                      {e1.children?.map((e2, i2) => (
                        <li
                          key={i2}
                          className={`has-sub-category ${
                            i2 == selectedCategory[1] && "active"
                          }`}>
                          <a
                            role="button"
                            onClick={() => handleCategory(i2, 1)}>
                            <div>
                              <span>{e2.name}</span>
                            </div>

                            <i
                              className="fas fa-chevron-right"
                              aria-hidden="true"></i>
                          </a>

                          {/* Level 3 */}
                          <div className="category-level-3">
                            <div className="mobile-navigation-back">
                              <a
                                role="button"
                                onClick={() => handleCategory(i2, 1)}>
                                <i
                                  className="fas fa-chevron-left"
                                  aria-hidden="true"></i>
                                <span>Geri Dön</span>
                              </a>
                            </div>

                            <div className="mobile-navigation-parent">
                              <a role="button">{e2.name}</a>
                            </div>

                            <ul>
                              <li>
                                <Link to={`/products?category=${e2.slug}`}>
                                  <div>
                                    <span>Hamısı</span>
                                  </div>
                                </Link>
                              </li>

                              {e2.children?.map((e3, i3) => (
                                <li key={i3}>
                                  <Link to={`/products?category=${e3.slug}`}>
                                    <div>
                                      <span>{e3.name}</span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}

              {/* About */}

              {/* Brands */}
              <li
                className={`has-sub-category ${
                  -20 == selectedCategory[0] && "active"
                }`}>
                <a role="button" onClick={() => handleCategory(-20, 0)}>
                  <div>
                    <span>Haqqımızda</span>
                  </div>

                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </a>

                {/* Level 2 */}
                <div className="category-level-2">
                  <div className="mobile-navigation-back">
                    <a role="button" onClick={() => handleCategory(-1, 0)}>
                      <i className="fas fa-chevron-left" aria-hidden="true"></i>
                      <span>Geri Dön</span>
                    </a>
                  </div>

                  <div className="mobile-navigation-parent">
                    <a role="button">Haqqımızda</a>
                  </div>

                  <ul>
                    <li>
                      <Link to={`/insurance`} title={"Zəmanət"}>
                        <span>Zəmanət</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/payment`} title={"Ödəniş və kredit"}>
                        <span>Ödəniş və kredit</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/delivery`} title={"Çatdırılma"}>
                        <span>Çatdırılma</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/about`} title={"Məlumat"}>
                        <span>Məlumat</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/contact`} title={"Əlaqə"}>
                        <span>Əlaqə</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigation;
