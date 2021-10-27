import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import PostPopup from "../CreateEditPost/PostPopup"

const TopicDetail = () => {

    const {id} = useParams()
	

	const postContext = {context:"topic", id: 1}

	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})


	const [searchTerm, setSearchTerm] = useState("")
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}


	const [isBasicView, setIsBasicView] = useState(true)
	const { token } = useSelector(state => state.userReducer)

	useEffect(() => {
		TimelineAPI.getTopicPosts(id, token)
			.then(allPost => {
				if (allPost.length) {
					setPosts({
						posts: allPost,
						fetching: false
					})
				}
			})
			
			TimelineAPI.getTopicEvents(token, id)
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
			<input type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
			<PostPopup postContext={postContext}/>
			<button className="btn btn-outline-danger" onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
			{isBasicView ? 
			(<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>) :
			<CalendarComponent events={events.events} />}
		</Container>
	)
}
export default withKeycloak(TopicDetail)