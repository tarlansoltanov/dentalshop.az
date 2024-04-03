import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";

// Helpers
import { convertToSearchParams } from "@/helpers";

// Types
import { ProductFilter } from "@/types/filters";

// Actions
import { getBrands, getCategories, getProducts } from "@/store/actions";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();

  // Categories
  const { items: categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (categories === null) dispatch(getCategories({ limit: "all" }));
  }, [categories]);

  // Brands
  const { items: brands } = useSelector((state: RootState) => state.brands);

  useEffect(() => {
    if (brands === null) dispatch(getBrands({ limit: "all" }));
  }, [brands]);

  // Products
  const { items, count, status } = useSelector((state: RootState) => state.products);

  // Filters
  const [showFilter, setShowFilter] = useState<boolean>(searchParams.toString() !== "");

  const [filter, setFilter] = useState<ProductFilter>({
    name: searchParams.get("name") || null,
    code: searchParams.get("code") || null,
    brand: searchParams.get("brand") || null,
    category: searchParams.get("category") || null,
    is_new: searchParams.get("is_new") === "true" || null,
    discount: searchParams.get("discount") === "true" || null,
    min_price: Number(searchParams.get("min_price")) || null,
    max_price: Number(searchParams.get("max_price")) || null,
    only_stock: searchParams.get("only_stock") === "true" || null,
    ordering: searchParams.get("ordering") || null,
    page: Number(searchParams.get("page")) || null,
    limit: Number(searchParams.get("limit")) || null,
  });

  useEffect(() => {
    dispatch(getProducts({ ...filter }));
    setSearchParams(convertToSearchParams(filter));
  }, [filter]);

  useEffect(() => {
    setFilter({
      name: searchParams.get("name") || null,
      code: searchParams.get("code") || null,
      brand: searchParams.get("brand") || null,
      category: searchParams.get("category") || null,
      is_new: searchParams.get("is_new") === "true" || null,
      discount: searchParams.get("discount") === "true" || null,
      min_price: Number(searchParams.get("min_price")) || null,
      max_price: Number(searchParams.get("max_price")) || null,
      only_stock: searchParams.get("only_stock") === "true" || null,
      ordering: searchParams.get("ordering") || null,
      page: Number(searchParams.get("page")) || null,
      limit: Number(searchParams.get("limit")) || null,
    } as ProductFilter);
  }, [searchParams.toString()]);

  const maxPage = Math.ceil(count / (Number(filter.limit) || 12));

  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <div className="contentbox-header">
              <h4>Məhsullarımız</h4>
            </div>

            {/* Filter Box */}
            <div className={`contentbox-body filterbox ${showFilter ? "active" : ""}`}>
              <div className="row">
                <div className="col-12">
                  <form className="form-horizontal" onSubmit={(e) => e.preventDefault()}>
                    <div className="contentbox-block">
                      <div className="form-group row">
                        <div className="row col-12 col-lg-6">
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

                        <div className="row col-12 col-lg-6">
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
                      </div>

                      <div className="form-group row">
                        <div className="row col-12 col-lg-6">
                          <label className="col-12 col-lg-4 control-label">Kateqoriya</label>

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
                                <React.Fragment key={index}>
                                  <option value={item.slug}>-- {item.name}</option>

                                  {item.children?.map((child, index) => (
                                    <React.Fragment key={index}>
                                      <option value={child.slug}>---- {child.name}</option>

                                      {child.children?.map((subChild, index) => (
                                        <option key={index} value={subChild.slug}>
                                          ------ {subChild.name}
                                        </option>
                                      ))}
                                    </React.Fragment>
                                  ))}
                                </React.Fragment>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row col-12 col-lg-6">
                          <label className="col-12 col-lg-4 control-label">Brendlər</label>

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
                      </div>

                      <div className="form-group row">
                        <div className="row col-12 col-lg-6">
                          <label className="col-12 col-lg-4 control-label">Qiymət aralığı</label>

                          <div className="col-4 col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              name="min_price"
                              value={filter.min_price || ""}
                              onChange={(e) =>
                                setFilter((prev) => ({
                                  ...prev,
                                  min_price: Number(e.target.value),
                                }))
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
                                setFilter((prev) => ({
                                  ...prev,
                                  max_price: Number(e.target.value),
                                }))
                              }
                            />
                          </div>

                          <label className="col-4 col-lg-2 control-label">AZN Arası</label>
                        </div>

                        <div className="row col-12 col-lg-6">
                          {/* Only Stock */}
                          <div className="col-4 col-lg-auto">
                            <div className="checkbox-custom mt-3 mb-3">
                              <input
                                type="checkbox"
                                name="only_stock"
                                readOnly={true}
                                checked={filter.only_stock || false}
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

                          {/* Discounted */}
                          <div className="col-4 col-lg-auto">
                            <div className="checkbox-custom mt-3 mb-3">
                              <input
                                type="checkbox"
                                name="discount"
                                readOnly={true}
                                checked={filter.discount || false}
                              />

                              <label
                                htmlFor="discount"
                                onClick={() =>
                                  setFilter((prev) => ({
                                    ...prev,
                                    discount: prev.discount ? null : true,
                                  }))
                                }>
                                Endirimli
                              </label>
                            </div>
                          </div>

                          {/* Is New */}
                          <div className="col-4 col-lg-auto">
                            <div className="checkbox-custom mt-3 mb-3">
                              <input
                                type="checkbox"
                                name="is_new"
                                readOnly={true}
                                checked={filter.is_new || false}
                              />
                              <label
                                htmlFor="is_new"
                                onClick={() =>
                                  setFilter((prev) => ({
                                    ...prev,
                                    is_new: prev.is_new ? null : true,
                                  }))
                                }>
                                Yenilər
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Results */}
            <div id="results-page">
              {/* Filter */}
              <div id="responsive-mobile-filter">
                <div id="sorting-options" className="sorting-options-content openbox-content">
                  <form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}>
                    <div className="row">
                      {/* Filter Button */}
                      <div className="col-6 col-lg-auto">
                        <button
                          className="btn btn-primary mt-3 mb-3"
                          onClick={() => setShowFilter(!showFilter)}>
                          <i className="fas fa-filter" aria-hidden="true"></i> Filtrlə
                        </button>
                      </div>

                      {/* Only Stock */}
                      <div className="col-6 col-lg-auto">
                        <div className="checkbox-custom mt-3 mb-3">
                          <input
                            type="checkbox"
                            name="only_stock"
                            readOnly={true}
                            checked={filter.only_stock || false}
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

                      {/* Record Count */}
                      <div className="col-6 col-lg">
                        <div className="record-count text-right mt-3 mb-3">
                          Ümumi {count} məhsul
                        </div>
                      </div>

                      {/* Ordering Options */}
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

              {/* Loader */}
              {status.loading && status.lastAction === getProducts.typePrefix && <Loader />}

              {/* Products */}
              <div className="showcase-container">
                <div className="row">
                  {items?.map((item, index) => (
                    <div className="col-6 col-lg-3" key={index}>
                      <ProductCard product={item} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="paginate-wrapper">
                <div className="paginate">
                  {filter.page && filter.page > 1 && (
                    <div className="paginate-left paginate-active">
                      <a
                        role="button"
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
                        key={index}
                        role="button"
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
                        role="button"
                        onClick={() =>
                          setFilter((prev) => ({ ...prev, page: prev.page ? prev.page + 1 : 2 }))
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

export default ProductsPage;
