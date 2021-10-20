import { useEffect, useState } from "react"
import { Container} from "react-bootstrap"
import { useParams } from "react-router"
import { EventsAPI } from "./EventsAPI"
import "./events.css"
import SingleEventCardTopInfo from "./SingleEventCardTopInfo"
import SingleEventPostForm from "./SingleEventPostForm"
import SingleEventTimeline from "./SingleEventTimeline"


const SingleEvent = () => {

    const { id } = useParams()

    const [event, setEvent] = useState({
        eventDetails: [],
        loading: true
    })

    useEffect(() => {
        EventsAPI.getEventById(id)
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