import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Components
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";

// Types
import { Pagination } from "@/types/filters";

// Actions
import { getFavorites } from "@/store/actions";
import { convertToSearchParams } from "@/helpers";

const AccountFavorites = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchParams, setSearchParams] = useSearchParams();

  const {
    favorites: items,
    favoritesCount: count,
    status,
  } = useSelector((state: RootState) => state.account);

  // Pagination
  const [filter, setFilter] = useState<Pagination>({
    page: Number(searchParams.get("page")) || null,
    limit: Number(searchParams.get("limit")) || null,
  });

  useEffect(() => {
    setFilter({
      page: Number(searchParams.get("page")) || null,
      limit: Number(searchParams.get("limit")) || null,
    } as Pagination);
  }, [searchParams.toString()]);

  const maxPage = Math.ceil(count / (Number(filter.limit) || 12));

  useEffect(() => {
    dispatch(getFavorites({ ...filter }));
    setSearchParams(convertToSearchParams(filter));
  }, [filter]);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <div className="contentbox-header">
              <h4>Favorilər</h4>
            </div>

            {/* Results */}
            <div id="results-page">
              {/* Loader */}
              {status.loading && <Loader />}

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
                          setFilter((prev) => ({
                            ...prev,
                            page: prev.page && prev.page - 1,
                          }))
                        }>
                        <i
                          className="fas fa-chevron-left"
                          aria-hidden="true"></i>
                      </a>
                    </div>
                  )}

                  <div className="paginate-content">
                    {Array.from({ length: maxPage }).map((_, index) => (
                      <a
                        key={index}
                        role="button"
                        className={
                          filter.page === index + 1 ||
                          (!filter.page && index === 0)
                            ? "paginate-element-active"
                            : ""
                        }
                        onClick={() =>
                          setFilter((prev) => ({ ...prev, page: index + 1 }))
                        }>
                        {index + 1}
                      </a>
                    ))}
                  </div>

                  {((filter.page && filter.page !== maxPage) ||
                    (!filter.page && maxPage > 1)) && (
                    <div className="paginate-right paginate-active">
                      <a
                        role="button"
                        onClick={() =>
                          setFilter((prev) => ({
                            ...prev,
                            page: prev.page ? prev.page + 1 : 2,
                          }))
                        }>
                        <i
                          className="fas fa-chevron-right"
                          aria-hidden="true"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AccountFavorites;
