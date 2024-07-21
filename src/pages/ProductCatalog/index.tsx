import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

// Types
import { Category } from "@/types/models";

// Actions
import { getCategories, getProducts } from "@/store/actions";

const ProductCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items: categories, status: categoriesStatus } = useSelector(
    (state: RootState) => state.categories
  );
  const { items: products, status: productsStatus } = useSelector(
    (state: RootState) => state.products
  );

  const [selected, setSelected] = useState<string[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (showProducts || selected.length === 3)
      dispatch(
        getProducts({ category: selected[selected.length - 1], limit: "all" })
      );
  }, [selected, showProducts]);

  useEffect(() => {
    if (selected.length === 0) setSelectedCategories(categories || []);
    if (selected.length === 1)
      setSelectedCategories(
        categories?.find((item) => item.slug === selected[0])?.children || []
      );
    if (selected.length === 2)
      setSelectedCategories(
        categories
          ?.find((item) => item.slug === selected[0])
          ?.children?.find((item) => item.slug === selected[1])?.children || []
      );
  }, [selected, categories]);

  useEffect(() => {
    dispatch(getCategories({}));
  }, []);

  if (
    (productsStatus.loading &&
      productsStatus.lastAction === getProducts.typePrefix) ||
    categoriesStatus.loading
  )
    return <Loader />;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {showProducts || selected.length === 3 ? (
            <section className="col-lg-54">
              <div className="contentbox-header">
                <h4>Məhsullar</h4>
              </div>

              <table className="table table-orders table-mobile">
                <thead>
                  <tr>
                    <th>Kod</th>
                    <th>Ad</th>
                    <th>Qiymət</th>
                  </tr>
                </thead>

                <tbody>
                  {products?.map((item, index) => (
                    <tr key={index}>
                      <td className="code-col">
                        <Link to={`/products/${item.slug}`}>{item.code}</Link>
                      </td>

                      <td className="code-col">
                        <Link to={`/products/${item.slug}`}>{item.name}</Link>
                      </td>

                      <td className="price-col ">
                        <span className="current-price">{item.price} AZN</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ) : (
            <section className="col-lg-54">
              <div className="contentbox-header">
                <h4>Kateqoriyalar</h4>
              </div>

              <table className="table table-orders table-mobile">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Ad</th>
                  </tr>
                </thead>

                <tbody>
                  {selected.length > 0 && (
                    <React.Fragment>
                      <tr>
                        <td
                          className="code-col"
                          style={{ textAlign: "center" }}>
                          <Link
                            to="#"
                            onClick={() => {
                              setSelected(selected.slice(0, -1));
                            }}>
                            Geri
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="code-col"
                          style={{ textAlign: "center" }}>
                          <Link
                            to="#"
                            onClick={() => {
                              setShowProducts(true);
                            }}>
                            Hamısını göstər
                          </Link>
                        </td>
                      </tr>
                    </React.Fragment>
                  )}
                  {selectedCategories.map((item, index) => (
                    <tr key={index}>
                      <td className="code-col" style={{ textAlign: "center" }}>
                        <Link
                          to="#"
                          onClick={() => {
                            setSelected([...selected, item.slug]);
                          }}>
                          {item.name}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductCatalog;
