import { useState} from "react"
import { useSelector } from "react-redux";
import withKeycloak from "../../hoc/WithKeycloak"
import { LoginAPI } from "./LoginAPI";

//Updates users additional info which is not provided in authorization process
const MoreInfo = (props) => {

	const { token } = useSelector(state => state.tokenReducer)
	const { id } = useSelector(state => state.userReducer)
	
	const [fields, setFields] = useState({
		bio: "",
		status: "",
		funfact: ""
	})

	//Updates additional info and posts them to database
	const onFormSubmit = event => {
		event.preventDefault()
		const updateUser = {
			id: id,
			bio: fields.bio,
			status: fields.status,
			funFact: fields.funfact
		}
		LoginAPI.updateUser(token, id, updateUser)
			.then(response => {
				if(response !== null){
					props.history.push("/feed")
				}
				else
					props.history.push("/feed")
			})
	}

	const handleSkip = () => {
		props.history.push("/feed")
	}

	const handleInputChange = event => {
		event.preventDefault()
		setFields ({
			...fields,
			[event.target.id]: event.target.value

		})
	}



	return (
		<div className="container">
			<div className="card my-5 w-50 mx-auto">
				<div className="card-body">
					<h3>Complete your profile</h3>
					<form className="my-4" onSubmit={ onFormSubmit }>
						<div className="mb-4">
							<label htmlFor="status" className="form-label">Where you are working/studying currently? *</label>
							<input type="text" onChange={handleInputChange} className="form-control" id="status" required placeholder="Your current status"></input>
						</div>
						<div className="mb-4">
							<label htmlFor="bio" className="form-label">Tell us more about you and write your bio *</label>
							<textarea onChange={handleInputChange} className="form-control" id="bio" rows="2" required placeholder="Your bio"></textarea>
						</div>
						<div className="mb-4">
							<label htmlFor="funfact" className="form-label">Add one fun fact about you to your friends and followers *</label>
							<input onChange={handleInputChange} type="text" className="form-control" id="funfact" required placeholder="Some fun fact about you"></input>
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