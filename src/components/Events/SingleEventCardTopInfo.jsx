import { Container, Card, Row, Col, Modal } from "react-bootstrap"
import { useState } from "react"
import "./events.css"
import TopInfoModal from "./TopInfoModal"


const SingleEventCardTopInfo = ({event, topics}) => {

    const [visible, setVisible] = useState(false)
    console.log("SingleVentCardTopInfo",topics, event)
    const start = new Date(event.startTime)
    const end = new Date(event.endTime)

    const ListOfAttendees = () => {
        return (
            <Container>
                <Modal show={visible} onHide={() => setVisible(false)} centered>
                    <Modal.Title className="align-middle text-center">List of attending people</Modal.Title>
                    <Modal.Body>
                        <TopInfoModal users={event.attendingUsers} />
                    </Modal.Body>
                </Modal>
            </Container>
        )
    } 
    
    if(!topics){
        return
    }
    
    const eventTargetTopic = topics.find(topic => topic.id === event.targetTopicId);

    return (
        <>
        <Card border="dark" className="mt-5">
                <div className="fill">
                    <img src="" alt="banner" className="mx-auto d-block" />

                </div>
            <Card.Header>
                <Row>
                    <Col>
                        <Card.Title><h3 className="ms-4">{event.name}</h3></Card.Title>
                    </Col>
                </Row>
                <Row className="mt-3">
                     <Col>
                        <span className="material-icons align-middle text-center me-3">schedule</span>
                        <span className="align-middle text-center me-3">Event starting: {start.toLocaleString('en-GB', { timeZone: 'UTC' })}</span>
                        <span className="me-3">-</span>
                        <span className="align-middle text-center">Event ending: {end.toLocaleString('en-GB', { timeZone: 'UTC' })}</span>
                    </Col> 
                </Row>
                <Row className="mt-2">
                    <Col>
                        <span className="material-icons align-middle text-center me-3">groups</span>
                        <span className="align-middle text-center"><button className="link-button attending" onClick={() => setVisible(true)} >{event.guestCount} attending this event</button></span>
                    </Col>
                </Row>
               
                <Row className="mt-2">
                    <Col>
                    <span className="material-icons align-middle text-center me-3">star_border</span>
                    <span className="align-middle text-center">Topic of this event is {eventTargetTopic && eventTargetTopic.name}</span>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <span className="material-icons align-middle text-center me-3">public</span>
                        { event.allowGuests && <span className="align-middle text-center">This event is public - open for everybody</span>}
                        { !event.allowGuests && <span className="align-middle text-center">This is a closed event - only for invited members or group members</span>}
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Text className="h5">Details about this event:</Card.Text>
                        <Card.Text>{event.description}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
            <div>
                <ListOfAttendees />
            </div>
        </>
    )
}

export default SingleEventCardTopInfo