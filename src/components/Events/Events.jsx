import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import Event from "./Event"
import { EventsAPI } from "./EventsAPI"
import "./events.css"

const Events = () => {

    const [eventDetail, setEventDetail] = useState({
        details: [],
        loading: true
    })

    const { token } = useSelector(state => state.tokenReducer)

    useEffect(() => {
        EventsAPI.getEvents(token)
            .then(response => {
                
                if(response.length){
                    setEventDetail({
                        details: response,
                        loading: false
                    })
                }
            })

        return () => {}
    }, [])

    return (
        <Container>
            <h2 className="mt-3">Upcoming events</h2>
            <Row xs={1} md={2} lg={3} >
                <Event events={eventDetail.details} />
            </Row>
        </Container>
    )
}

export default Events