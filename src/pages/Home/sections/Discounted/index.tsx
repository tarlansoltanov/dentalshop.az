import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import ProductCard from "@/components/ProductCard";

// Actions
import { getDiscountedProducts } from "@/store/product/actions";

const Discounted = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { discountedItems: products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getDiscountedProducts({ limit: 12 }));
  }, []);

  return (
    <section className="default-products featured-section">
      <div className="container">
        <Link to={"/products/discounted"}>
          <div className="products-header-outlet">Bütün Endirimli Məhsullar!</div>
        </Link>

        <div className="products-header">
          <span>Endirimli Məhsullar</span>
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

export default Discounted;
