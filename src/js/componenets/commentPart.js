/**
 * Created by rabby on 30/07/17.
 */
import React from "react";
import Radium from "radium";
import Button from "./button";

@Radium
export default class commentPart extends React.Component{
    constructor() {
        super();
        // console.log(this.props.title);

    }

    render (){

        return(
            <div>
                <ul>
                {
                    this.props.item.comments.map((comment) =>
                        <li  key = {comment.id}> {comment.value } </li>
                    )
                }
                </ul>


                <input value = {this.props.item.newComment} onChange = {this.props.newCommentOnChange.bind(this)}></input>
                <Button title = {"comment"} handleClick = {this.props.handleAddComment.bind(this)}/>

            </div>
    );

    }

}
var styles = {

};


