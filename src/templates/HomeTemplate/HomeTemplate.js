import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export const HomeTemplate = (props) => { //path,exact,component
    
    const {Component,...restProps} = props;

    useEffect(() => {
        window.scrollTo(0, 0);
      })

    return <Route {...restProps} render={(propsRoute)=>{ //props.location,props.history,props.match

        return <Fragment>
            <Header {...propsRoute}/>

            <Component {...propsRoute}/>

            <Footer {...propsRoute}/>
        </Fragment>
    }} />
}