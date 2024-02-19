import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Assets
import { MinusSVG, PlusSVG } from "@/assets/images";

// Actions
import { decrementCart, getCart, incrementCart, removeFromCart } from "@/store/actions";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <main id="main">
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <table className="table table-cart table-mobile">
              <thead>
                <tr>
                  <th>Məhsul</th>
                  <th className="small-hide">Qiymət</th>
                  <th className="small-hide">Say</th>
                  <th className="small-hide">Toplam</th>
                  <th className="small-hide"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item, index) => (
                  <tr key={index}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <Link to={`/products/${item.slug}`}>
                            <img src={item.images[0].image} alt={item.name} />
                          </Link>
                        </figure>
                        <h3 className="product-title">
                          <Link to={`/products/${item.slug}`}>{item.name}</Link>
                        </h3>
                      </div>
                    </td>

                    <td className="price-col">
                      <span className="current-price">
                        {item.price - (item.price * item.discount) / 100} <span>AZN</span>
                      </span>

                      {item.discount > 0 && (
                        <del className="old-price">
                          {item.price} <span>AZN</span>
                        </del>
                      )}
                    </td>

                    <td className="quantity-col">
                      <div className="quantity">
                        <button
                          className="minus-btn"
                          type="button"
                          name="button"
                          onClick={() => {
                            dispatch(
                              decrementCart({ product: item.slug, quantity: item.quantity })
                            );
                          }}>
                          <img src={MinusSVG} alt="Minus Icon" />
                        </button>

                        <input type="text" name="quantity" value={item.quantity} disabled />

                        <button
                          className="plus-btn"
                          type="button"
                          name="button"
                          onClick={() => {
                            dispatch(
                              incrementCart({ product: item.slug, quantity: item.quantity })
                            );
                          }}>
                          <img src={PlusSVG} alt="Plus Icon" />
                        </button>
                      </div>
                    </td>

                    <td className="total-col">{item.price * item.quantity} AZN</td>

                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={() => {
                          dispatch(removeFromCart(item.slug));
                        }}>
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Cart;
