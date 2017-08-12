/**
 * Created by rabby on 12/08/17.
 */

import {EventEmitter} from "events";
import Dispatcher from "../Dispatcher/Dispatcher.js";
import * as Actions from "../Actions/Actions.js";


class GeneralStore extends EventEmitter{

    constructor (){
        super();
        this.generalInfo = {showAll:true};
        Dispatcher.register(this.handleActions.bind(this));
    }


    getGeneralInfo(){
        console.log(this.generalInfo.showAll +"::this.generalInfo.showAll");
        return this.generalInfo;
    }



    updateFilter(){
        this.generalInfo.showAll = !this.generalInfo.showAll;
        console.log(this.generalInfo.showAll  +"::this.generalInfo.showAll ");
        this.emit("change");
    }



    handleActions(action){
        console.log("update the filter111");
        switch (action.type) {

            case "UPDATE_TODO_FILTER" :
                this.updateFilter();
                break;
        }
    }

}
const generalStore = new GeneralStore;
export default generalStore;