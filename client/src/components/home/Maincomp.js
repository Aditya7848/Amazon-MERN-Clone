import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the day" products={products} />
        </div>
        <div className="right_slide">
          <h4>Festival latest launches</h4>
          <img
            src="https://m.media-amazon.com/images/I/71yoroxXCRL._AC_SY400_.jpg"
            alt="festival_Promo_img"
          />
        </div>
      </div>
      <Slide title="Today's deal" products={products} />
      <div className="center_img">
        <img
          src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/10/25/163614-happiness-daysamazon-india-twitter.jpg?itok=L44LO6yo"
          alt="diwali_special"
        />
      </div>
      <Slide title="Bestsellers" products={products} />
      <Slide title="Upto 80% off" products={products} />
    </div>
  );
};

export default Maincomp;
