import { ACTION_TOKEN_SET, ACTION_TOKEN_INIT, ACTION_TOKEN_REMOVE } from "../actions/tokenAction";

const initialState = {
    token: "",
    fetching: true
}

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TOKEN_SET:
            return {
                ...action.payload,
                fetching: false
            };
        case ACTION_TOKEN_INIT:
            return {
                ...state,
                fetching: true
            };
        case ACTION_TOKEN_REMOVE:
            return {
                ...initialState,
                fetching: false
            }
        default:
            return state;
    }
}