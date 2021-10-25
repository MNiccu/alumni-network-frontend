import { ACTION_USERINFO_GET, ACTION_USERINFO_SET, ACTION_USERINFO_REMOVE, userinfoSetAction } from "../actions/userAction";
import { LoginAPI } from "../../components/Login/LoginAPI";

export const userMiddleware = ({ dispatch }) => (next) => (action) => {

    next(action)

    if(action.type === ACTION_USERINFO_GET) {
        LoginAPI.getUser(action.payload)
            .then(user => {
                if(user.length > 0){
                    console.log("JEE")
                }
            })
    }
}