import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Actions
import { getMainBrands } from "@/store/actions";

const Brands = () => {
  const brands = useSelector((state: RootState) => state.brands.mainItems);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (brands === null) dispatch(getMainBrands());
  }, [dispatch]);

  return (
    <section className="container">
      <div className="sliderc">
        <div className="yorum-container">
          {brands?.map((item, index) => (
            <Link key={index} to={`/brands/${item.slug}`} className="yorum-box">
              <div className="star-container">
                <span className="star">★★★★★</span>
              </div>

              <img src={item.photo} alt={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
