import { ACTION_USERINFO_SET, ACTION_USERINFO_REMOVE, userinfoSetAction } from "../actions/userAction";
import { LoginAPI } from "../../components/Login/LoginAPI";

export const userMiddleware = ({ dispatch }) => (next) => (action) => {

    next(action)

}