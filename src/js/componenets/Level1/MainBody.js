/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";

import { BrowserRouter as Router, Route ,Switch,hashHistory } from 'react-router-dom';
import FinishedTodos from "./Level2/FinishedTodos.js";
import Todos from "./Level2/Todos.js";
import { HashRouter } from 'react-router-dom';

export default  class MainBody extends React.Component
{
	constructor()
	{
		super();
		this.list = [];
		this.state = {todoList: []};

		/*this.state = {
		 title: "Welcome",
		 };*/


	}

    addTodoItem(val){
        var list = this.state.todoList;
        list.push({id:list.length ,  title :val , status : "active"});
        this.setState({todoList : list});
        console.log(this.state.todoList);
    }

    updateTodoItem(id){
        var list = this.state.todoList;
        list[id].status = "completed";
        this.setState({todoList : list});
    }


	render()
	{

		return (

            <div>
	         <Switch>
			<Route path="/Home" component={()=> < Todos addTodoItem = {this.addTodoItem.bind(this)} updateTodoItem = {this.updateTodoItem.bind(this)} todoList = {this.state.todoList}/> }/>
			<Route path="/Completed"  component = {FinishedTodos}/>
			<Route component={FinishedTodos}/>
			</Switch>
            </div>
		);
	}
}

/*
/*render={()=><Completed todoList = {this.props.todoList}/>}/> */
