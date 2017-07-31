/**
 * Created by rabby on 23/07/17.
 */
import React from "react";
import { BrowserRouter as Router, Route , Link,hashHistory } from 'react-router-dom';

import Header from "./header.js";
import NavBar from "./navBar.js";
import AddTodo from "./addTodo.js";
import TodoList from "./todoList.js";
import { HashRouter } from 'react-router-dom'


export default  class Layout extends React.Component{
    constructor() {
        super();
        this.list = [];
        this.state = {title: "my todos", todoList: []};

        /*this.state = {
         title: "Welcome",
         };*/
        }
        handleTaskDone( event){
            console.log(event.target);
            console.log(event.target.parentNode);
            console.log(index);

        }

        addToDoToList(item){
            console.log("item" + item);
           this.list.push({id : this.list.length,title : item, status :"open", comments: [], newComment :"enter your comments"});
            console.log(this.list);

            this.setState({todoList:this.list});
       }

        removeFromToDoList(item){
            var index = this.state.todoList.indexOf(item);
            this.list.splice(index,1);
            this.setState({todoList:this.list});
        }

        updateTodoList(item){
            var index = this.state.todoList.indexOf(item);
            console.log(this.state.todoList.indexOf(item));
            console.log("item index");
            this.list[index] = item;
            this.setState({todoList:this.list});
        }

    render() {
        return (

                <div>
                <NavBar todoList = {this.state.todoList} />
                <Header title = {this.state.title}/>
                <AddTodo addToDoToList ={this.addToDoToList.bind(this)}/>
                <TodoList todoList = {this.state.todoList} removeFromToDoList= {this.removeFromToDoList.bind(this)} updateTodoList ={this.updateTodoList.bind(this)} />
                </div>
        );

    };
}