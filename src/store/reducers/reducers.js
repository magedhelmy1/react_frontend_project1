import {combineReducers} from "redux";
import auth from "./auth"
import researcher from "./researcher";

export default combineReducers({
    auth,
    researcher,

})