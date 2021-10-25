import { useEffect, useState } from "react"
import { Card, Row, Col, FloatingLabel, Form, Button, InputGroup } from "react-bootstrap"
import "./events.css"
import { EventsAPI } from "./EventsAPI"


const SingleEventPostForm = ({event}) => {

    const [topics, setTopics] = useState({
        topics: [],
        loading: true
    })

    useEffect(() => {
        EventsAPI.getAllTopics()
            .then(response => {
                if(response.length) {
                    setTopics({
                        topics: response,
                        loading: false
                    })
                }
            })
    })

    return (
        <Card className="mt-4">
                <Card.Header>
                    <Row>
                        <div className="col-1 mb-1" id="post-prof-img">
                            <img src={`https://avatars.dicebear.com/api/avataaars/userid${event.eventId}.svg`} alt="Users profile" className="rounded-circle img-sm align-middle text-center prof-pic mt-2" />
                        </div>
                        <div className="col-4">
                            <p className="mt-2">Pönttö Johnson</p>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <FloatingLabel controlId="postTimeline" label="What's on your mind">
                                    <Form.Control
                                    id="postTimeline"
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    required/>
                                </FloatingLabel>
                                <InputGroup className="mt-2">
                                    <InputGroup.Text>Select topic..</InputGroup.Text>
                                    <Form.Select size="sm">
                                        {topics.topics.map(topic => <option key={topic.topicId} value={topic.name}>{topic.name}</option>)}
                                    </Form.Select>
                                </InputGroup>
                                <Button variant="primary" type="submit" className="float-end mt-2">Post to event</Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Header>
            </Card>
    )
}

export default SingleEventPostForm