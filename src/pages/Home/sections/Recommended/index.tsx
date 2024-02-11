import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// React Slick
import Slider, { Settings } from "react-slick";

// Components
import ProductCard from "@/components/ProductCard";

// Actions
import { getRecommendedProducts } from "@/store/product/actions";

const Recommended = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recommendedItems: products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getRecommendedProducts({ limit: 4 }));
  }, []);

  // React Slick settings
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "products-content",
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 3, slidesToScroll: 3, dots: true } },
      { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2, dots: true } },
      { breakpoint: 575, settings: { slidesToShow: 2, slidesToScroll: 2, dots: true } },
    ],
  };

  return (
    <section className="default-products popular-products">
      <div className="container">
        <div className="products-header">
          <span>Tövsiyyə olunan Məhsullar</span>
        </div>

        {products && (
          <Slider {...settings}>
            {products?.map((item, index) => (
              <div className="col-auto" key={index}>
                <ProductCard product={item} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Recommended;
