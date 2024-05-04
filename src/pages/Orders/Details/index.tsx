import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import NotFound from "@/pages/NotFound";
import Loader from "@/components/Loader";

// Constants
import { ORDER_PAYMENT_METHOD_LABEL, ORDER_STATUS_LABEL } from "@/constants";

// Actions
import { getOrder } from "@/store/actions";

const OrderDetails = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/").pop());

  const dispatch = useDispatch<AppDispatch>();
  const { order, status } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  const getPrice = (price: number, itemDiscount: number, discount: number) => {
    if (itemDiscount > 0) return price - (price * itemDiscount) / 100;
    return price - (price * discount) / 100;
  };

  if (status.loading && status.lastAction === getOrder.typePrefix) return <Loader />;

  if (!order) return <NotFound />;

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
                </tr>
              </thead>

              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index}>
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
                        {getPrice(item.price, item.discount, order.discount)} <span>AZN</span>
                      </span>

                      {(item.discount > 0 || order.discount > 0) && (
                        <del className="old-price">
                          {item.price} <span>AZN</span>
                        </del>
                      )}
                    </td>

                    <td className="quantity-col">
                      <div className="quantity">
                        <input type="text" name="quantity" value={item.quantity} disabled />
                      </div>
                    </td>

                    <td className="total-col">
                      {getPrice(item.price, item.discount, order.discount) * item.quantity} AZN
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
                        {order?.items.reduce(
                          (acc, item) =>
                            acc +
                            getPrice(item.price, item.discount, order.discount) * item.quantity,
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
                          ORDER_PAYMENT_METHOD_LABEL[order.payment_method].color
                        }`}>
                        {ORDER_PAYMENT_METHOD_LABEL[order.payment_method].label}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>Status: </span>
                    </td>

                    <td>
                      <span className={`badge ${ORDER_STATUS_LABEL[order.status].color}`}>
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
          </section>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
