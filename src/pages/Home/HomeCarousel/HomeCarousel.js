import React, { useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "react-slick";
import './HomeCarousel.css';
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../Redux/action/CarouselAction";
import { layDanhSachPhimAction } from "../../../Redux/action/QuanLyPhimAction";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "button__bar",
    autoplay: true,
    autoplaySpeed: 2000
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getCarouselAction;

    dispatch(action);
  },[]);

  useEffect(() => {
    const action = layDanhSachPhimAction;

    dispatch(action);
  },[]);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
            <img src={item.hinhAnh} style={{width:'100%',height:'100%'}}></img>
        </div>
      );
    });
  };

  return (
    // <Carousel effect="fade">
    //   {renderImg()}
    // </Carousel>
    // <OwlCarousel className="owl-theme w-screen" autoplay={false} items={1}>
    //   {renderImg()}
    // </OwlCarousel>
    <div>
      <Slider {...settings} style={{height: "760px", overflow: 'hidden'}}>
        {renderImg()}
      </Slider>
    </div>
  );
}
