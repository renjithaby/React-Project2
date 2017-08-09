/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";
import Radium from "radium";
import AddTodo from "./Level3/AddTodo.js"
import TodoList from "./Level3/TodoList.js"
@Radium
export default  class Todos extends React.Component
{



	render()
	{
		return (
		<div class="container" style={[ styles.center ]}>
            <div class="row" style={[ styles.section ]}>
                <div class="col" >
					<h1> Im in the Todo </h1>
                    <AddTodo  addTodoItem = {this.props.addTodoItem.bind(this)}  currentTodoInput = {this.props.currentTodoInput}/>
                </div>
             </div>
            <div class="row" style={[ styles.section ]}>
                <div class="col">
                    <TodoList todoList = {this.props.todoList} updateTodoItem = {this.props.updateTodoItem.bind(this)} deleteTodoItem = {this.props.deleteTodoItem.bind(this)}/>
                    <div class="card">
                    <div class = "card-block">
                    <h1> hell0</h1>
                    </div>
                    </div>
                </div>
            </div>
		</div>
		);
	}
}


// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    center : {
        textAlign: "center"
    },
    section : {
        paddingTop: "1em",
         paddingBottom: "1em"
    }

};