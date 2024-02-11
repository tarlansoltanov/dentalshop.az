import Brands from "./sections/Brands";
import NewProducts from "./sections/NewProducts";
import DiscountedProducts from "./sections/DiscountedProducts";

const Home = () => {
  return (
    <main id="main">
      <Brands />
      <NewProducts />
      <DiscountedProducts />
    </main>
  );
};

export default Home;
