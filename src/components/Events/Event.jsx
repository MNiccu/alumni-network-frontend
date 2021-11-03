import { Card, Col, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useCallback } from "react"

const Event = ({events}) => {

    const EventCard = ({event}) => {

        const start = new Date(event.startTime)
        const history = useHistory()
        const handleEventClick = useCallback(() => history.push(`events/${event.id}`), [history])
        
    
        return (
                <Col className="mt-5">
                    <Card className="event mt-1 mb-0 h-100" type="button" onClick={ handleEventClick}>
                            <img className="event-image" src={event.bannerImg} alt="user profile" />
                        <Card.Body className="">
                            <span className="material-icons align-middle text-center">schedule</span>
                            <span className="align-middle text-center">{start.toLocaleString('en-GB', { timeZone: 'UTC' })}</span>
                            <Card.Text className="txt mt-1">
                                {event.name}
                            </Card.Text>
                            <Card.Text className="">
                                {event.description}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button className="mx-auto d-block" size="sm" variant="outline-danger">
                                Join this event
                            </Button>
                            </Card.Footer>
                    </Card>
                </Col>
        )
    }

    //Displays as many event card as there are events for user
    return (
        events.map(event => {
            return (
                <EventCard key={event.id} event={event} className="" />
            )
        })
    )
}

export default Event