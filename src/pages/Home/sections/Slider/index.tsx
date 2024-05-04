// React Slick Slider
import Slider, { Settings } from "react-slick";

// Types
import { Banner } from "@/types";

interface Props {
  items: Banner[];
}

const HomeSlider = ({ items }: Props) => {
  // React Slick settings
  const settings: Settings = {
    fade: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    arrows: true,
    infinite: true,
    className: "theme-slider",
    prevArrow: (
      <button type="button" className="slick-prev" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.75 16.247L10 12.497L13.75 8.74701"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.25 7.75299L14 11.503L10.25 15.253"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    ),
    dots: true,
    adaptiveHeight: true,
  };

  return (
    <section className="container">
      <div id="entry-slider">
        <div className="sliderb">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="theme-slider-item slick-slide slick-cloned">
                <div className="theme-slider-image">
                  <img src={item.photo} alt="Slider Photo" />
                </div>
                <div className="container"></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
