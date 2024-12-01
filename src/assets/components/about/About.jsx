import { aboutImg } from "../../images";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <img src={aboutImg} alt="about" />
    </div>
  );
};

export default About;
