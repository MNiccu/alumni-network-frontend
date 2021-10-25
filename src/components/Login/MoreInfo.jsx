import { Form } from "react-bootstrap"
import { Redirect } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import KeycloakService from "../../services/KeycloakService"
import { useEffect, useState} from "react"
import { LoginAPI} from "./LoginAPI"

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
		// LoginApi.getUser(username)
		// .then( response => { LoginApi.patchUser(response.id, fields.bio, fields.statustext, fields.funfact)		
		// })
		props.history.push("/timeline")
	}

	const handleSkip = () => {
		// PITÄÄ TÄYDENTÄÄ TÄTÄ MYÖHEMMIN
		props.history.push("/timeline")
	}

	const handleInputChange = event => {
		setFields ({
			...fields,
			[event.target.id]: event.target.value

		})
	}



	return (

		<div className="container">
			<div className="card mt-5 w-50 mx-auto">
				<div className="card-body">
					<h3>Complete your profile</h3>
					<form className="my-4" onSubmit={ onFormSubmit }>
						<div className="mb-4">
							{/*EI TOIMI VIELÄ*/}
							<label htmlFor="inputProfilePic" className="form-label">Choose a profile picture for yourself</label>
							<input type="file" id="inputProfilePic" className="form-control"></input>
						</div>
						<div className="mb-4">
							<label htmlFor="inputStatus" className="form-label">Where you are working/studying currently?</label>
							<input type="text" onChange={handleInputChange} value={fields.statustext} className="form-control" id="inputStatus" placeholder="Your current status"></input>
						</div>
						<div className="mb-4">
							<label htmlFor="inputBio" className="form-label">Tell us more about you and write your bio</label>
							<textarea onChange={handleInputChange} value={fields.bio} className="form-control" id="inputBio" rows="2" placeholder="Your bio"></textarea>
						</div>
						<div className="mb-4">
							<label htmlFor="inputFunFact" className="form-label">Add one fun fact about you to your friends and followers</label>
							<input onChange={handleInputChange} value={fields.funfact} type="text" className="form-control" id="inputFunFact" placeholder="Some fun fact about you"></input>
						</div>
						<div className="float-end">
							<span type="button" onClick={ handleSkip } className="me-2">skip</span>
							<button type="submit" className="btn btn-primary">Complete your profile</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	)
}
export default withKeycloak(MoreInfo)