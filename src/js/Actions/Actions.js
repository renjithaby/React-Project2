/**
 * Created by rabby on 09/08/17.
 */
import Dispatcher from "../Dispatcher/Dispatcher.js";


export function createTodo(text) {
    Dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id){
    Dispatcher.dispatch({
        type :"DELETE_TODO",
        id
    });
}

export function updateTodo(id){
    Dispatcher.dispatch({
        type :"UPDATE_TODO",
        id
    });
}