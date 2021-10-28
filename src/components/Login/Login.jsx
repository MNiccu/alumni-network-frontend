import KeycloakService from "../../services/KeycloakService"
import { useEffect} from "react"
import { LoginAPI } from "./LoginAPI"
import { useSelector } from "react-redux";


const Login = (props) => {

	const { token } = useSelector(state => state.tokenReducer)
	const { id, name, username} = useSelector(state => state.userReducer)


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
									props.history.push("/timeline")
							})
					}
					else {
						if(response.bio === null){
							props.history.push("/moreinfo")
						}
						else
							props.history.push("/timeline")
					}
				})
	}

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
			<div className="card my-5 w-50 mx-auto border-success">
				<div className="card-body text-center align-middle">
					<span className="align-middle me-2">Setting up your alumni network</span>
					<span className="spinner-border text-success align-middle" role="status"></span>
				</div>
			</div>
		</div>
	)
}
export default Login
