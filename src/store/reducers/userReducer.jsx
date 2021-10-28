import { ACTION_USER_SET, ACTION_USER_REMOVE } from "../actions/userAction";

const initialState = {
    id: "",
    username: "",
    firstname: "", 
    lastname: "",
    name: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_USER_SET:
            return {
                ...action.payload
            }
        case ACTION_USER_REMOVE:
            return {
                ...initialState
            }
        default:
            return state
    }
}