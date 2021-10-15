import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"


const Login = (props) => {

	

	const onFormSubmit = event => {
		event.preventDefault()	
		
		props.history.push("/timeline")
	}

	return (
		<div className="background">
			<form className="container" onSubmit={ onFormSubmit }>
				<h2>More info required</h2>
			
				<div className="form-group">
					<label>Bio</label>
					<input id="username" type="text" placeholder="Enter username"></input>		
				</div>	

				<div className="form-group">
					<label>Status</label>
					<input id="password" type="text" placeholder="Enter password"></input>
				</div>

                <div className="form-group">
					<label>Fun Fact</label>
					<input id="password" type="text" placeholder="Enter password"></input>
				</div>
			
				<button type="submit" className="btn btn-primary btn-lg" >Send</button>
				
			</form>
			
		</div>
	)
}
export default Login