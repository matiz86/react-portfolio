import { mainImg } from "../../images";

mainImg;

const Home = () => {
  return (
    <div className="home">
      <h2>Home</h2>
      <img src={mainImg} alt="main" />
    </div>
  );
};

export default Home;
