import { useDispatch } from "react-redux";
import KeycloakService from "../../services/KeycloakService"
import { useEffect} from "react"
import { LoginAPI } from "./LoginAPI"
import { userinfoSetAction } from "../../store/actions/userAction";
import jwt_decode from "jwt-decode";


const Login = (props) => {

	const dispatch = useDispatch();

	const getUserInfo = async () => {
		try {
			const token =  await KeycloakService.getToken()
			console.log(token)
			console.log(KeycloakService.getUserId())
			console.log(jwt_decode(token))
			LoginAPI.getUser(token, KeycloakService.getUserId())
				.then(response => {
					if(response === null){
						const newUser = {
							id: KeycloakService.getUserId(),
							name: `${jwt_decode(token).given_name} ${jwt_decode(token).family_name}`,
							username: jwt_decode(token).preferred_username
						}
						LoginAPI.postUser(token, newUser)
							.then(response => {
								if(response !== null){
									dispatch(userinfoSetAction(response, token))
									props.history.push("/moreinfo")
								}
								else
									props.history.push("/timeline")
							})
					}
					else {
						dispatch(userinfoSetAction(response, token))
						if(response.bio === null){
							props.history.push("/moreinfo")
						}
						else
							props.history.push("/timeline")
					}
				})
		}catch(e) {
			console.log(e);
		}
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
