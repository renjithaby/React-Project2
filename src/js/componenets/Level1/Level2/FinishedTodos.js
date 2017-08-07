/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";
import Radium from "radium";

@Radium
export default  class FinishedTodos extends React.Component
{

	render()
	{
		return (
           <div class="container" style={[ styles.center ]}>
            <div class="row" style={[ styles.section ]}>
                <div class="col " >
                <ul class = "input-group"  style={[ styles.center ]}>
                    {
                        this.props.todoList.map((item) =>
                         item.status === "completed" ?
                        <li key = {item.id} class = "list-group-item">
                            <span> {item.title}  </span>
                        </li>: null



                        )

                        }
                </ul>
            </div>
            </div>
            </div>

		);
	}
}


// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    center : {
        textAlign: "center"
    },
    section : {
        paddingTop: "1em",
         paddingBottom: "1em"
    },
    center : {
        marginLeft: "auto",
        marginRight: "auto"
    },

};