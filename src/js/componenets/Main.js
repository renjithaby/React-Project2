/**
 * Created by rabby on 23/07/17.
 */
import React from "react";
import { BrowserRouter as Router, Route , Link,hashHistory } from 'react-router-dom';

import Header from "./Level1/Header.js";
import MainBody from "./Level1/MainBody.js";
import { HashRouter } from 'react-router-dom'


export default  class Main extends React.Component{
    constructor() {
        super();
        this.list = [];
        this.state = {title: "my todos", todoList: []};

        /*this.state = {
         title: "Welcome",
         };*/
        }
       /* handleTaskDone( event){
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
        }*/

    render() {
        return (
            <Router>
                <div>
                <Header/>
                <MainBody/>
                </div>
            </Router>
        );

    };
}
