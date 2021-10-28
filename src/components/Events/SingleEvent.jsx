import { useEffect, useState } from "react"
import { Container} from "react-bootstrap"
import { useParams } from "react-router-dom"
import { EventsAPI } from "./EventsAPI"
import "./events.css"
import SingleEventCardTopInfo from "./SingleEventCardTopInfo"
import SingleEventPostForm from "./SingleEventPostForm"
import SingleEventTimeline from "./SingleEventTimeline"
import { useSelector } from "react-redux";


const SingleEvent = () => {

    const { id } = useParams()

    const [event, setEvent] = useState({
        eventDetails: [],
        loading: true
    })

    const [topics, setTopics] = useState({
        topics: [],
        loading: true
    })




    const { token } = useSelector(state => state.userReducer)

    useEffect(() => {
        
        
            EventsAPI.getAllTopics(token)
            .then(response => {
                console.log("GetAllTopics",response)
                if (response != null && response) {
                    setTopics({
                        topics: response,
                        loading: false
                    })
                }
            })
        
        EventsAPI.getEventById(id, token)
            .then(response => {
                console.log(id, response)
                if (response !== null) {
                    setEvent({
                        eventDetails: response,
                        loading: false
                    })
                   
                }

            })
    }, [])

  

    return (
        <Container>
            <SingleEventCardTopInfo event={event.eventDetails} topics={topics.topics} />
            <SingleEventPostForm event={event.eventDetails} topics={topics.topics} />
            <SingleEventTimeline event={event.eventDetails} />
        </Container>
    )
}

export default SingleEvent