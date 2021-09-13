import React,{useEffect} from "react";
import { Carousel } from "antd";
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { getCarouselAction } from "../../../Redux/action/CarouselAction";


export default function HomeCarousel(props) {
  
  const {arrImg} = useSelector(state => state.CarouselReducer);
  
  const contentStyle = {
    height: "760px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    backgroundPosition:'top',
    backgroundSize: '100%',
    backgroundRepeat: 'none'
  };

  const dispatch = useDispatch();

  useEffect( ()  => {
    
    const action = getCarouselAction;

    dispatch(action);

  }, [])

  const renderImg = () =>{
    return arrImg.map((item,index) =>{
      return <div key={index}>
        <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
            <img className="opacity-0" src={item.hinhAnh} alt="banner"></img>
        </div>
      </div>
    })
  }

  return (
    <Carousel effect="fade">
      {renderImg()}
    </Carousel>
  );
}
