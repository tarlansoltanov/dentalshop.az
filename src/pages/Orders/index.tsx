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
            <table className="table table-cart table-mobile">
              <thead>
                <tr>
                  <th>Sifariş kodu</th>
                  <th className="small-hide">Məbləğ</th>
                  <th className="small-hide">Ödəmə</th>
                  <th className="small-hide">Status</th>
                  <th className="small-hide">Tarix</th>
                  <th className="small-hide"></th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((item, index) => (
                  <tr key={index}>
                    <td className="product-col">
                      <div className="product">
                        <h3 className="product-title">
                          <Link to={`/orders/${item.id}`}>
                            #{item.id.toString().padStart(6, "0")}
                          </Link>
                        </h3>
                      </div>
                    </td>

                    <td className="price-col">
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

                    <td className="total-col">{item.payment_type}</td>

                    <td className="total-col">{item.status}</td>

                    <td className="total-col">{item.date}</td>
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
