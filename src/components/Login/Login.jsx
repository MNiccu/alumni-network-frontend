import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"
import {LoginApi} from "./LoginApi"
import { useEffect} from "react"

const Login = (props) => {

	
	if (KeycloakService.isLoggedIn()) {
		
		//check if user exists

		let username = KeycloakService.getUsername();
		//this should probably return just a true or false, or something
		let user = LoginApi.getUser(username)
		.then ((result) => {
			if(result.length > 0) {
				props.history.push("/timeline")
				
			} else {
				let token = KeycloakService.getToken()
				LoginApi.postUser(username, token)
				props.history.push("/moreinfo")
			}
					console.log(result)
        })

		//THERE SHOULD BE A "GET NAME" TOO
							
	}

	//can be removed
	const onFormSubmit = event => {
		event.preventDefault()	
		KeycloakService.doLogin()
		
	}




	useEffect(() => {

		if(!KeycloakService.isLoggedIn()){
			KeycloakService.doLogin()
		}
		
	}, [])





	return (
		<div className="background">
			<form className="container" onSubmit={ onFormSubmit }>
				<h2>Login</h2>

				<button type="submit" className="btn btn-primary btn-lg" >Login with Keycloak</button>
				
			</form>
			
		</div>
	)
}
export default Login
