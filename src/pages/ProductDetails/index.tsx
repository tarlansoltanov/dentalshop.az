import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

// React Slick
import Slider, { Settings } from "react-slick";

// Components
import NotFound from "@/pages/NotFound";
import Loader from "@/components/Loader";
import ProductSlider from "@/components/ProductSlider";
import ProductsSection from "@/components/ProductsSection";

// Assets
import { DistributorPNG, FavoriteEmptySVG, FavoriteFilledSVG } from "@/assets/images";

// Actions
import {
  addToCart,
  getProduct,
  getProducts,
  favoriteProduct,
  unfavoriteProduct,
  removeFromCart,
  getNotes,
} from "@/store/actions";
import Timer from "@/components/Timer";

const ProductDetails = () => {
  const location = useLocation();

  const slug = location.pathname.split("/")[2];

  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Product Data
  const {
    item: product,
    items: recommendedItems,
    notes,
    status,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (notes == null) dispatch(getNotes());
  }, [notes]);

  useEffect(() => {
    dispatch(getProduct(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(getProducts({ category: product?.category.slug }));
  }, [dispatch, product]);

  // Slider Settings
  const sliderSettings: Settings = {
    vertical: !0,
    verticalSwiping: !0,
    autoplay: !1,
    arrows: !1,
    infinite: !1,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: { slidesToShow: 4, slidesToScroll: 4, vertical: !1, verticalSwiping: !1 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 5, slidesToScroll: 5, vertical: !1, verticalSwiping: !1 },
      },
      {
        breakpoint: 1199,
        settings: { slidesToShow: 6, slidesToScroll: 6, vertical: !1, verticalSwiping: !1 },
      },
    ],
  };

  // Selected Image
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // Add to Cart
  const [inCart, setInCart] = useState<boolean>(false);

  if (product === null) {
    if (status.loading) {
      return <Loader />;
    }
    return <NotFound />;
  }

  return (
    <main id="main">
      <section>
        <div id="product-detail-container">
          <div className="container">
            {/* Breadcumbs */}
            <div id="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">
                    <span>
                      <span>Ana Səhifə</span>
                    </span>
                  </Link>
                </li>

                {product.category.parent?.parent && (
                  <li>
                    <Link to={`/products?category=${product.category.parent.parent.slug}`}>
                      <span>
                        <i></i>
                        <span>{product.category.parent.parent.name}</span>
                      </span>
                    </Link>
                  </li>
                )}

                {product.category.parent && (
                  <li>
                    <Link to={`/products?category=${product.category.parent.slug}`}>
                      <span>
                        <i></i>
                        <span>{product.category.parent.name}</span>
                      </span>
                    </Link>
                  </li>
                )}

                {product.category && (
                  <li>
                    <Link to={`/products?category=${product.category.slug}`}>
                      <span>
                        <i></i>
                        <span>{product.category.name}</span>
                      </span>
                    </Link>
                  </li>
                )}

                <li>
                  <span>
                    <i></i>
                    <span>{product.name}</span>
                  </span>
                </li>
              </ol>
            </div>

            <div className="product-area-top">
              <div className="row">
                <div className="col-xl-6">
                  <div className="product-left position-relative">
                    {product.is_new && (
                      <div className="product-label-group">
                        <div className="new-label">Yeni Məhsul</div>
                      </div>
                    )}

                    <div className="product-image">
                      <div id="product-primary-image">
                        <img id="primary-image" src={product.images[selectedImage].image} />
                      </div>

                      {product.is_distributer && <img src={DistributorPNG} className="tick-icon" />}
                    </div>

                    <Slider {...sliderSettings} className="product-thumb-image">
                      {product?.images.map((image, index) => (
                        <div className="thumb-item" key={index}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedImage(index);
                            }}
                            className={selectedImage === index ? "zoomGalleryActive" : ""}>
                            <img src={image.image} alt={product.name} />
                          </a>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="product-right">
                    {/* Name */}
                    <div className="product-list-group">
                      <div className="product-title">
                        <h1>{product.name}</h1>
                      </div>
                    </div>

                    <div className="product-list-group">
                      <div className="product-list-container">
                        {/* Main Note */}
                        {product.main_note && (
                          <div className="product-extra-row">
                            <span className="product-extra-title">
                              <i className="fas fa-bullhorn" aria-hidden="true"></i>
                            </span>

                            <div className="product-extra-content">{product.main_note}</div>
                            <hr />
                          </div>
                        )}

                        {/* Brand */}
                        <div className="product-list-row product-brands">
                          <div className="product-list-title">Marka</div>

                          <div className="product-list-content">
                            <Link
                              to={`/products?brand=${product.brand.slug}`}
                              title={product.brand.name}>
                              {product.brand.name}
                            </Link>
                          </div>
                        </div>

                        {/* Code */}
                        <div className="product-list-row">
                          <div className="product-list-title">Stok Kodu</div>
                          <div className="product-list-content">{product.code}</div>
                        </div>

                        {/* Code */}
                        <div className="product-list-row">
                          <div className="product-list-title">Stok sayı</div>
                          <div className="product-list-content">{product.quantity}</div>
                        </div>

                        {/* Price */}
                        <div className="product-list-row">
                          <div className="product-list-title">Qiymət</div>
                          <div className="product-list-content">
                            <span className="current-price">
                              {(
                                Number(product.price) -
                                (Number(product.price) * product.discount) / 100
                              ).toFixed(2)}
                              <span> AZN</span>
                            </span>

                            {product.discount > 0 && (
                              <del className="old-price">
                                {product.price}
                                <span> AZN</span>
                              </del>
                            )}
                          </div>
                        </div>

                        {product.discount > 0 && product.discount_end_date && (
                          <div className="product-list-row">
                            <div className="product-list-title">Endirim keçərlidir</div>
                            <div className="product-list-content">
                              <Timer end_date={product.discount_end_date} className="timer" />
                            </div>
                          </div>
                        )}

                        <div className="detay-info">
                          <ul>
                            {notes?.map((note, index) => (
                              <li key={index}>{note.text}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isAuth && (
              <div className="user-bottom">
                <div id="product-user-buttons">
                  <div className="product-favorite">
                    {product.is_favorite ? (
                      <a
                        role="button"
                        onClick={() => {
                          dispatch(unfavoriteProduct(product.slug));
                        }}>
                        <img src={FavoriteFilledSVG} alt="Favorilərdən Sil" />
                        <span>Favorilərdən Sil</span>
                      </a>
                    ) : (
                      <a
                        role="button"
                        onClick={() => {
                          dispatch(favoriteProduct(product.slug));
                        }}>
                        <img src={FavoriteEmptySVG} alt="Favorilərə Əlavə Et" />
                        <span>Favorilərə əlavə et</span>
                      </a>
                    )}
                  </div>

                  {product.quantity !== 0 && (
                    <div className="product-favorite">
                      {inCart ? (
                        <a
                          role="button"
                          onClick={() => {
                            dispatch(removeFromCart(product.slug));
                            setInCart(false);
                          }}>
                          <i
                            className="fas fa-cart-arrow-down"
                            style={{ color: "#2b9b2f", fontSize: "20px" }}></i>
                          <span>Səbətdən Sil</span>
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
                            style={{ color: "#2b9b2f", fontSize: "20px" }}></i>
                          <span>Səbətə əlavə et</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* New Arrivals */}
                <div className="entry-outlet-bottom1">
                  <span>
                    <Link to="/products?is_new=true">
                      <div className="entry-outlet-bottom">Yeni Məhsullar</div>
                    </Link>
                  </span>
                </div>
              </div>
            )}

            <div className="product-area-bottom">
              <div className="product-detail-tab">
                <div className="product-detail-tab-content">
                  <div className="product-detail-tab-row active">
                    <div className="active" data-tab-content="1">
                      <div className="product-title">
                        <h1>{product.name}</h1>
                      </div>
                      <div className="product-detail">
                        <div className="product-detail-content">
                          <p>{product.description}</p>
                        </div>

                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {recommendedItems && recommendedItems.length > 0 && (
            <ProductsSection title="Oxşar məhsullar" className="recommended-section">
              <ProductSlider items={recommendedItems || []} />
            </ProductsSection>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
