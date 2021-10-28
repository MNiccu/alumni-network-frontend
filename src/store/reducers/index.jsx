import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { tokenReducer } from "./tokenReducer";

const appReducer = combineReducers({
    tokenReducer,
    userReducer
})

export default appReducer;