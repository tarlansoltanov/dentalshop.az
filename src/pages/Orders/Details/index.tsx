import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import NotFound from "@/pages/NotFound";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

// Constants
import {
  ORDER_STATUS,
  ORDER_STATUS_LABEL,
  ORDER_PAYMENT_METHOD_LABEL,
} from "@/constants";

// Helpers
import { getFormData } from "@/helpers";

// Types
import { OrderItem } from "@/types/models";

// Actions
import { getOrder, payOrder } from "@/store/actions";

const OrderDetails = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/").pop());

  const dispatch = useDispatch<AppDispatch>();
  const { order, status } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  const getPrice = (item: OrderItem) => {
    const price = Number(item.price);
    if (item.discount > 0) return price * (1 - item.discount / 100);
    return price;
  };

  const [installments, setInstallments] = useState(0);

  const handlePayment = () => () => {
    dispatch(
      payOrder({ id, data: getFormData({ installments: installments }) })
    ).then(({ payload }) => {
      if (payload) window.location.href = payload;
    });
  };

  if (status.loading && status.lastAction === getOrder.typePrefix)
    return <Loader />;

  if (!order) return <NotFound />;

  return (
    <Layout>
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
                </tr>
              </thead>

              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index}>
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
                        {getPrice(item)} <span>AZN</span>
                      </span>

                      {item.discount > 0 && (
                        <del className="old-price">
                          {item.price} <span>AZN</span>
                        </del>
                      )}
                    </td>

                    <td className="quantity-col">
                      <div className="quantity">
                        <input
                          type="text"
                          name="quantity"
                          value={item.quantity}
                          disabled
                        />
                      </div>
                    </td>

                    <td className="total-col">
                      {getPrice(item) * item.quantity} AZN
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
                          {order?.items.reduce(
                            (acc, item) => acc + getPrice(item) * item.quantity,
                            0
                          )}{" "}
                          AZN
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span>Ödəmə metodu: </span>
                      </td>

                      <td>
                        <span
                          className={`badge ${
                            ORDER_PAYMENT_METHOD_LABEL[order.payment_method]
                              .color
                          }`}>
                          {
                            ORDER_PAYMENT_METHOD_LABEL[order.payment_method]
                              .label
                          }
                        </span>
                      </td>
                    </tr>

                    {order.status === ORDER_STATUS.NOT_PAID && (
                      <tr>
                        <td>
                          <span>Taksit: </span>
                        </td>
                        <td>
                          <select
                            name="installments"
                            className="form-select"
                            value={installments}
                            onChange={(e) =>
                              setInstallments(Number(e.target.value))
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
                        <span>Status: </span>
                      </td>

                      <td>
                        <span
                          className={`badge ${
                            ORDER_STATUS_LABEL[order.status].color
                          }`}>
                          {ORDER_STATUS_LABEL[order.status].label}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span>Ünvan: </span>
                      </td>
                      <td>
                        <span>{order.address}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span>Qeyd: </span>
                      </td>
                      <td>
                        <span>{order.note}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span>Sifariş tarixi: </span>
                      </td>
                      <td>
                        <span>{order.date}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {order.status === ORDER_STATUS.NOT_PAID && (
                <div className="cart-bottom">
                  <button
                    className="btn btn-outline-dark-2"
                    disabled={status.loading}
                    onClick={handlePayment()}>
                    Ödəniş et
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
