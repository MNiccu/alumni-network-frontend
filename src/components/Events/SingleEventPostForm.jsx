import { useEffect, useState, useCallback } from "react"
import { useSelector } from "react-redux";
import { Card, Row, Col, FloatingLabel, Form, Button, InputGroup } from "react-bootstrap"
import "./events.css"
import { EventsAPI } from "./EventsAPI"


const SingleEventPostForm = ({event, topics}) => {

    const { name, username } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)
    

    useEffect(() => {
        
    })

    return (
        <Card className="mt-4">
                <Card.Header>
                    <Row>
                        <div className="col-1 mb-1" id="post-prof-img">
                            <img src={`https://avatars.dicebear.com/api/avataaars/userid${username}.svg`} alt="Users profile" className="rounded-circle img-sm align-middle text-center prof-pic" />
                        </div>
                        <div className="col-4">
                            <p className="mt-2">{name}</p>
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
                                        {topics.map(topic => <option key={topic.topicId} value={topic.name}>{topic.name}</option>)}
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