import { Modal, Row, Col, Stack, Container } from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"


const GroupItem = ({group}) => {
    
    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()
    const redirectFunction = useCallback(() => history.push('group/'+group.groupId), [history])
    
    useEffect(() => {
       
    },[])
    
    const ShowGroup = () => {
        
        return (
            <Container>

                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                        {console.log("hello")}
                        <Modal.Title  className="mb-4">
                            <Row className="mt-2">
                                
                                <Col xs={4} sm={6} md={10} lg={8}>
                                    <Stack gap={1}>
                                        <h5 className=""> {group.name} </h5>
                                    </Stack>
                                </Col>
                            </Row>
                        </Modal.Title>
                        
                        <Modal.Body> 
                            <div className="row">
                                <div className="col-sm-10">
                                    <form>
                                        <div className="form-group">
                                        <p className="card-text">{group.descripton}</p>
                                        </div>
                                        <div className="form-group float-right">
                                            <ul>
                                                {group.groupMembers.map(member => (
                                                    <li key={member}> {member} </li>
                                                 ))}
                                            </ul>
                                        </div>
                                        <div>
                                        <button type="button" className="btn btn-outline-secondary">Join</button>
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
                        <h5 className="card-title">{group.name} </h5>
                                                
                    </div>
                </div>
            </div>
            <div className="card-body">
            <button type="button" className="btn btn-outline-secondary" onClick={ () => setModalShow(true)} >Show</button>
            <button type="button" className="btn btn-outline-secondary">Join</button>
 
                <ShowGroup />
            </div>
        </div>
        )
 
}

export default GroupItem