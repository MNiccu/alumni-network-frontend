import { Stack, Container} from "react-bootstrap"
import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import PostPopup from "../CreateEditPost/PostPopup"
import { useSelector } from "react-redux";
import GroupTimeLine from "./GroupTimeLine"
import { GroupListAPI } from "../GroupList/GroupListApi"

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


	const [searchTerm, setSearchTerm] = useState("")
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}


	const [isBasicView, setIsBasicView] = useState(true)
	
	useEffect(() => {
		GroupListAPI.getGroupPosts(token, groupid)
			.then(allPosts => {
				if(allPosts !== null){
					setPosts({
						posts: allPosts,
						fetching: false
					})
				}
			})

			GroupListAPI.getGroupEvents(token, groupid)
				.then(allEvents => {
					if(allEvents !== null){
						setEvents({
							events: allEvents,
							fetching: false
						})
					}
				})

	}, [])

	return (
		<Container>
				<div className="row">
					<div className="col-10">
						<h2 className="mt-3">Group Timeline</h2>
					</div>
					<div className="col-2">
						<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
					</div>
				</div>
				<button className="btn btn-outline-danger"onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
				{isBasicView ? 
				<GroupTimeLine posts={posts.posts} groupId={groupid} /> :
				<CalendarComponent events={events.events} />}
		</Container>

	)
   
}
export default withKeycloak(GroupDetail)