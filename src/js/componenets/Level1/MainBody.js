/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";

import { BrowserRouter as Router, Route ,Switch,hashHistory } from 'react-router-dom';
import FinishedTodos from "./Level2/FinishedTodos.js";
import Todos from "./Level2/Todos.js";
import { HashRouter } from "react-router-dom";
import TodoStore from "../../store/TodoStore";
import GeneralStore from "../../store/GeneralStore";
import * as Actions from  "../../Actions/Actions";

export default  class MainBody extends React.Component
{
	constructor()
	{
		super();
        this.handleTodoStoreChange = this.handleTodoStoreChange.bind(this);
        this.handleGeneralStoreChange = this.handleGeneralStoreChange.bind(this);
		this.list = [];
		this.state = {todoList: [], generalInfo : {}};

	}

    componentWillMount(){
        TodoStore.on("change", this.handleTodoStoreChange);
        GeneralStore.on("change", this.handleGeneralStoreChange);
        this.handleTodoStoreChange();
        this.handleGeneralStoreChange();
       console.log(TodoStore.listenerCount("change"));
    }

   componentWillUnMount(){
       TodoStore.removeListener("change",this.handleTodoStoreChange);  // this seems to be no longer needed.
       GeneralStore.removeListener("change", this.handleGeneralStoreChange);
    }
    getTodoList() {
        if (this.state.generalInfo.showAll === true){
            return this.state.todoList;
        }else {
            return this.state.todoList.filter(t=>t.status !== "completed");
        }
    }

    handleTodoStoreChange(){
        this.setState({todoList :TodoStore.getTodo()});
    }

    handleGeneralStoreChange(){
        this.setState({generalInfo :GeneralStore.getGeneralInfo()});
        console.log(this.state.generalInfo.showAll);
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
    updateTodoFilter(){
        Actions.updateTodoFilter();
        console.log("update the filter");
    }



	render()
	{
		return (

            <div>

	         <Switch>
			<Route path="/Home" component={()=> < Todos showAll = {this.state.generalInfo.showAll} updateTodoFilter = {this.updateTodoFilter.bind(this)} addTodoItem = {this.addTodoItem.bind(this)} updateTodoItem = {this.updateTodoItem.bind(this)} deleteTodoItem = {this.deleteTodoItem.bind(this)}  todoList = { this.getTodoList()}/> }/>
			<Route path="/Completed"  component = {()=> <FinishedTodos todoList = {this.state.todoList} /> }/>
			<Route component = {()=> <Todos  showAll = {this.state.generalInfo.showAll}updateTodoFilter = {this.updateTodoFilter.bind(this)} addTodoItem = {this.addTodoItem.bind(this)} updateTodoItem = {this.updateTodoItem.bind(this)} deleteTodoItem = {this.deleteTodoItem.bind(this)} todoList = { this.getTodoList()}/> }/>
			</Switch>
            </div>
		);
	}
}

/*
/*render={()=><Completed todoList = {this.props.todoList}/>}/> */
