import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./layout/Header/Header";

export const HomeTemplate = (props) => { //path,exact,component
    
    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{ //props.location,props.history,props.match

        return <Fragment>
            <Header {...propsRoute}/>

            <Component {...propsRoute}/>

            <footer className="bg-black h-10 text-white">
                Đây là Footer
            </footer>
        </Fragment>
    }} />
}