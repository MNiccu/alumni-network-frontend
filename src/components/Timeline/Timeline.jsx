import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { TimelineAPI } from "./TimelineAPI"
import { Container, Stack } from "react-bootstrap"
import TimelinePosts from "./TimelinePosts"
import KeycloakService from "../../services/KeycloakService"
import withKeycloak from "../../hoc/WithKeycloak"
import PostPopup from "../CreateEditPost/PostPopup"
import CreateEditPost from "../CreateEditPost/CreateEditPost"
import { set } from "date-fns"

const Timeline = () => {

	const { token } = useSelector(state => state.userReducer)
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
		TimelineAPI.getPost(token)
			.then(allPost => {
				if (allPost.length) {
					navigator.clipboard.writeText(KeycloakService.getToken());
					setPosts({
						posts: allPost,
						fetching: false
					})
					console.log(posts.posts[posts.posts.length-1])
				}
			})
        }
	}, [])
    
	return (

		<Container>

            <Stack direction="horizontal" gap={3}> 
				<h2 className="mt-3">{ username }'s Timeline</h2>
				<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
			</Stack>
			
			{/* <main>
		 	<h1> { username }'s Timeline</h1>	
			</main>
			<input type="text" placeholder="search..." onChange={changeSearchTerm} ></input> */}
			<PostPopup postContext={postContext}/>
						
			<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>

			
		</Container>

		

	)
}
export default withKeycloak(Timeline)