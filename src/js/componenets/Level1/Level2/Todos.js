/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";
import AddTodo from "./Level3/AddTodo.js"
import TodoList from "./Level3/TodoList.js"
export default  class Todos extends React.Component
{



	render()
	{
		return (
            <div>
			<h1> Im in the Todo </h1>
            <AddTodo  addTodoItem = {this.props.addTodoItem.bind(this)}  currentTodoInput = {this.props.currentTodoInput}/>
            <TodoList todoList = {this.props.todoList} updateTodoItem = {this.props.updateTodoItem.bind(this)}/>
            </div>

		);
	}
}
