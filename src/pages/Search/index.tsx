import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Components
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";

// Helpers
import { convertToSearchParams } from "@/helpers";

// Types
import { ProductFilter } from "@/types/filters";

// Actions
import { getBrands, getProducts } from "@/store/actions";

const SearchProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();

  // Category
  const { status: statusCategory, items: categories } = useSelector(
    (state: RootState) => state.categories
  );

  // Brands
  const { status: statusBrand, items: brands } = useSelector((state: RootState) => state.brands);

  // Products
  const {
    items: products,
    count: itemCount,
    status,
  } = useSelector((state: RootState) => state.products);

  // MaxPage
  const [maxPage, setMaxPage] = useState<number>(1);

  // Filters
  const [filter, setFilter] = useState<ProductFilter>({
    name: searchParams.get("name") || null,
    code: searchParams.get("code") || null,
    brand: searchParams.get("brand") || null,
    category: searchParams.get("category") || null,
    min_price: Number(searchParams.get("min_price")) || null,
    max_price: Number(searchParams.get("max_price")) || null,
    page: Number(searchParams.get("page")) || null,
    limit: Number(searchParams.get("limit")) || null,
    ordering: searchParams.get("ordering") || null,
  });

  useEffect(() => {
    dispatch(getProducts(filter));
    setSearchParams(convertToSearchParams(filter));
  }, [filter, dispatch]);

  useEffect(() => {
    setMaxPage(Math.ceil(itemCount / (Number(filter.limit) || 12)));
  }, [itemCount, filter.limit]);

  useEffect(() => {
    document.body.classList.add("current-page-product-list-search");
    dispatch(getBrands({ limit: "all" }));

    return () => {
      document.body.classList.remove("current-page-product-list-search");
    };
  }, []);

  if (statusCategory.loading || statusBrand.loading) return <Loader />;

  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <div className="contentbox-header">
              <h4>Detallı Axtarış</h4>
            </div>

            <div className="contentbox-body">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <form className="form-horizontal" onSubmit={(e) => e.preventDefault()}>
                    <div className="contentbox-block">
                      <div className="form-group row">
                        <label className="col-12 col-lg-4 control-label">Axtarış sözü</label>

                        <div className="col-12 col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={filter.name || ""}
                            onChange={(e) =>
                              setFilter((prev) => ({ ...prev, name: e.target.value }))
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-12 col-lg-4 control-label">Kateqoriyalar</label>

                        <div className="col-12 col-lg-8">
                          <select
                            className="form-control"
                            name="category"
                            value={filter.category || ""}
                            onChange={(e) =>
                              setFilter((prev) => ({ ...prev, category: e.target.value }))
                            }>
                            <option value="">Hamısı</option>

                            {categories?.map((item, index) => (
                              <option key={index} value={item.slug}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-12 col-lg-4 control-label">Markalar</label>
                        <div className="col-12 col-lg-8">
                          <div className="selectbox">
                            <select
                              className="form-control"
                              name="brand"
                              value={filter.brand || ""}
                              onChange={(e) =>
                                setFilter((prev) => ({ ...prev, brand: e.target.value }))
                              }>
                              <option value="">Hamısı</option>

                              {brands?.map((item, index) => (
                                <option key={index} value={item.slug}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-12 col-lg-4 control-label">Stok Kodu</label>

                        <div className="col-12 col-lg-8">
                          <input
                            type="text"
                            className="form-control"
                            name="code"
                            value={filter.code || ""}
                            onChange={(e) =>
                              setFilter((prev) => ({ ...prev, code: e.target.value }))
                            }
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-12 col-lg-4 control-label">Qiymət aralığı</label>

                        <div className="col-4 col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            name="min_price"
                            value={filter.min_price || ""}
                            onChange={(e) =>
                              setFilter((prev) => ({ ...prev, min_price: Number(e.target.value) }))
                            }
                          />
                        </div>

                        <div className="col-4 col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            name="max_price"
                            value={filter.max_price || ""}
                            onChange={(e) =>
                              setFilter((prev) => ({ ...prev, max_price: Number(e.target.value) }))
                            }
                          />
                        </div>

                        <label className="col-4 col-lg-2 control-label">AZN Arası</label>
                      </div>
                    </div>

                    <div className="contentbox-block">
                      <div className="form-group row">
                        <div className="col-12 col-lg-3 offset-lg-4">
                          <button type="submit" className="btn btn-block btn-primary mr-2">
                            Axtar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div id="results-page">
              <div id="responsive-mobile-filter">
                <div id="sorting-options" className="sorting-options-content openbox-content">
                  <form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}>
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
                            value={filter.ordering || ""}
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

              {status.loading && <Loader />}

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

export default SearchProducts;
