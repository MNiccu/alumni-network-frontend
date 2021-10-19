import { useEffect, useState } from "react"
import { Container, CardGroup, Row, Col } from "react-bootstrap"
import Event from "./Event"
import { EventsAPI } from "./EventsAPI"
import "./events.css"

const Events = () => {

    const [eventDetail, setEventDetail] = useState({
        details: [],
        loading: true
    })

    useEffect(() => {
        EventsAPI.getEvents()
            .then(response => {
                if(response.length){
                    setEventDetail({
                        details: response,
                        loading: false
                    })
                }
            })
    })

    return (
        <Container>
            <h1>Here you can see all active events</h1>
            <Row xs={1} md={2} lg={3} >
                <Event events={eventDetail.details} />
            </Row>
        </Container>
    )
}

export default Events