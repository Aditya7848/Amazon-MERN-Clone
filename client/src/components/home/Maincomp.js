import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";

const Maincomp = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the day" />
        </div>
        <div className="right_slide">
          <h4>Festival latest launches</h4>
          <img
            src="https://m.media-amazon.com/images/I/71yoroxXCRL._AC_SY400_.jpg"
            alt="festival_Promo_img"
          />
        </div>
      </div>
      <Slide title="Today's deal" />
      <div className="center_img">
        <img
          src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/10/25/163614-happiness-daysamazon-india-twitter.jpg?itok=L44LO6yo"
          alt="diwali_special"
        />
      </div>
      <Slide title="Bestsellers" />
      <Slide title="Upto 80% off" />
    </div>
  );
};

export default Maincomp;
