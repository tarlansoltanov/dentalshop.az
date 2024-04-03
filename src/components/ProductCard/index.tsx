import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

// Assets
import { FavoriteEmptySVG, FavoriteFilledSVG } from "@/assets/images";

// Types
import { Product } from "@/types";

// Actions
import { favoriteProduct, unfavoriteProduct } from "@/store/actions";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const getDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="showcase">
      <div className="showcase-image-container">
        <div className="showcase-label-container">
          {product.is_new && (
            <div className="showcase-label-group">
              <div className="new-label">Yeni məhsul</div>
            </div>
          )}

          <div className="favorite-label">
            {product.is_favorite !== undefined &&
              (product.is_favorite ? (
                <a
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(unfavoriteProduct(product.slug));
                  }}>
                  <img src={FavoriteFilledSVG} alt="Favorilərdən Sil" />
                </a>
              ) : (
                <a
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(favoriteProduct(product.slug));
                  }}>
                  <img src={FavoriteEmptySVG} alt="Favorilərə Əlavə Et" />
                </a>
              ))}
          </div>
        </div>

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
            <div className="showcase-brand">{product.name}</div>
            {product.brand.name}
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
