import React, { useState, useEffect } from "react";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Helpers
import { toggleMobileNavigation } from "@/helpers";

// Actions
import { getCategories } from "@/store/actions";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const { items } = useSelector((state: RootState) => state.categories);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (items == null) dispatch(getCategories({ limit: "all" }));
  }, [dispatch, items]);

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
      else if (newSelectedCategory[1] === -1) {
        const children = items?.[newSelectedCategory[0]].children?.length;
        return children ? startHeight + children * elementHeight + "px" : startHeight + "px";
      } else {
        const children =
          items?.[newSelectedCategory[0]].children?.[newSelectedCategory[1]].children?.length;
        return children ? startHeight + children * elementHeight + "px" : startHeight + "px";
      }
    });
  };

  return (
    <React.Fragment>
      <div className="navigation-menu-overlay" onClick={toggleMobileNavigation}></div>

      {/* Mobile Navigation */}
      <div id="mobile-navigation">
        <div className="mobile-navigation" style={{ height: navigationHeight }}>
          {/* Level 1 */}
          <div className="category-level-1">
            <ul>
              {items?.map((e1, i) => (
                <li key={i} className={`has-sub-category ${i == selectedCategory[0] && "active"}`}>
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
                        <i className="fas fa-chevron-left" aria-hidden="true"></i>
                        <span>Geri Dön</span>
                      </a>
                    </div>

                    <div className="mobile-navigation-parent">
                      <a role="button">{e1.name}</a>
                    </div>

                    <ul>
                      <li>
                        <Link to={`/categories/${e1.slug}`}>
                          <div>
                            <span>Hamısı</span>
                          </div>
                        </Link>
                      </li>

                      {e1.children?.map((e2, i2) => (
                        <li
                          key={i2}
                          className={`has-sub-category ${i2 == selectedCategory[1] && "active"}`}>
                          <a role="button" onClick={() => handleCategory(i2, 1)}>
                            <div>
                              <span>{e2.name}</span>
                            </div>

                            <i className="fas fa-chevron-right" aria-hidden="true"></i>
                          </a>

                          {/* Level 3 */}
                          <div className="category-level-3">
                            <div className="mobile-navigation-back">
                              <a role="button" onClick={() => handleCategory(i2, 1)}>
                                <i className="fas fa-chevron-left" aria-hidden="true"></i>
                                <span>Geri Dön</span>
                              </a>
                            </div>

                            <div className="mobile-navigation-parent">
                              <a role="button">{e2.name}</a>
                            </div>

                            <ul>
                              <li>
                                <Link to={`/categories/${e2.slug}`}>
                                  <div>
                                    <span>Hamısı</span>
                                  </div>
                                </Link>
                              </li>

                              {e2.children?.map((e3, i3) => (
                                <li key={i3}>
                                  <Link to={`/categories/${e3.slug}`}>
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
            </ul>
          </div>

          <div className="mobile-navigation-menu-items">
            <ul>
              <li>
                <a
                  href="https://www.dentrealmarket.com/sayfa/dentrealmarket-hesap-silme"
                  target="_blank">
                  <div>
                    <span>Hesap Silme İstegi</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigation;
