/**
 * Created by rabby on 27/07/17.
 */
/**
 * Created by rabby on 27/07/17.
 */
import React from "react";

import ListItem  from "./listItem.js";
export default class todoList extends React.Component{

    constructor() {
        super();
        this.state = {
            todoTitle: "add new todo"
        };

       // console.log(this.props.todoList);
    }



       /*
    }

    console.log( this.props.todoList);
*/


    render(){
        console.log(this.props);
        return(

            <div>
                <ul>
                    {
                        this.props.todoList.map((item) =>

                            <ListItem  key ={item.id}item = {item} removeFromToDoList= {this.props.removeFromToDoList} updateTodoList ={this.props.updateTodoList} />

                        )

                    }
                </ul>
            </div>
        );
    }



}