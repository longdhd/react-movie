import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import _ from "lodash";
import Film from "../Film/Film";
import styleSlick from "./MultipleRowSlick.module.css";
import "./MultipleRowSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilmEffect from "../Film/FilmEffect";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px", top: "50%" }}
      onClick={onClick}
    />
  );
}

export default class MultipleRowSlick extends Component {
  renderFilmDangChieu = () => {
    let filmDangChieu = _.filter(this.props.arrFilm, ["dangChieu", true]);
    return filmDangChieu.map((item, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <FilmEffect phim={item} />
        </div>
      );
    });
  };

  renderFilmSapChieu = () => {
    let filmSapChieu = _.filter(this.props.arrFilm, ["dangChieu", false]);
    return filmSapChieu.map((item, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <FilmEffect phim={item} />
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesPerRow: 1,
          },
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesPerRow: 1,
            rows: 2,
            centerPadding: "0px",
          },
        }
      ],
    };
    return (
      <Fragment>
        <ul class="nav navOnAir nav-pills justify-center pt-5 font-semibold md:text-lg">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#dangChieu">
              Phim Đang Chiếu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#sapChieu">
              Phim Sắp Chiếu
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div className="tab-pane container active" id="dangChieu">
            <div style={{ padding: "56px" }} className="row">
              <Slider {...settings} className="col-12">
                {this.renderFilmDangChieu()}
              </Slider>
            </div>
          </div>
          <div className="tab-pane container fade" id="sapChieu">
            <div style={{ padding: "56px" }} className="row">
              <Slider {...settings} className="col-12">
                {this.renderFilmSapChieu()}
              </Slider>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
