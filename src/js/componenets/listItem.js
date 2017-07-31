/**
 * Created by rabby on 28/07/17.
 */
import React from "react";
import Radium from "radium";
import TaskPart  from "./taskPart";
import CommentPart  from "./commentPart";

@Radium
export default class ListItem extends React.Component {
    constructor(){
        super();
        var item = {};
    }
    handleChange(e) {
        const title = e.target.value;

        this.props.changeTitle(title);
    }
    handleTaskDone(event){
        this.item = this.props.item;
        this.item.status = "done";

        this.props.updateTodoList(this.item);
    }
    handleDeleteTask (event){
        this.props.removeFromToDoList(this.item);
    }
    handleAddComment(){
        this.item = this.props.item;
        this.item.comments.push({id:this.item.comments.length, value : this.item.newComment});
        this.props.updateTodoList(this.item);
    }

    newCommentOnChange(event){
        this.item = this.props.item;
        this.item.newComment = event.target.value;
       this.props.updateTodoList(this.item);
    }

    render() {
        console.log('I was triggered during render');
        return (

            <li style={[styles.li]} className={this.props.item.status ==="done" ? 'hidden' : ''}  key={this.props.item.id}>
                <div class="panel panel-default">
                    <div class="panel-body">
                    <TaskPart item = {this.props.item} handleDeleteTask = {this.handleDeleteTask.bind(this)} handleTaskDone = {this.handleTaskDone.bind(this)}/>
                    <CommentPart item = {this.props.item} handleAddComment = {this.handleAddComment.bind(this)} newCommentOnChange = {this.newCommentOnChange.bind(this)}/>
                    </div>
                </div>
            </li>
        );
    }
}




// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    li: {

        listStyleType: "none"
    }
};