import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { EventsAPI } from "./EventsAPI"
import "./events.css"
import TimeLinePosts from "../Timeline/TimelinePosts"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import FeedItem from "../Feed/FeedItem"


const SingleEventTimeline = ({event, eventId}) => {

    const { id } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)


    const [posts, setPosts] = useState([])
    const [userReply, setUsersReply] = useState("")


    const handleReply = event => {
        event.preventDefault()
        const newReply = {
            text: userReply,
            targetEvent: eventId,
            members: [
                {
                    id: id
                }
            ]
        }
        EventsAPI.sendPost(token, newReply)
            .then(response => {
                setPosts(prevState => ([response,...prevState]))
            })
    }

    //Gets all posts for particular event
    useEffect(() => {
        EventsAPI.getEventPosts(token, eventId)
            .then(response => {
                if (response != null) {
                setPosts(response)
            }
            })
    }, [])

    const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }

    return (
        <div>
            <div className="card my-4">
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

            <ul className="list-group mb-2">
                {posts.map(listItem => <FeedItem key={listItem.id} post={listItem} />)}
            </ul>
        </div>
    )
}

export default SingleEventTimeline