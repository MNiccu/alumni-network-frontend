import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { EventsAPI } from "./EventsAPI"
import "./events.css"
import TimeLinePosts from "../Timeline/TimelinePosts"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

const SingleEventTimeline = ({event}) => {

    const { name, username } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useParams()


    const [posts, setPosts] = useState({
        posts: [],
        loading: true
    })

    //Gets all posts for particular event
    useEffect(() => {
        EventsAPI.getEventPosts(token, id)
            .then(response => {
                if (response != null) {
                if(response.length){
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            }
            })
    }, [])

    return (
        <Card className="mt-4"  >
            <Card.Body>
                <TimeLinePosts posts={posts.posts} searchTerm={""} />
            </Card.Body>
        </Card>
    )
}

export default SingleEventTimeline