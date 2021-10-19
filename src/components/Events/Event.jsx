import { Card, Col, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { useCallback } from "react"

const Event = ({events}) => {

    const EventCard = ({event}) => {

        const start = new Date(event.startTime)
        const history = useHistory()
        const handleEventClick = useCallback(() => history.push(`events/${event.eventId}`), [history])
        

        return (
                <Col className="mt-5">
                    <Card className="event mt-1 mb-0 h-100" type="button" onClick={ handleEventClick}>
                            <img className="event-image" src={`https://avatars.dicebear.com/api/avataaars/userid.svg`} alt="user profile" />
                        <Card.Body className="">
                            <span className="material-icons align-middle text-center">schedule</span>
                            <span className="align-middle text-center">{start.toLocaleString('en-GB', { timeZone: 'UTC' })}</span>
                            <Card.Text className="txt">
                                {event.name}
                            </Card.Text>
                            <Card.Text className="">
                                {event.guestCount} is attending to this event
                            </Card.Text>
                            <Button size="sm" variant="outline-danger">
                                Join this event
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
        )
    }

    return (
        events.map(event => {
            return (
                <EventCard key={event.eventId} event={event} className="" />
            )
        })
    )
}

export default Event