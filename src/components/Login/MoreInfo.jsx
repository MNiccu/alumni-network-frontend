import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"

const MoreInfo = (props) => {

	

	const onFormSubmit = event => {
		event.preventDefault()	
		//post to user
		props.history.push("/timeline")
	}

	return (
		<div className="background">
			<form className="container" onSubmit={ onFormSubmit }>
				<h2>More info required</h2>
			
				<div className="form-group">
					<label>Bio</label>
					<input id="bio" type="text" placeholder="your bio"></input>		
				</div>	

				<div className="form-group">
					<label>Status</label>
					<input id="status" type="text" placeholder="your status"></input>
				</div>

                <div className="form-group">
					<label>Fun Fact</label>
					<input id="funfact" type="text" placeholder="tell us a fun fact about you"></input>
				</div>
			
				<button type="submit" className="btn btn-primary btn-lg" >Send</button>
                				
			</form>
			
		</div>
	)
}
export default withKeycloak(MoreInfo)