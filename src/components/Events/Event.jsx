import { Card, Row, Col, Image } from "react-bootstrap"


const Event = ({events}) => {

    const EventCard = ({event}) => {

        const start = new Date(event.startTime)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


        return (
            <Col>
                <Card className="event my-5 h-100">
                        <img className="event-image" src={`https://avatars.dicebear.com/api/avataaars/userid.svg`} alt="user profile" fluid />
                    <Card.Header className="">
                        <span className="material-icons align-middle text-center">schedule</span>
                        <span className="align-middle text-center">{start.toLocaleString('en-GB', { timeZone: 'UTC' })}</span>
                        <Card.Text className="txt">
                            {event.name}
                        </Card.Text>
                    </Card.Header>
                    
                </Card>
            </Col>

        )
    }

    return (
        events.map(event => {
            return (
                <EventCard key={event.eventId} event={event} className="h-100" />
            )
        })
    )
}

export default Event