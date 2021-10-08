import withKeycloak from "../../hoc/WithKeycloak"
import KeycloakService from "../../services/KeycloakService"

const Timeline = () => {

	const username = KeycloakService.getUsername()
	const handleLoginClick = () => {
		KeycloakService.doLogout()
	}

	return (
		<main>
			<h1> { username }</h1>
			<p>Timeline page</p>
			<button onClick={ handleLoginClick }>Logout with Keycloak</button>
		</main>
	)
}
export default withKeycloak(Timeline)
