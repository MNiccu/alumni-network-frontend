import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { EventsAPI } from "./EventsAPI"
import "./events.css"
import TimeLinePosts from "../Timeline/TimelinePosts"

const SingleEventTimeline = ({event}) => {

    const [posts, setPosts] = useState({
        posts: [],
        loading: true
    })

    useEffect(() => {
        EventsAPI.getEventPosts()
            .then(response => {
                if(response.length){
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            })
    }, [])

    return (
        <Card className="mt-4"  >
            <Card.Body>
                <TimeLinePosts posts={posts.posts} />
            </Card.Body>
        </Card>
    )
}

export default SingleEventTimeline