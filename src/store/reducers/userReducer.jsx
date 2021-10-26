import { ACTION_USERINFO_SET, ACTION_USERINFO_REMOVE} from "../actions/userAction";

const initialState = {
    id: "",
    name: "",
    username: "",
    picture: "",
    status: "", 
    bio: "", 
    funFact: "",
    token: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_USERINFO_SET:
            return {
                ...action.payload,
                token: action.token
            };
        case ACTION_USERINFO_REMOVE:
            return {
                ...initialState
            }
        default:
            return state;
    }
}