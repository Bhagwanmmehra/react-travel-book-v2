import { Link } from "react-router";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Nav from "../Components/Nav";
import s from "../Styles/HomePage.module.css";
import LogoBox from "../Components/LogoBox";

function HomePage() {
  return (
    <div className={s.homePage}>
      <Nav />
      <section className={s.hero}>
        <div>
          <LogoBox />
          <h1>
            Keep Travelling <br /> We are here to Track you
          </h1>
          <p>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <Link to="/login" className={s.cta}>
            <span>Start Tracking Now</span>
            <IoArrowForwardCircleSharp />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
