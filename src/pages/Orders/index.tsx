import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Actions
import { getOrders } from "@/store/actions";

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const getPrice = (price: number, itemDiscount: number, discount: number) => {
    if (itemDiscount > 0) return price - (price * itemDiscount) / 100;
    return price - (price * discount) / 100;
  };

  return (
    <main id="main">
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
                {orders?.map((item, index) => (
                  <tr key={index}>
                    <td className="code-col">
                      <Link to={`/account/orders/${item.id}`}>Sifariş nömrə: #{item.id}</Link>
                    </td>

                    <td className="price-col small-hide">
                      <span className="current-price">
                        {item.products?.reduce(
                          (acc, product) =>
                            acc +
                            getPrice(product.price, product.discount, item.discount) *
                              product.quantity,
                          0
                        )}{" "}
                        AZN
                      </span>
                    </td>

                    <td className="type-col small-hide">{item.payment_type}</td>

                    <td className="status-col">
                      <span
                        className={`badge ${item.status === "Hazırlanır" ? "info" : "success"}`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="date-col">{item.date}</td>

                    <td className="action-col small-hide">
                      <Link to={`/account/orders/${item.id}`} className="btn btn-primary">
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
    </main>
  );
};

export default Orders;
