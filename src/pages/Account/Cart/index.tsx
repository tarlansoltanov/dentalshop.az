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
  getCart,
  incrementCart,
  decrementCart,
  removeFromCart,
} from "@/store/actions";

const AccountCart = () => {
  const [discountCode, setDiscountCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, discount, status } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const getPrice = (price: number | string, itemDiscount: number) => {
    price = Number(price);
    if (itemDiscount > 0) return price - (price * itemDiscount) / 100;
    return price - (price * discount) / 100;
  };

  useEffect(() => {
    if (status.success && status.lastAction === checkout.typePrefix) navigate("/account/orders");
  }, [status]);

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
                  <th style={{ width: "22%" }} className="small-hide">
                    Say
                  </th>
                  <th style={{ width: "15%" }} className="small-hide">
                    Toplam
                  </th>
                  <th className="small-hide"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <Link to={`/products/${item.product.slug}`}>
                            <img src={item.product.images[0].image} alt={item.product.name} />
                          </Link>
                        </figure>
                        <h3 className="product-title">
                          <Link to={`/products/${item.product.slug}`}>{item.product.name}</Link>
                        </h3>
                      </div>
                    </td>

                    <td className="price-col">
                      <span className="current-price">
                        {getPrice(item.product.price, item.product.discount).toFixed(2)}{" "}
                        <span>AZN</span>
                      </span>
                      {(item.product.discount > 0 || discount > 0) && (
                        <del className="old-price">
                          {Number(item.product.price).toFixed(2)} <span>AZN</span>
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
                              decrementCart({
                                product: item.product.slug,
                                quantity: item.quantity,
                              })
                            );
                          }}
                          disabled={item.quantity <= 1}>
                          <img src={MinusSVG} alt="Minus Icon" />
                        </button>
                        <input type="text" name="quantity" value={item.quantity} disabled />
                        <button
                          className="plus-btn"
                          type="button"
                          name="button"
                          onClick={() => {
                            dispatch(
                              incrementCart({
                                product: item.product.slug,
                                quantity: item.quantity,
                              })
                            );
                          }}
                          disabled={item.quantity >= item.product.quantity}>
                          <img src={PlusSVG} alt="Plus Icon" />
                        </button>
                      </div>
                    </td>

                    <td className="total-col">
                      {(
                        getPrice(item.product.price, item.product.discount) * item.quantity
                      ).toFixed(2)}{" "}
                      AZN
                    </td>

                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={() => {
                          dispatch(removeFromCart(item.product.slug));
                        }}>
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-total-main">
              <h3 className="cart-total-h3">Sifariş məlumatları</h3>
              <div className="cart-total">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>Cəm: </span>
                      </td>
                      <td>
                        <span>
                          {cartItems
                            ?.reduce(
                              (acc, item) =>
                                acc +
                                getPrice(item.product.price, item.product.discount) * item.quantity,
                              0
                            )
                            .toFixed(2)}{" "}
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

                    <tr>
                      <td>
                        <span>Qeyd: </span>
                      </td>

                      <td>
                        <textarea
                          name="note"
                          className="form-control"
                          placeholder="Qeyd"
                          style={{ height: "100px" }}></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                      disabled={
                        cartItems?.length === 0 ||
                        !discountCode ||
                        (status?.loading && status?.lastAction === checkDiscount.typePrefix)
                      }
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
              </div>
              <div className="cart-bottom">
                <button
                  className="btn btn-outline-dark-2"
                  disabled={cartItems?.length === 0}
                  onClick={() => {
                    dispatch(checkout(getFormData({ code: discountCode })));
                  }}>
                  Sifariş et
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AccountCart;
