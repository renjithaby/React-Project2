/**
 * Created by rabby on 09/08/17.
 */
import {EventEmitter} from "events";
import Dispatcher from "../Dispatcher/Dispatcher.js";
import * as Actions from "../Actions/Actions.js";
import _ from 'lodash';



class TodoStore extends EventEmitter{

    constructor (){
        super();
        this.todos = [];
        Dispatcher.register(this.handleActions.bind(this));
    }


    getTodo(){
        return this.todos;
    }

    createTodo(text){
        this.todos.push({id:Date.now() ,  title : text , status : "active"});
        this.emit("change");
    }

    updateTodo(id){
        _.find(this.todos, {"id" :parseInt(id)}).status = "completed";
        this.emit("change");
    }

    deleteTodo(id){
        var item = _.find(this.todos, {id});
        var evens = _.remove(this.todos, function(n) {
            return n.id === parseInt(id);
        });
        this.emit("change");
    }

    handleActions(action){
        console.log("update the filter3");
        switch (action.type){

            case "CREATE_TODO" :
                this.createTodo(action.text);
            break;

            case "UPDATE_TODO":
                this.updateTodo(action.id);
            break;

            case "DELETE_TODO":
                this.deleteTodo(action.id);
                break;
        }
    }

}
const todoStore = new TodoStore;
export default todoStore;