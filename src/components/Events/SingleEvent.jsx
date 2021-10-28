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

    const { token } = useSelector(state => state.userReducer)

    useEffect(() => {
        EventsAPI.getEventById(id, token)
            .then(response => {
                if(response.length) {
                    setEvent({
                        eventDetails: response[0],
                        loading: false
                    })
                }
            })

        return () => {}
    }, [])


    return (
        <Container>
            <SingleEventCardTopInfo event={event.eventDetails} />
            <SingleEventPostForm event={event.eventDetails} />
            <SingleEventTimeline event={event.eventDetails} />
        </Container>
    )
}

export default SingleEvent