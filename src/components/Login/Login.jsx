import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"
import { useEffect} from "react"
import { LoginAPI } from "./LoginApi"
import axios from "axios"

const Login = (props) => {
	const getUserInfo = async () => {
		try {
			const token =  await KeycloakService.getToken()
			LoginAPI.userApiFetch(token,KeycloakService.getUserId());

		}catch(e) {
			console.log(e);
		}
	}

	useEffect(() => {
		if(!KeycloakService.isLoggedIn()){
			KeycloakService.doLogin()
		}
		else {
			getUserInfo()
		}
	}, [])


	return (
		<div className="background">
			
			
		</div>
	)
}
export default Login
