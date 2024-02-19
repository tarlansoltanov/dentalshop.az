import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Assets
import { MinusSVG, PlusSVG } from "@/assets/images";

// Helpers
import { getFormData } from "@/helpers";

// Actions
import {
  checkDiscount,
  checkout,
  decrementCart,
  getCart,
  incrementCart,
  removeFromCart,
} from "@/store/actions";

const Cart = () => {
  const [discountCode, setDiscountCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, discount, status } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const getPrice = (price: number, itemDiscount: number) => {
    if (itemDiscount > 0) return price - (price * itemDiscount) / 100;
    return price - (price * discount) / 100;
  };

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
                        {getPrice(item.price, item.discount)} <span>AZN</span>
                      </span>

                      {(item.discount > 0 || discount > 0) && (
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

                    <td className="total-col">
                      {getPrice(item.price, item.discount) * item.quantity} AZN
                    </td>

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

            <div className="cart-total">
              <h3>Sifariş məlumatları</h3>

              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>Cəm: </span>
                    </td>
                    <td>
                      <span>
                        {cartItems?.reduce(
                          (acc, item) => acc + getPrice(item.price, item.discount) * item.quantity,
                          0
                        )}{" "}
                        AZN
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Ödəmə: </span>
                    </td>

                    <td>
                      <select className="form-select">
                        <option value="1">Qapıda ödəmə</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="cart-bottom">
              <div className="cart-discount">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kupon kodu"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    style={{
                      borderColor:
                        status.lastAction === checkDiscount.typePrefix && status.failure
                          ? "red"
                          : status.success && discount
                          ? "green"
                          : "initial",
                    }}
                  />

                  <button
                    className="btn btn-outline-primary-2"
                    disabled={status?.loading && status?.lastAction === checkDiscount.typePrefix}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(checkDiscount(discountCode));
                    }}>
                    <i className="fas fa-check"></i>
                  </button>
                </div>
                <span>
                  {status.lastAction === checkDiscount.typePrefix && status.failure
                    ? "Kupon kodu tapılmadı"
                    : status.success && discount
                    ? `Kupon kodu uğurla təsdiqləndi. Endirim: ${discount}%`
                    : ""}
                </span>
              </div>

              <button
                className="btn btn-outline-dark-2"
                onClick={() => {
                  dispatch(checkout(getFormData({ code: discountCode })));
                  navigate("/orders");
                }}>
                Sifariş et
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Cart;
