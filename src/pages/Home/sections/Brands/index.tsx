import { Link } from "react-router-dom";

// Types
import { Brand } from "@/types";

interface Props {
  items: Brand[];
}

const Brands = ({ items }: Props) => {
  return (
    <section className="container">
      <div className="sliderc">
        <div className="brand-container">
          {items.map((item, index) => (
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
