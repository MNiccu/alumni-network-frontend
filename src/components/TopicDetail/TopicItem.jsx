import { Modal, Row, Col, Stack, Container } from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"



const TopicItem = ({topic}) => {
    
    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()
    const redirectFunction = useCallback(() => history.push('topic/'+topic.topicId), [history])
    
    useEffect(() => {
       
    },[])
    
    const ShowTopic = () => {
        
        return (
            <Container>

                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                        {console.log("hello")}
                        <Modal.Title  className="mb-4">
                            <Row className="mt-2">
                                
                                <Col xs={4} sm={6} md={10} lg={8}>
                                    <Stack gap={1}>
                                        <h5 className="">topic: {topic.name} </h5>
                                    </Stack>
                                </Col>
                            </Row>
                        </Modal.Title>
                        
                        <Modal.Body> 
                            <div className="row">
                                <div className="col-sm-10">
                                    <form>
                                        <div className="form-topic">
                                        <p className="card-text">{topic.description}</p>
                                        </div>
                                        <div className="form-topic float-right">
                                            <ul>
                                                {topic.topicMembers.map(member => (
                                                    <li key={member}> {member} </li>
                                                 ))}
                                            </ul>
                                            <button type="button" className="btn btn-outline-secondary" onClick={ redirectFunction } >To detail</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                </Modal>
            </Container>
        )
    }

    return (
        <div className="card my-5">
            <div className="card-header">
                <div className="row">
                    
                    <div className="col-sm-10">
                        <h5 className="card-title">{topic.name} </h5>
                                                
                    </div>
                </div>
            </div>
            <div className="card-body">
            <button type="button" className="btn btn-outline-secondary" onClick={ () => setModalShow(true)} >Slap this button on the title or something</button>
 
                <ShowTopic />
            </div>
        </div>
        )
 
}

export default TopicItem