import { Container} from "react-bootstrap"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import { useSelector } from "react-redux";
import { GroupListAPI } from "../GroupList/GroupListApi"
import FeedItem from "../Feed/FeedItem"


//Returns group timeline view
const GroupDetail = () => {

	const { token } = useSelector(state => state.tokenReducer)
	const { id } = useSelector(state => state.userReducer)

    const {groupid} = useParams()

    const [userReply, setUsersReply] = useState("")
	const [posts, setPosts] = useState([])
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})

	//Handles search in group comments
	const [searchTerm, setSearchTerm] = useState("")
	const [isBasicView, setIsBasicView] = useState(true)
	
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)

	}

	const handleReply = event => {
        event.preventDefault()
        const newReply = {
            text: userReply,
            targetGroup: groupid,
            members: [
                {
                    id: id
                }
            ]
        }
        GroupListAPI.sendPost(token, newReply)
            .then(response => {
                setPosts(prevState => ([response,...prevState]))
            })
    }


	
	//Gets groups posts and events from database
	useEffect(() => {
		GroupListAPI.getGroupPosts(token, groupid)
			.then(allPosts => {
				if(allPosts !== null){
					setPosts(allPosts)
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

	const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }


	return (
		<Container>
				<div className="row w-75 mx-auto">
					<div className="col-10">
						<h2 className="mt-3">Group Timeline</h2>
					</div>
					<div className="col-2">
						<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
					</div>
				</div>
				<div className="row w-75 mx-auto mt-5">
					<div className="col">
						<button className="btn btn-outline-danger"onClick={() => setIsBasicView(!isBasicView)}>Change view</button>
					</div>
				</div>
				<div>

				</div>
				{isBasicView ? 
					<div className="container">
					<div className="card my-4 w-75 mx-auto">
						<div className="card-header">
							<form onSubmit={handleReply}>
								<div className="form-group">
									<label htmlFor="replyToUser">Send message to feed</label>
									<textarea onChange={handleTextArea} className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
								</div>
								<button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
							</form>
						</div>
					</div>
					<ul className="list-group mb-2 w-75 mx-auto">
						{posts.map(listItem => <FeedItem key={listItem.id} post={listItem} />)}
					</ul>
				</div> 
				: <CalendarComponent events={events.events} />} 
		</Container>

	)
   
}
export default withKeycloak(GroupDetail)