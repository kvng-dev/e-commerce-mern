import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetter from "../components/NewsLetter";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Policy />
      <NewsLetter />
    </div>
  );
};
export default Home;
