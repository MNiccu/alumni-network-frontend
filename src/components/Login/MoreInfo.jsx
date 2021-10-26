import { useDispatch, useSelector } from "react-redux";
import { useState} from "react"
import { LoginAPI } from "./LoginAPI"
import { userinfoSetAction } from "../../store/actions/userAction";
import withKeycloak from "../../hoc/WithKeycloak"

const MoreInfo = (props) => {

	const dispatch = useDispatch();
	
	const { token, id } = useSelector(state => state.userReducer)

	const [fields, setFields] = useState({
		bio: "",
		status: "",
		funfact: ""
	})

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
					dispatch(userinfoSetAction(response, token))
					props.history.push("/timeline")
				}
				else
					props.history.push("/timeline")
			})
	}

	const handleSkip = () => {
		props.history.push("/timeline")
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
							{/*EI TOIMI VIELÄ*/}
							<label htmlFor="inputProfilePic" className="form-label">Choose a profile picture for yourself</label>
							<input type="file" id="inputProfilePic" className="form-control"></input>
						</div>
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