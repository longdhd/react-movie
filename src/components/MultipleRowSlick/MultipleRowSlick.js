import React, { Component } from "react";
import Slider from "react-slick";
import _ from "lodash";
import Film from "../Film/Film";
import styleSlick from './MultipleRowSlick.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilmEffect from "../Film/FilmEffect";

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
      style={{ ...style, display: "block", left: '-75px',top:'50%' }}
      onClick={onClick}
    />
  );
}

export default class MultipleRowSlick extends Component {
  renderFilm = () => {
    return this.props.arrFilm.map((item, index) => {
      var moTa = _.replace(_.replace(item.moTa, "<p>", ""), "</p>", "");
      return (
        <div key={index} className={`${styleSlick['width-item']}`}>
          <FilmEffect moTa={moTa} phim={item} />
        </div>
      );
    });
  };

  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 4,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div style={{ padding: "56px"}} className="row">
        <Slider {...settings} className="col-12">
          {this.renderFilm()}
        </Slider>
      </div>
    );
  }
}
