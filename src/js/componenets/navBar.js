/**
 * Created by rabby on 27/07/17.
 */
import React from "react";
import { BrowserRouter as Router, Route ,Switch, Link,hashHistory } from 'react-router-dom';
import Home from "./home";
import Completed from "./completed";
import TodoList from "./todoList";
import NavBar from "./header";
export default  class navBar extends React.Component{
    constructor(){
        super();
        this.state = {title: "home3"};
        /*this.state = {
         title: "Welcome",
         };*/
    }
    render() {
        return (
                <Router history= {hashHistory}>
                <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to="/Home"><a class="navbar-brand" > My ToDos </a></Link>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class="active"><Link to="/Home"> Home </Link></li>
                                <li class="active"><Link to="/Completed"> Complete </Link></li>
                                <li class="active"><Link to="/Completes"> Complete </Link></li>
                             </ul>
                        </div>

                    </div>

                </nav>
                <Switch>
                <Route  path="/Home" component={Home}/>
                <Route  path="/Completed" render={()=><Completed todoList = {this.props.todoList}/>}/>
                <Route component={Home}/>
                </Switch>

                </div>
                </Router>


        );

    };
}
