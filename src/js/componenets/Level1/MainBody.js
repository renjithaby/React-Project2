/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";

import { BrowserRouter as Router, Route ,Switch,hashHistory } from 'react-router-dom';
import FinishedTodos from "./Level2/FinishedTodos.js";
import Todos from "./Level2/Todos.js";
import { HashRouter } from "react-router-dom";
import TodoStore from "../../store/TodoStore";
import * as Actions from  "../../Actions/Actions";

export default  class MainBody extends React.Component
{
	constructor()
	{
		super();
       this.handleChangeEvent = this.handleChangeEvent.bind(this);
		this.list = [];
		this.state = {todoList: []};

	}

    componentWillMount(){
        TodoStore.on("change", this.handleChangeEvent);
       console.log(TodoStore.listenerCount("change"));
    }

   componentWillUnMount(){
       TodoStore.removeListener("change",this.handleChangeEvent);  // this seems to be no longer needed.
    }

    handleChangeEvent(){
        this.setState({todoList :TodoStore.getTodo()});
    }

    deleteTodoItem(id){
        Actions.deleteTodo(id);
    }

    addTodoItem(text){
        Actions.createTodo(text);
    }

    updateTodoItem(id){
        Actions.updateTodo(id);
    }



	render()
	{
		return (

            <div>
	         <Switch>
			<Route path="/Home" component={()=> < Todos addTodoItem = {this.addTodoItem.bind(this)} updateTodoItem = {this.updateTodoItem.bind(this)} deleteTodoItem = {this.deleteTodoItem.bind(this)}  todoList = {this.state.todoList}/> }/>
			<Route path="/Completed"  component = {()=> <FinishedTodos todoList = {this.state.todoList} /> }/>
			<Route component = {()=> <Todos addTodoItem = {this.addTodoItem.bind(this)} updateTodoItem = {this.updateTodoItem.bind(this)} deleteTodoItem = {this.deleteTodoItem.bind(this)} todoList = {this.state.todoList}/> }/>
			</Switch>
            </div>
		);
	}
}

/*
/*render={()=><Completed todoList = {this.props.todoList}/>}/> */
