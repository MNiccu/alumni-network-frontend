import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"
import {LoginApi} from "./LoginApi"
	

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

	const onFormSubmit = event => {
		event.preventDefault()	
		KeycloakService.doLogin()
		
	}

	return (
		<div className="background">
			<form className="container" onSubmit={ onFormSubmit }>
				<h2>Login</h2>
			
				<div className="form-group">
					<label>Username</label>
					<input id="username" type="text" placeholder="Enter username"></input>		
				</div>	

				<div className="form-group">
					<label>Password</label>
					<input id="password" type="password" placeholder="Enter password"></input>
				</div>
			
				<button type="submit" className="btn btn-primary btn-lg" >Login with Keycloak</button>
				
			</form>
			
		</div>
	)
}
export default Login
