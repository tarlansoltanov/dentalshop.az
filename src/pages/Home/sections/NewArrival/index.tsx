import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import ProductCard from "@/components/ProductCard";

// Actions
import { getNewProducts } from "@/store/product/actions";

const NewArrival = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { newItems: products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getNewProducts({ limit: 12 }));
  }, []);

  return (
    <section className="default-products new-arrivals-section">
      <div className="container">
        <Link to={"/products/new"}>
          <div className="products-header-outlet">Bütün Yeni Məhsullar!</div>
        </Link>

        <div className="products-header">
          <span>Yeni Məhsullar</span>
        </div>

        <div className="row">
          {products?.map((item, index) => (
            <div key={index} className="col-6 col-lg-4 col-xl-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
