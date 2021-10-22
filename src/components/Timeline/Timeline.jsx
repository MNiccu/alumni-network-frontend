 import { useEffect, useState } from "react"
import { TimelineAPI } from "./TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "./TimelinePosts"
import KeycloakService from "../../services/KeycloakService"
import withKeycloak from "../../hoc/WithKeycloak"
import PostPopup from "../CreateEditPost/PostPopup"
import CreateEditPost from "../CreateEditPost/CreateEditPost"

const Timeline = () => {


	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})

	 const username = KeycloakService.getUsername()
	


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
			
			<main>
		 	<h1> { username }'s Timeline</h1>	
			</main>

			<PostPopup/>
						
			<TimelinePosts posts={posts.posts}/>

			
		</Container>

		 

	)
}
export default withKeycloak(Timeline)