import { Link } from "react-router-dom";

// Types
import { Product } from "@/types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const getDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="showcase">
      <div className="showcase-image-container">
        {product.is_new && (
          <Link className="showcase-label-container" to={`/products/${product.slug}`}>
            <div className="showcase-label-group">
              <div className="new-label">Yeni məhsul</div>
            </div>
          </Link>
        )}

        <div className="showcase-image">
          <Link to={`/products/${product.slug}`} title={product.name}>
            <img className="lazyload" src={product.images[0]?.image} alt={product.name} />
          </Link>
        </div>

        <div className="showcaseProductSku">{product.code}</div>
      </div>

      <div className="showcase-content">
        <div className="showcase-title">
          <Link to={`/products/${product.slug}`} title={product.name}>
            <div className="showcase-brand">{product.brand.name}</div>
            {product.name}
          </Link>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ columnGap: "10px" }}>
          <p className="showcase-price">
            {getDiscountedPrice(Number(product.price), product.discount)} ₼
          </p>

          {product.discount > 0 && <p className="showcase-price old-price">{product.price} ₼</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
