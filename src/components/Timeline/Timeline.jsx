import withKeycloak from "../../hoc/WithKeycloak"
import KeycloakService from "../../services/KeycloakService"

const Timeline = () => {

	const username = KeycloakService.getUsername()

	return (
		<main>
			<h1> { username }</h1>
			<p>Timeline page</p>
		</main>
	)
}
export default withKeycloak(Timeline)
