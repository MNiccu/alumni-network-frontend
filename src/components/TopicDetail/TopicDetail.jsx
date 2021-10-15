import { useEffect, useState } from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router"
import withKeycloak from "../../hoc/WithKeycloak"

const TopicDetail = () => {

    const {id} = useParams()

	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})

	useEffect(() => {
		TimelineAPI.getTopicPosts(id)
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
			<h1>Welcome to timeline of Topic {id}</h1>
			<TimelinePosts posts={posts.posts}/>
		</Container>
	)
}
export default withKeycloak(TopicDetail)