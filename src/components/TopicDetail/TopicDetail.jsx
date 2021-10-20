import { useEffect, useState } from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"

const TopicDetail = () => {

    const {id} = useParams()

	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})

	const [isBasicView, setIsBasicView] = useState(true)

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
			
			
			TimelineAPI.getTopicEvents(id)
			.then(allEvent => {
				if (allEvent.length) {
					setEvents({
						events: allEvent,
						fetching: false
					})

			
				}
			})
	}, [])
    
	return (
		<Container>
			<h1>Welcome to timeline of Topic {id}</h1>
			<button onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
			{isBasicView ? 
			(<TimelinePosts posts={posts.posts}/>) :
			<CalendarComponent events={events.events} />}
		</Container>
	)
}
export default withKeycloak(TopicDetail)