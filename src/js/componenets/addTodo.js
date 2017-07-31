/**
 * Created by rabby on 27/07/17.
 */
import React from "react";
import Button from "./button";


export default class addTodo  extends React.Component{

    constructor(){
        super();
        this.state = {
            todoTitle: "add new todo"
        };
    }

    addTodoToList(event){
        //console.log(event.target.parent.input.value);
        console.log(this.state.todoTitle);
        this.props.addToDoToList(this.state.todoTitle);
    }
    onChangeHandler(event) {
        console.log(event.target.value);
        this.setState({todoTitle : event.target.value});
    }



    render(){
        return(
            <div>
            <input value = {this.state.todoTitle} onChange= {this.onChangeHandler.bind(this)} />
            <Button title ={"add"} handleClick = {this.addTodoToList.bind(this)}/>
            </div>
        );
    }



}