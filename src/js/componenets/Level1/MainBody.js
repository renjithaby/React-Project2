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


	render()
	{

		return (
			<Router>
            <div>
	         <Switch>
			<Route path="/Home" component={Todos}/>
			<Route path="/Completed"  component = {FinishedTodos}/>
			<Route component={FinishedTodos}/>
			</Switch>
            </div>
            </Router>
		);
	}
}

/*
/*render={()=><Completed todoList = {this.props.todoList}/>}/> */
