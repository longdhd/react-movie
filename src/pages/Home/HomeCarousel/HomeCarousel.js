import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "760px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeCarousel() {
  return (
    <Carousel effect="fade">
      <div>
        <div style={contentStyle}>
            <img src="https://akthemes.com/video/images/slider/banner-1.jpg" alt="banner"></img>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img src="https://akthemes.com/video/images/slider/banner-2.jpg" alt="banner"></img>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
            <img src="https://akthemes.com/video/images/slider/banner-3.png" alt="banner"></img>
        </div>
      </div>
    </Carousel>
  );
}
