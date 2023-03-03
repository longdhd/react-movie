import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

const DatVeTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default DatVeTemplate;
