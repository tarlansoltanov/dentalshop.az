import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Assets
import { FavoriteEmptySVG, FavoriteFilledSVG } from "@/assets/images";

// Types
import { Product } from "@/types";

// Actions
import { addToCart, removeFromCart, favoriteProduct, unfavoriteProduct } from "@/store/actions";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { cartItems } = useSelector((state: RootState) => state.account);

  const getDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const [inCart, setInCart] = useState<boolean>(false);

  useEffect(() => {
    if (cartItems) {
      const item = cartItems.find((item) => item.product.slug === product.slug);
      if (item) setInCart(true);
    }
  }, [cartItems]);

  return (
    <div className="showcase">
      {product.quantity === 0 && (
        <Link to={`/products/${product.slug}`} title={product.name} className="soldOutBadge">
          <i className="fab fa-servicestack" aria-hidden="true">
            Stokta Yoxdur
          </i>
        </Link>
      )}

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
      {product.quantity !== 0 && isAuth && (
        <div className="product-favorite text-center">
          {inCart ? (
            <a
              role="button"
              onClick={() => {
                dispatch(removeFromCart(product.slug));
                setInCart(false);
              }}>
              <i
                className="fas fa-cart-arrow-down"
                style={{ color: "#2b9b2f", fontSize: "20px", marginRight: "10px" }}></i>
              <span style={{ fontSize: "15px" }}>Səbətdən Sil</span>
            </a>
          ) : (
            <a
              role="button"
              className="add-cart"
              onClick={() => {
                dispatch(addToCart({ product: product.slug }));
                setInCart(true);
              }}>
              <i
                className="fas fa-cart-plus"
                style={{ color: "#2b9b2f", fontSize: "20px", marginRight: "10px" }}></i>
              <span style={{ fontSize: "15px" }}>Səbətə əlavə et</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
