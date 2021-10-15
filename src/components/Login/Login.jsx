import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"
import {LoginApi} from "./LoginApi"
	

const Login = (props) => {

	
	if (KeycloakService.isLoggedIn()) {
		
		//check if user exists

		//let username = KeycloakService.getUsername();
		//let user = LoginApi.getUser(username)

		//post user
		//checking user for bio
		
		
		//if (user.bio == null){
			return <Redirect to="/moreinfo" />
		//} else {
	//	return <Redirect to="/timeline" />
	//	}
	}

	

	const onFormSubmit = event => {
		event.preventDefault()	
		KeycloakService.doLogin()
		//props.history.push("/timeline")
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
