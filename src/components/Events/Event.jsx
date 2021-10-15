import { Card, Row, Col } from "react-bootstrap"


const Event = ({events}) => {

    const EventCard = ({event}) => {
        return (
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title>{event.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>{event.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        )
    }

    return (
        events.map(event => {
            return (
                <EventCard key={event.eventId} event={event} />
            )
        })
    )
}

export default Event