import React, { Component } from "react";
import Slider from "react-slick";
import _ from "lodash";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", left: '-50px' }}
      onClick={onClick}
    />
  );
}

export default class MultipleRowSlick extends Component {
  renderFilm = () => {
    return this.props.arrFilm.map((item, index) => {
      var moTa = _.replace(_.replace(item.moTa, "<p>", ""), "</p>", "");
      return (
        <div key={index}>
          <Film moTa={moTa} phim={item} />
        </div>
      );
    });
  };

  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "1px",
      slidesToShow: 4,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div style={{ padding: "56px"}}>
        <Slider {...settings}>
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
        </Slider>
      </div>
    );
  }
}
