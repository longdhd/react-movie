import { Fragment, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import ResponsiveHeader from "./layout/Header/ResponsiveHeader";

export const HomeTemplate = () => {
  //path,exact,component

  // const { Component, ...restProps } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname]);

  //props.location,props.history,props.match

  return (
    <Fragment>
      <ResponsiveHeader />

      <Outlet />

      <Footer />
    </Fragment>
  );
};
