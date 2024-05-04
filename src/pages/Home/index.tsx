import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import ProductsSection from "@/components/ProductsSection";

// Actions
import {
  getBanners,
  getProducts,
  getMainBrands,
  getNewProducts,
  getDiscountedProducts,
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
    items,
    newItems,
    discountedItems,
    status: statusProducts,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (banners === null) dispatch(getBanners({ limit: "all" }));
    if (brands === null) dispatch(getMainBrands({ limit: 6 }));
    if (newItems === null) dispatch(getNewProducts({ limit: 8 }));
    if (discountedItems === null) dispatch(getDiscountedProducts({ limit: 8 }));
    dispatch(getProducts({ limit: 8 }));
  }, []);

  if (
    statusBanners.loading ||
    statusBrands.loading ||
    (statusProducts.loading && statusProducts.lastAction === getProducts.typePrefix) ||
    (statusProducts.loading && statusProducts.lastAction === getNewProducts.typePrefix) ||
    (statusProducts.loading && statusProducts.lastAction === getDiscountedProducts.typePrefix) ||
    statusCategories.loading
  ) {
    return <Loader />;
  }

  return (
    <main id="main">
      {banners && banners.length > 0 && <HomeSlider items={banners} />}

      <Brands items={brands || []} />

      {items && items.length > 0 && (
        <ProductsSection
          title="Məhsullar"
          showAll={{ title: "Bütün Məhsullar", link: "/products" }}
          className="featured-section">
          <div className="row">
            {items.map((item, index) => (
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
    </main>
  );
};

export default Home;
