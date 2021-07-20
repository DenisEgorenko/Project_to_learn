import React from "react";
import {Redirect} from "react-router";

export function withAuthRedirect(Component){

    function redirectComponent(props){
        if (!props.isAuth) return <Redirect to={"/Login"}/>

        return <Component {...props}/>
    }

    return redirectComponent;

}