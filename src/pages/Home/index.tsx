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
  getBanners,
  getDiscountedProducts,
  getMainBrands,
  getNewProducts,
  getProducts,
  getRecommendedProducts,
} from "@/store/actions";

// Related components
import Brands from "./sections/Brands";
import HomeSlider from "./sections/Slider";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Categories
  const { status: statusCategories } = useSelector((state: RootState) => state.categories);

  // Brands
  const { mainItems: brands, status: statusBrands } = useSelector(
    (state: RootState) => state.brands
  );

  // Banners
  const { items: banners, status: statusBanners } = useSelector(
    (state: RootState) => state.banners
  );

  // Products
  const {
    recommendedItems,
    discountedItems,
    newItems,
    status: statusProducts,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getMainBrands({ limit: 6 }));
    dispatch(getBanners({ limit: "all" }));
    dispatch(getRecommendedProducts({}));
    dispatch(getDiscountedProducts({ limit: 12 }));
    dispatch(getNewProducts({ limit: 12 }));
  }, []);

  if (
    (statusProducts.loading && statusProducts.lastAction === getProducts.typePrefix) ||
    statusBrands.loading ||
    statusBanners.loading ||
    statusCategories.loading
  ) {
    return <Loader />;
  }

  return (
    <main id="main">
      {banners && banners.length > 0 && <HomeSlider items={banners} />}

      <Brands items={brands || []} />

      {recommendedItems && recommendedItems.length > 0 && (
        <ProductsSection title="Tövsiyyə olunan Məhsullar" className="recommended-section">
          <ProductSlider items={recommendedItems} />
        </ProductsSection>
      )}

      {newItems && newItems.length > 0 && (
        <ProductsSection
          title="Yeni Məhsullar"
          showAll={{ title: "Bütün Yeni Məhsullar", link: "/products?is_new=true" }}
          className="new-arrivals-section">
          <div className="row">
            {newItems.map((item, index) => (
              <div key={index} className="col-6 col-lg-4 col-xl-3">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </ProductsSection>
      )}

      {discountedItems && discountedItems.length > 0 && (
        <ProductsSection
          title="Endirimli Məhsullar"
          showAll={{ title: "Bütün Endirimli Məhsullar", link: "/products?discount=true" }}
          className="featured-section">
          <div className="row">
            {discountedItems.map((item, index) => (
              <div key={index} className="col-6 col-lg-4 col-xl-3">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </ProductsSection>
      )}
    </main>
  );
};

export default Home;
