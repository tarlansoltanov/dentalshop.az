// React Slick Slider
import Slider, { Settings } from "react-slick";

// Components
import ProductCard from "@/components/ProductCard";

// Types
import { Product } from "@/types/models";

interface Props {
  items: Product[];
}

const ProductSlider = ({ items }: Props) => {
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
    <Slider {...settings}>
      {items.map((item, index) => (
        <div className="col-auto" key={index}>
          <ProductCard product={item} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
