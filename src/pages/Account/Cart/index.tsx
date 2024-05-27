import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Layout from "@/components/Layout";

// Assets
import { MinusSVG, PlusSVG } from "@/assets/images";

// Constants
import { ORDER_PAYMENT_METHOD, ORDER_PAYMENT_METHOD_LABEL } from "@/constants";

// Types
import { Product } from "@/types/models";

// Helpers
import { getFormData } from "@/helpers";

// Actions
import {
  getCart,
  checkout,
  validatePromo,
  incrementCart,
  decrementCart,
  removeFromCart,
} from "@/store/actions";

const AccountCart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  // Auth
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // Account
  const { cartItems, discount, status, errors } = useSelector(
    (state: RootState) => state.account
  );

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const getPrice = (item: Product) => {
    const price = Number(item.price);
    if (item.discount > 0 || !item.is_promo)
      return price * (1 - item.discount / 100);
    return price * (1 - discount / 100);
  };

  const [promoCode, setDiscountCode] = useState("");

  const [data, setData] = useState({
    payment_method: ORDER_PAYMENT_METHOD.CASH,
    installments: 0,
    address: "",
    note: "",
  });

  const handleCheckout = () => () => {
    dispatch(checkout(getFormData({ ...data, code: promoCode }))).then(
      ({ payload, meta }) => {
        if (data.payment_method === ORDER_PAYMENT_METHOD.CARD) {
          window.location.href = payload;
        } else if (meta.requestStatus === "fulfilled") {
          navigate(`/account/orders/${payload}`);
        }
      }
    );
  };

  if (!isAuth) navigate("/");

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            {errors && (
              <div className="alert alert-danger" role="alert">
                {errors.non_field_errors}
              </div>
            )}
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
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <Link to={`/products/${item.product.slug}`}>
                            <img
                              src={item.product.images[0].image}
                              alt={item.product.name}
                            />
                          </Link>
                        </figure>
                        <h3 className="product-title">
                          <Link to={`/products/${item.product.slug}`}>
                            {item.product.name}
                          </Link>
                        </h3>
                      </div>
                    </td>

                    <td className="price-col">
                      <span className="current-price">
                        {getPrice(item.product).toFixed(2)} <span>AZN</span>
                      </span>
                      {(item.product.discount > 0 ||
                        (item.product.is_promo && discount > 0)) && (
                        <del className="old-price">
                          {Number(item.product.price).toFixed(2)}{" "}
                          <span>AZN</span>
                        </del>
                      )}
                    </td>

                    <td className="quantity-col">
                      <div className="quantity">
                        <button
                          className="minus-btn"
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

                        <input
                          type="text"
                          name="quantity"
                          value={item.quantity}
                          disabled
                        />

                        <button
                          className="plus-btn"
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
                      {(getPrice(item.product) * item.quantity).toFixed(2)} AZN
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
                                acc + getPrice(item.product) * item.quantity,
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
                        <select
                          className="form-select"
                          value={data.payment_method}
                          onChange={(e) =>
                            setData({
                              ...data,
                              payment_method: Number(e.target.value),
                            })
                          }>
                          {Object.values(ORDER_PAYMENT_METHOD).map(
                            (method, index) => (
                              <option key={index} value={method}>
                                {ORDER_PAYMENT_METHOD_LABEL[method].label}
                              </option>
                            )
                          )}
                        </select>
                      </td>
                    </tr>

                    {data.payment_method === ORDER_PAYMENT_METHOD.CARD && (
                      <tr>
                        <td>
                          <span>Taksit: </span>
                        </td>

                        <td>
                          <select
                            name="installments"
                            className="form-select"
                            value={data.installments}
                            onChange={(e) =>
                              setData({
                                ...data,
                                installments: Number(e.target.value),
                              })
                            }>
                            <option value="0">Taksitsiz</option>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                              <option key={item} value={item}>
                                {item} ay
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    )}

                    <tr>
                      <td>
                        <span>Ünvan: </span>
                      </td>

                      <td>
                        <textarea
                          name="address"
                          className="form-control"
                          placeholder="Ünvan"
                          value={data.address}
                          onChange={(e) =>
                            setData({ ...data, address: e.target.value })
                          }
                          style={{ height: "100px" }}></textarea>
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
                          value={data.note}
                          onChange={(e) =>
                            setData({ ...data, note: e.target.value })
                          }
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
                      value={promoCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      style={{
                        borderColor:
                          status.lastAction === validatePromo.typePrefix &&
                          status.failure
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
                        !promoCode ||
                        (status?.loading &&
                          status?.lastAction === validatePromo.typePrefix)
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(validatePromo(promoCode));
                      }}>
                      <i className="fas fa-check"></i>
                    </button>
                  </div>
                  <span>
                    {status.lastAction === validatePromo.typePrefix &&
                    status.failure
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
                  disabled={cartItems?.length === 0 || status.loading}
                  onClick={handleCheckout()}>
                  Sifariş et
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AccountCart;
