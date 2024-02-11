// Brands
import Brands from "./sections/Brands";

// Product
import NewArrival from "./sections/NewArrival";
import Discounted from "./sections/Discounted";
import Recommended from "./sections/Recommended";

const Home = () => {
  return (
    <main id="main">
      <Brands />
      <Recommended />
      <NewArrival />
      <Discounted />
    </main>
  );
};

export default Home;
