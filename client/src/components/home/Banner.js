import "./banner.css";
import Carousel from "react-material-ui-carousel";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];

const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoplay={true}
      animation="slide"
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      indicators={false}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((img, i) => {
        return (
          <i key={i}>
            <img src={img} alt="photsOnSlide" key={i} className="banner_img" />
          </i>
        );
      })}
    </Carousel>
  );
};

export default Banner;
