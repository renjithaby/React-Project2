/**
 * Created by rabby on 04/08/2017.
 */
/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";

export default  class TodoFilter extends React.Component
{
    constructor()
    {
        super();

    }

    onSelectHandler (event){
        console.log(event.target);
        console.log(event.target.type);;
        console.log(event.target.value);;
        this.props.updateTodoFilter();
    }

    render()
    {

        return (

            <div class="checkbox">
                <label><input type="checkbox" value="SHOW_ALL" checked = {this.props.showAll}  onChange = {this.onSelectHandler.bind(this)}/>Show All</label>

            </div>

        );
    }
}

/*
 /*render={()=><Completed todoList = {this.props.todoList}/>}/> */
/**
 * Created by rabby on 12/08/17.
 *
 *  <label><input type="checkbox" value="SHOW_UNFINISHED" {this.props.showAll?null:"checked"} onClick = {this.onSelectHandler.bind(this)} > Show Unfinished</label>
 */
