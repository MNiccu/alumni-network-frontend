 import { useEffect, useState } from "react"
import { TimelineAPI } from "./TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "./TimelinePosts"
import KeycloakService from "../../services/KeycloakService"
import withKeycloak from "../../hoc/WithKeycloak"

const Timeline = () => {


	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})

	 const username = KeycloakService.getUsername()
	 const handleLoginClick = () => {
	 	KeycloakService.doLogout()
	 }


	useEffect(() => {
		TimelineAPI.getPost()
			.then(allPost => {
				if (allPost.length) {
					setPosts({
						posts: allPost,
						fetching: false
					})
				}
			})
	}, [])
    
	return (

		<Container>
			<h1>Welcome to timeline</h1>

			<main>
		 	<h1> { username }</h1>
			<p>Timeline page</p>
			<button onClick={ handleLoginClick }>Logout with Keycloak</button>
			</main>

			<TimelinePosts posts={posts.posts}/>

			
		</Container>

		 

	)
}
export default withKeycloak(Timeline)