 import { useEffect, useState } from "react"
import { TimelineAPI } from "./TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "./TimelinePosts"


const Timeline = () => {

	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})

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
			<TimelinePosts posts={posts.posts}/>
		</Container>
	)
}
export default Timeline