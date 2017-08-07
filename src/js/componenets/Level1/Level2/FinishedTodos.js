/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";


export default  class FinishedTodos extends React.Component
{

	render()
	{
		return (
            <div>
                <ul>
                    {
                        this.props.todoList.map((item) =>
                         item.status === "completed" ?
                        <li key = {item.id}>
                            <span> {item.title}  </span>
                        </li>: null



                        )

                        }
                </ul>
            </div>
		);
	}
}
