import { useEffect } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

// Actions
import { getCart } from "@/store/actions";
import { MinusSVG, PlusSVG } from "@/assets/images";

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
                        <button className="minus-btn" type="button" name="button">
                          <img src={MinusSVG} alt="" />
                        </button>

                        <input type="text" name="quantity" value="1" disabled />

                        <button className="plus-btn" type="button" name="button">
                          <img src={PlusSVG} alt="" />
                        </button>
                      </div>
                    </td>

                    <td className="total-col">{item.price * item.quantity} AZN</td>

                    <td className="remove-col">
                      <button className="btn-remove">
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
