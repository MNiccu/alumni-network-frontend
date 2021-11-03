import KeycloakService from "../../services/KeycloakService"
import { useEffect} from "react"
import { useSelector } from "react-redux";
import { LoginAPI } from "./LoginApi"

//Logs user in using Keycloak authorization 
const Login = (props) => {

	const { token } = useSelector(state => state.tokenReducer)
	const { id, name, username} = useSelector(state => state.userReducer)


	//Prompts for additional user info
	const getUserInfo = () => {
		console.log(KeycloakService.getToken())
		LoginAPI.getUser(token, id)
				.then(response => {
					if(response === null){
						const newUser = {
							id,
							name,
							username
						}
						LoginAPI.postUser(token, newUser)
							.then(response => {
								if(response !== null){
									props.history.push("/moreinfo")
								}
								else
									props.history.push("/feed")
							})
					}
					else {
						if(response.bio === null){
							props.history.push("/moreinfo")
						}
						else
							props.history.push("/feed")
					}
				})
	}

	//Uses Keycloak for authorization
	useEffect(() => {
		if(!KeycloakService.isLoggedIn()){
			KeycloakService.doLogin()
		}
		else {
			getUserInfo()
		}
	}, [])


	return (
		<div className="container">
			<div className="card my-5 w-50 mx-auto border-danger">
				<div className="card-body text-center align-middle">
					<span className="align-middle me-2">Setting up your alumni network</span>
					<span className="spinner-border text-danger align-middle" role="status"></span>
				</div>
			</div>
		</div>
	)
}
export default Login
