// Brands
import Brands from "./sections/Brands";

// Product
import NewArrival from "./sections/NewArrival";
import Discounted from "./sections/Discounted";

const Home = () => {
  return (
    <main id="main">
      <Brands />
      <NewArrival />
      <Discounted />
    </main>
  );
};

export default Home;
