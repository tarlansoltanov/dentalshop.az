import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import ProductsSection from "@/components/ProductsSection";

// Actions
import {
  getBrands,
  getDiscountedProducts,
  getNewProducts,
  getRecommendedProducts,
} from "@/store/actions";

// Related components
import Brands from "./sections/Brands";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Categories
  const { status: statusCategories } = useSelector((state: RootState) => state.categories);

  // Brands
  const { items: brands, status: statusBrands } = useSelector((state: RootState) => state.brands);

  // Products
  const {
    recommendedItems,
    discountedItems,
    newItems,
    status: statusProducts,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getBrands({ is_main: true, limit: 6 }));
    dispatch(getRecommendedProducts({}));
    dispatch(getDiscountedProducts({ limit: 12 }));
    dispatch(getNewProducts({ limit: 12 }));
  }, []);

  if (statusProducts.loading || statusBrands.loading || statusCategories.loading) {
    return <Loader />;
  }

  return (
    <main id="main">
      <Brands items={brands || []} />

      <ProductsSection title="Tövsiyyə olunan Məhsullar" className="recommended-section">
        <ProductSlider items={recommendedItems || []} />
      </ProductsSection>

      <ProductsSection
        title="Yeni Məhsullar"
        showAll={{ title: "Bütün Yeni Məhsullar", link: "/new-arrivals" }}
        className="new-arrivals-section">
        <div className="row">
          {newItems?.map((item, index) => (
            <div key={index} className="col-6 col-lg-4 col-xl-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </ProductsSection>

      <ProductsSection
        title="Endirimli Məhsullar"
        showAll={{ title: "Bütün Endirimli Məhsullar", link: "/discounted" }}
        className="featured-section">
        <div className="row">
          {discountedItems?.map((item, index) => (
            <div key={index} className="col-6 col-lg-4 col-xl-3">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </ProductsSection>
    </main>
  );
};

export default Home;
