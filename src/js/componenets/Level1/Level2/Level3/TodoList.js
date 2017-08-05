/**
 * Created by rabby on 27/07/17.
 */
/**
 * Created by rabby on 27/07/17.
 */
import React from "react";


export default class TodoList extends React.Component{

    constructor() {
        super();
        this.state = {
            todoTitle: "add new todo"
        };

        // console.log(this.props.todoList);
    }




updateTodoItem(event){
    console.log(event.target.value);
    this.props.updateTodoItem(event.target.value)
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

                                <li key = {item.id}>
                                    <span> {item.title}  </span>
                                   {item.status === "active"? < button  type ="button" value ={item.id} class = "btn primary" onClick = {this.updateTodoItem.bind(this)} > complete </button> : null}
                                </li>

                        )

                        }
                </ul>
            </div>
        );
    }



}
