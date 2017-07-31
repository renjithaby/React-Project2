/**
 * Created by rabby on 23/07/17.
 */

import React from "react";
import Title from "./Header/title";


export default class Header extends React.Component{
    constructor() {
        super();
        console.log("this.props.title:");
       // console.log(this.props.title);

    }

    render (){

        return(
            <div>
                <Title title = {this.props.title}/>
            </div>
        );

    }

}