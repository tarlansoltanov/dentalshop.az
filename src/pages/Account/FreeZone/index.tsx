import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// Components
import Loader from "@/components/Loader";

// Helpers
import { convertToSearchParams } from "@/helpers";

// Types
import { FreezoneFilter } from "@/types/filters";

// Actions
import { getAccountFreezone } from "@/store/actions";

const FreeZoneProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Items
  const {
    freezoneItems: products,
    freezoneCount: itemCount,
    status,
  } = useSelector((state: RootState) => state.account);

  // MaxPage
  const [maxPage, setMaxPage] = useState<number>(1);

  // Filters
  const [filter, setFilter] = useState<FreezoneFilter>({
    page: Number(searchParams.get("page")) || null,
    limit: Number(searchParams.get("limit")) || null,
  });

  useEffect(() => {
    dispatch(getAccountFreezone({ ...filter }));
    setSearchParams(convertToSearchParams(filter));
  }, [filter]);

  useEffect(() => {
    setMaxPage(Math.ceil(itemCount / (Number(filter.limit) || 12)));
  }, [itemCount, filter.limit]);

  if (status.loading) return <Loader />;

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
                          <Link to="/free-zone/create" className="btn btn-primary">
                            <i className="fas fa-plus" aria-hidden="true"></i> Elan yerləşdir
                          </Link>
                        </div>

                        <div className="col-6 col-lg">
                          <div className="record-count text-right mt-3 mb-3">
                            Ümumi {itemCount} məhsul
                          </div>
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
                      <div className="showcase">
                        <div className="showcase-image-container">
                          <div className="showcase-image">
                            <Link to={`/free-zone/${item.slug}`} title={item.title}>
                              <img className="lazyload" src={item.image} alt={item.title} />
                            </Link>
                          </div>
                        </div>

                        <div className="showcase-content">
                          <div className="showcase-title">
                            <Link to={`/free-zone/${item.slug}`} title={item.title}>
                              {item.title}
                            </Link>
                          </div>

                          <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ columnGap: "10px" }}>
                            <p className="showcase-price">{item.price} ₼</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                        role="button"
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
                        role="button"
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

export default FreeZoneProducts;
