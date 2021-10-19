import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import { LoginApi } from "./LoginApi"
import KeycloakService from "../../services/KeycloakService"
import { useEffect, useState} from "react"

const MoreInfo = (props) => {

	let username = KeycloakService.getUsername();
	

	const [fields, setFields] = useState({
		bio: "",
		statustext: "",
		funfact: "",
		fetching: true
	})

	const onFormSubmit = event => {
		event.preventDefault()	

		setFields({
		bio: "",
		statustext: "",
		funfact: "",
		fetching: false})

		LoginApi.patchUser(username, fields.bio, fields.statustext, fields.funfact)		
		
		props.history.push("/timeline")
	}


	const handleInputChange = event => {
		setFields ({
			...fields,
			[event.target.id]: event.target.value

		})
	}



	return (
		<div className="background">
			<form className="container" onSubmit={ onFormSubmit }>
				<h2>More info required </h2>
			
				<div className="form-group">
					<label>Bio</label>
					<input id="bio" onChange={handleInputChange} value={fields.bio} type="text" placeholder="your bio"></input>		
				</div>	

				<div className="form-group">
					<label>Status</label>
					<input id="statustext" onChange={handleInputChange} value={fields.statustext} type="text" placeholder="your status"></input>
				</div>

                <div className="form-group">
					<label>Fun Fact</label>
					<input id="funfact" onChange={handleInputChange} value={fields.funfact} type="text" placeholder="tell us a fun fact about you"></input>
				</div>
			
				<button type="submit" className="btn btn-primary btn-lg" >Send</button>
                				
			</form>
			
		</div>
	)
}
export default withKeycloak(MoreInfo)