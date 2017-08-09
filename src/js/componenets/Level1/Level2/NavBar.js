/**
 * Created by rabby on 04/08/2017.
 */
/**
 * Created by rabby on 27/07/17.
 */
import React from "react";
import {Link} from 'react-router-dom';


export default  class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {title: "home3"};
        /*this.state = {
         title: "Welcome",
         };*/

    }
    render() {
     //console.log(Route);
     //console.log(Link);
        return (

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
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li  class="active"><Link to="/Home" > Todos </Link></li>
                                <li  class="active"><Link to="/Completed" > Finished Todos </Link></li>
                             </ul>
                        </div>

                    </div>

                </nav>

			</div>

        );

    };
}


