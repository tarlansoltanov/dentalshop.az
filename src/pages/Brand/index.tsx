import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Components
import ProductCard from "@/components/ProductCard";

// Helpers
import { convertToSearchParams } from "@/helpers";

// Types
import { ProductFilter } from "@/types/filters";

// Actions
import { getProducts } from "@/store/actions";

const BrandProducts = () => {
  const location = useLocation();

  const slug = location.pathname.split("/")[2];
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();
  const { items: products, count: itemCount } = useSelector((state: RootState) => state.products);

  // MaxPage
  const [maxPage, setMaxPage] = useState<number>(1);

  // Filters
  const [filter, setFilter] = useState<ProductFilter>({
    page: Number(searchParams.get("page")) || null,
    limit: Number(searchParams.get("limit")) || null,
  });

  useEffect(() => {
    dispatch(getProducts({ brand: slug, ...filter }));

    const params = convertToSearchParams(filter);
    setSearchParams(params);
  }, [filter]);

  useEffect(() => {
    setMaxPage(Math.ceil(itemCount / (Number(filter.limit) || 12)));
  }, [itemCount, filter.limit]);

  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <div id="product-list-container">
              <div id="filter-wrapper" className="has-sorting-option">
                <div className="filter-wrapper-content">
                  <div id="sorting-options" className="sorting-options-content openbox-content">
                    <form className="form-horizontal">
                      <div className="row">
                        <div className="col-6 col-lg-auto">
                          <div className="checkbox-custom mt-3 mb-3">
                            <input
                              type="checkbox"
                              name="only_stock"
                              checked={filter.only_stock || false}
                              onChange={() =>
                                setFilter((prev) => ({
                                  ...prev,
                                  only_stock: prev.only_stock ? null : true,
                                }))
                              }
                            />
                            <label
                              htmlFor="only_stock"
                              onClick={() =>
                                setFilter((prev) => ({
                                  ...prev,
                                  only_stock: prev.only_stock ? null : true,
                                }))
                              }>
                              Stokda olanlar
                            </label>
                          </div>
                        </div>

                        <div className="col-6 col-lg">
                          <div className="record-count text-right mt-3 mb-3">
                            Ümumi {itemCount} məhsul
                          </div>
                        </div>

                        <div className="col-6 col-lg-auto">
                          <label htmlFor="sortingOption" className="mb-0 d-block">
                            <select
                              className="form-control"
                              onChange={(e) =>
                                setFilter((prev) => ({ ...prev, ordering: e.target.value }))
                              }>
                              <option>Standart</option>
                              <option value="price"> Ən Aşağı Qiymət </option>
                              <option value="-price"> Ən Yuxarı Qiymət </option>
                              <option value="-discount"> Endirim miqdarı </option>
                              <option value="name"> A'dan Z'yə </option>
                              <option value="-name"> Z'dən A'ya </option>
                            </select>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="showcase-container">
                <div className="row">
                  {products?.map((item, index) => (
                    <div className="col-6 col-lg-3" key={index}>
                      <ProductCard product={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="paginate-wrapper">
                <div className="paginate">
                  {filter.page && filter.page > 1 && (
                    <div className="paginate-left paginate-active">
                      <a
                        href="#"
                        onClick={() =>
                          setFilter((prev) => ({ ...prev, page: prev.page && prev.page - 1 }))
                        }>
                        <i className="fas fa-chevron-left" aria-hidden="true"></i>
                      </a>
                    </div>
                  )}

                  <div className="paginate-content">
                    {Array.from({ length: maxPage }).map((_, index) => (
                      <a
                        href="#"
                        key={index}
                        className={
                          filter.page === index + 1 || (!filter.page && index === 0)
                            ? "paginate-element-active"
                            : ""
                        }
                        onClick={() => setFilter((prev) => ({ ...prev, page: index + 1 }))}>
                        {index + 1}
                      </a>
                    ))}
                  </div>

                  {((filter.page && filter.page !== maxPage) || (!filter.page && maxPage > 1)) && (
                    <div className="paginate-right paginate-active">
                      <a
                        href="#"
                        onClick={() =>
                          setFilter((prev) => ({ ...prev, page: prev.page && prev.page + 1 }))
                        }>
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default BrandProducts;
