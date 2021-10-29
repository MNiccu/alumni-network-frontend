import { 
    ACTION_TOKEN_SET, 
    ACTION_TOKEN_INIT, 
    ACTION_TOKEN_REMOVE, 
    tokenSetAction } from "../actions/tokenAction"
import { userSetAction, userRemoveAction } from "../actions/userAction"
import jwt_decode from "jwt-decode"
import KeycloakService from "../../services/KeycloakService"
import Cookies from 'js-cookie'

export const tokenMiddleware = ({ dispatch }) => (next) => (action) => {

    next(action)

    const getToken = () => {
        try {
            const token = KeycloakService.getToken()
            return token
        }
        catch(e) {
            console.log("here")
            console.log(e)
        }
    }

    if(action.type === ACTION_TOKEN_INIT){
        let storedToken = Cookies.get('token')
        console.log("stored boy", storedToken)
        if(storedToken === undefined){
            console.log("token und")
            storedToken = getToken()
            console.log("stored", storedToken)
            if(!storedToken)
                return
        }
        const userInfo = {
            id: jwt_decode(storedToken).sub,
            username: jwt_decode(storedToken).preferred_username,
            firstname: jwt_decode(storedToken).given_name,
            lastname: jwt_decode(storedToken).family_name,
            name: jwt_decode(storedToken).given_name + ' ' + jwt_decode(storedToken).family_name
        }
        dispatch(userSetAction(userInfo))
        dispatch(tokenSetAction({token: storedToken}))
    }

    if(action.type === ACTION_TOKEN_SET){
        Cookies.set('token', action.payload.token)
    }

    if(action.type === ACTION_TOKEN_REMOVE){
        Cookies.remove('token')
        dispatch(userRemoveAction())
    }
}