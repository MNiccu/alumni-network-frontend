import { Modal, Row, Col, Stack, Container , Button} from "react-bootstrap"
import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import PostPopup from "../CreateEditPost/PostPopup"
import { useSelector } from "react-redux";

//Returns group timeline view
const GroupDetail = () => {

	const { token } = useSelector(state => state.tokenReducer)
	const { id } = useSelector(state => state.userReducer)
    const {groupid} = useParams()
	const postContext = {context:"group", id: 1}
	
	const [posts, setPosts] = useState({
		posts: [],
		fetching: true
	})
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})

	//Handles search in group comments
	const [searchTerm, setSearchTerm] = useState("")
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}


	const [isBasicView, setIsBasicView] = useState(true)
	
	//Gets groups posts and events from database
	useEffect(() => {
		TimelineAPI.getGroupPosts(groupid, token)
			.then(allPost => {
				if (allPost != null) {
					setPosts({
						posts: allPost,
						fetching: false
					})
				}
			})

			TimelineAPI.getGroupEvents(token, id)
			.then(allEvent => {
				
				if (allEvent !== null) {
					setEvents({
						events: allEvent,
						fetching: false
					})
				}
			
			})
	}, [])

	return (
		<Container>
			<Stack direction="horizontal" gap={3}> 
				<h2 className="mt-3">Group Timeline</h2>
				<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
			</Stack>
				<PostPopup postContext={postContext}/>
				<button className="btn btn-outline-danger"onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
				{isBasicView ? 
				(<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>) :
				<CalendarComponent events={events.events} />}
		</Container>

	)
   
}
export default withKeycloak(GroupDetail)