import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import PostPopup from "../CreateEditPost/PostPopup"
import { useSelector } from "react-redux";

const GroupDetail = () => {

	const { token, id } = useSelector(state => state.userReducer)
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


	const [searchTerm, setSearchTerm] = useState("")
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}


	const [isBasicView, setIsBasicView] = useState(true)
	
	useEffect(() => {
		TimelineAPI.getGroupPosts(groupid, token)
			.then(allPost => {
				console.log("ALL POSTS?", allPost)
				if (allPost != null) {
					setPosts({
						posts: allPost,
						fetching: false
					})
				}
			})

			//should get GroupEvents! FIX THIS
			TimelineAPI.getGroupEvents(token)
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
				<h1>Group Timeline</h1>
				<input type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
				<PostPopup postContext={postContext}/>
				<button className="btn btn-outline-danger"onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
				{isBasicView ? 
				(<TimelinePosts posts={posts.posts} searchTerm={searchTerm}/>) :
				<CalendarComponent events={events.events} />}
		</Container>

	)
   
}
export default withKeycloak(GroupDetail)