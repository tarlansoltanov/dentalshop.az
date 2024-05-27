import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Components
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";

// Constants
import { ORDER_PAYMENT_METHOD_LABEL, ORDER_STATUS_LABEL } from "@/constants";

// Types
import { OrderItem } from "@/types/models";

// Actions
import { getOrders } from "@/store/actions";

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, status } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const getPrice = (item: OrderItem) => {
    const price = Number(item.price);
    if (item.discount > 0) return price * (1 - item.discount / 100);
    return price;
  };

  if (status.loading && status.lastAction === getOrders.typePrefix)
    return <Loader />;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <section className="col-lg-54">
            <div className="contentbox-header">
              <h4>Sifarişlərim</h4>
            </div>

            <table className="table table-orders table-mobile">
              <thead>
                <tr>
                  <th>Sifariş kodu</th>
                  <th className="small-hide">Məbləğ</th>
                  <th className="small-hide">Ödəmə</th>
                  <th>Status</th>
                  <th>Tarix</th>
                  <th className="small-hide">Ətraflı</th>
                </tr>
              </thead>

              <tbody>
                {orders?.map((order, index) => (
                  <tr key={index}>
                    <td className="code-col">
                      <Link to={`/account/orders/${order.id}`}>
                        Sifariş nömrə: #{order.id}
                      </Link>
                    </td>

                    <td className="price-col small-hide">
                      <span className="current-price">
                        {order.items?.reduce(
                          (acc, item) => acc + getPrice(item) * item.quantity,
                          0
                        )}{" "}
                        AZN
                      </span>
                    </td>

                    <td className="type-col small-hide">
                      <span
                        className={`badge ${
                          ORDER_PAYMENT_METHOD_LABEL[order.payment_method].color
                        }`}>
                        {ORDER_PAYMENT_METHOD_LABEL[order.payment_method].label}
                      </span>
                    </td>

                    <td className="status-col">
                      <span
                        className={`badge ${
                          ORDER_STATUS_LABEL[order.status].color
                        }`}>
                        {ORDER_STATUS_LABEL[order.status].label}
                      </span>
                    </td>

                    <td className="date-col">{order.date}</td>

                    <td className="action-col small-hide">
                      <Link
                        to={`/account/orders/${order.id}`}
                        className="btn btn-primary">
                        Ətraflı
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
