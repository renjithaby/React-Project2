/**
 * Created by rabby on 30/07/17.
 */
/**
 * Created by rabby on 30/07/17.
 */

import React from "react";
import Radium  from "radium";

@Radium
export default class HomePage extends React.Component{
    constructor() {
        super();
        console.log("this.props.title:");
        // console.log(this.props.title);

    }

    render (){

        return(
           <h1> This is the home Page </h1>
        );

    }

}

var styles = {
    button: {
        float: "right"
    },

    base: {
        color: '#ffffff',
        background: '#000000'

        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        /* ':hover': {
         background: '#0074d9'.lighten(0.2).hexString()
         }*/
    },

    primary: {
        background: '#0074D9'
    },

    warning: {
        background: '#FF4136'
    }
};