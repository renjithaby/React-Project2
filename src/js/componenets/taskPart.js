/**
 * Created by rabby on 23/07/17.
 */


import React from "react";
import Radium from "radium";

import Button from "./button";

@Radium
export default class taskPart extends React.Component{
    constructor() {
        super();
        console.log("this.props.title:");
        // console.log(this.props.title);

    }

    render (){

        return(
            <div>

                {this.props.item.title}
                <Button title = {"delete"} handleClick = {this.props.handleDeleteTask.bind(this)}/>
                {this.props.item.status === "open" ? <Button title = {"done"} handleClick = {this.props.handleTaskDone.bind(this)}/> :null}

            </div>

        );

    }

}




var styles = {

};

