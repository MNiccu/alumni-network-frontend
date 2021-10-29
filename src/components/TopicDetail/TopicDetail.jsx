import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container, Stack } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import PostPopup from "../CreateEditPost/PostPopup"
import { TopicListApi } from "../TopicList/TopicListApi";

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
	
	const { token } = useSelector(state => state.tokenReducer)

	const [isBasicView, setIsBasicView] = useState(true)
	

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
			
			TimelineAPI.getTopicEvents(id, token)
			.then(allEvent => {
				if (allEvent.length) {
					setEvents({
						events: allEvent,
						fetching: false
					})

			
				}
			})
	}, [])

	// const joinGroup = () => {
    //     //Token needs to be passed too
    //     //KeycloakService.getUsername()
    //     console.log(token);
    //     TopicListApi.getTopicToPatch(topic.topicId,token)

    //}
    
	return (
		<Container>
			<Stack direction="horizontal" gap={3}> 
				<h2 className="mt-3">Topic Timeline</h2>
				<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
			</Stack>
			<PostPopup postContext={postContext}/>
			<button className="btn btn-outline-danger" onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
			{isBasicView ? 
			(<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>) :
			<CalendarComponent events={events.events} />}
		</Container>
	)
}
export default withKeycloak(TopicDetail)