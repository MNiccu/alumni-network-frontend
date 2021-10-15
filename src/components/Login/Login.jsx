import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"



const Login = (props) => {

	//const name & pw

	// if (KeycloakService.isLoggedIn()) {
	// 	return <Redirect to="/timeline" />
	// }


	const onFormSubmit = event => {
		event.preventDefault()	
		//keycloak here	
		props.history.push("/timeline")
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
