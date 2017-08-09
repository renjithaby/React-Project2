/**
 * Created by rabby on 04/08/2017.
 */
/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";

export default  class AddTodo extends React.Component
{
    constructor()
    {
        super();
        //this.list = [];
        this.state = {inputValue : "enter todo"};

        /*this.state = {
         title: "Welcome",
         };*/
    }

    onChangeHandler (event){
        console.log(event.target.value);
        this.setState({inputValue : event.target.value});
    }

    addTodoToList(event){
        //console.log("adding teh todos");
        //console.log(this.refs);
        this.props.addTodoItem(this.refs.todo.value);
    }

    render()
    {

        return (

            <div>
                <input type='text' ref = "todo" value = {this.state.inputValue} onChange= {this.onChangeHandler.bind(this)} />
                <button  type="button" class="btn primary"  onClick = {this.addTodoToList.bind(this)} >Add
                </button>

            </div>
        );
    }
}

/*
 /*render={()=><Completed todoList = {this.props.todoList}/>}/> */
