 import { useEffect, useState } from "react"
import { TimelineAPI } from "./TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "./TimelinePosts"
import KeycloakService from "../../services/KeycloakService"
import withKeycloak from "../../hoc/WithKeycloak"
import PostPopup from "../CreateEditPost/PostPopup"
import CreateEditPost from "../CreateEditPost/CreateEditPost"
import { set } from "date-fns"

const Timeline = () => {

	const postContext = {context:"timeline", id: 1}

	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})

	

	const username = KeycloakService.getUsername()
	

	const [searchTerm, setSearchTerm] = useState("")
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}

	useEffect(() => {
		if(posts.posts.length == 0){
		TimelineAPI.getPost()
			.then(allPost => {
				if (allPost.length) {
					navigator.clipboard.writeText(KeycloakService.getToken());
					setPosts({
						posts: allPost,
						fetching: false
					})
				}
			})
		}
	}, [])
    
	return (

		<Container>
			
			<main>
		 	<h1> { username }'s Timeline</h1>	
			</main>
			<input type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
			<PostPopup postContext={postContext}/>
						
			<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>

			
		</Container>

		 

	)
}
export default withKeycloak(Timeline)