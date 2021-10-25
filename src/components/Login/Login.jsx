import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"
import { useEffect} from "react"
import { LoginAPI } from "./LoginAPI"

const Login = (props) => {

	
	// if (KeycloakService.isLoggedIn()) {
		
	// 	//check if user exists

	// 	let username = KeycloakService.getUsername();
	// 	//this should probably return just a true or false, or something
	// 	let user = LoginApi.getUser(username)
	// 	.then ((result) => {
	// 		if(result.length > 0) {
	// 			props.history.push("/timeline")
				
	// 		} else {
	// 			let token = KeycloakService.getToken()
	// 			LoginApi.postUser(username, token)
	// 			props.history.push("/moreinfo")
	// 		}
	// 				console.log(result)
    //     })

		
							
	// }

	const getUserInfo = () => {
		console.log('Bearer ' + KeycloakService.getToken())
		console.log(LoginAPI.getUser(KeycloakService.getUserId()))
	}

	useEffect(() => {

		if(!KeycloakService.isLoggedIn()){
			KeycloakService.doLogin()
			
		}
		else {
			getUserInfo()
			// console.log(KeycloakService.getToken())
			// console.log(KeycloakService.getUserId())
		}
		
	}, [])





	return (
		<div className="background">
			
			
		</div>
	)
}
export default Login
