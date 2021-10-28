import { applyMiddleware } from "redux";
import { userMiddleware } from "./userMiddleware";
import { tokenMiddleware } from "./tokenMiddleware";

export default applyMiddleware(
    tokenMiddleware,
    userMiddleware
)