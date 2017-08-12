/**
 * Created by rabby on 27/07/17.
 */
/**
 * Created by rabby on 27/07/17.
 */
import React from "react";
import Radium from "radium";

@Radium
export default class TodoList extends React.Component{

    constructor() {
        super();
        this.state = {
            todoTitle: "add new todo"
        };

        // console.log(this.props.todoList);
    }




updateTodoItem(event){
    //console.log(event.target.value);
    this.props.updateTodoItem(event.target.value)
}
deleteTodoItem(event){
    //console.log(event.target.value);
    this.props.deleteTodoItem(event.target.value)
}



    /*
     }

     console.log( this.props.todoList);
     */


    render(){
        console.log(this.props);
        return(
            <div class="list-group"  style={[ styles.center ]}>
                <ul>
                    {
                        this.props.todoList.map((item) =>


                                    <li key = {item.id} class = "list-group-item">

                                        <span style={[ styles.span ]}> {item.title}  </span>

                                       {item.status === "active"? < button style={[ styles.listButton ]} type ="button" value ={item.id} class = "btn primary" onClick = {this.updateTodoItem.bind(this)} > complete </button> : null}
                                        <button style={[ styles.listButton ]} type ="button" value ={item.id} class = "btn-primary" onClick = {this.deleteTodoItem.bind(this)}> delete </button>
                                    </li>

                        )

                        }
                </ul>
            </div>
        );
    }



}

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    center : {
        marginLeft: "auto",
        marginRight: "auto"
    },

   span:{

    },

    listButton :{
        marginLeft :"2em",
        marginTop :"-0.2em",
       padding:".1em",
       float :"right"
    }
};

