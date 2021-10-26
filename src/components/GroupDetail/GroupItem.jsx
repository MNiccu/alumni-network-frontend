import { Modal, Row, Col, Stack, Container , Button} from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { GroupListAPI } from "../GroupList/GroupListApi"
import KeycloakService from "../../services/KeycloakService"
import { useSelector } from "react-redux";


const GroupItem = ({group}) => {

    const { token } = useSelector(state => state.userReducer)

    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()

    const redirectFunction = useCallback(() => history.push('group/'+group.id), [history])

    const joinGroup = () => {
        //Token needs to be passed too
        GroupListAPI.patchGroupMember(group.id, token)

    }
    
    useEffect(() => {
       
    },[])
    
    // const ShowGroup = () => {
        
    //     return (
    //         <Container>

    //             <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
    //                     {console.log("hello")}
    //                     <Modal.Title  className="mb-4">
    //                         <Row className="mt-2">
                                
    //                             <Col xs={4} sm={6} md={10} lg={8}>
    //                                 <Stack gap={1}>
    //                                     <h5 className=""> {group.name} </h5>
    //                                 </Stack>
    //                             </Col>
    //                         </Row>
    //                     </Modal.Title>
                        
    //                     <Modal.Body> 
    //                         <div className="row">
    //                             <div className="col-sm-10">
    //                                 <form>
    //                                     <div className="form-group">
    //                                     <p className="card-text">{group.descripton}</p>
    //                                     </div>
    //                                     <div className="form-group float-right">
    //                                         <ul>
    //                                             {group.map(member => (
    //                                                 <li key={member.id}> {member} </li>
    //                                              ))}
    //                                         </ul>
    //                                     </div>
    //                                     <div>
    //                                     <button type="button" className="btn btn-outline-secondary" onClick={ joinGroup }>Join</button>
    //                                     <button type="button" className="btn btn-outline-secondary" onClick={ redirectFunction } >To detail</button>
    //                                     </div>
    //                                 </form>
    //                             </div>
    //                         </div>
    //                     </Modal.Body>
    //             </Modal>
    //         </Container>
    //     )
    // }

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
            <Stack direction="horizontal" gap={3}>
            <h6 className="m-1">{group.description}</h6>   
            <Button className="m-1 ms-auto" variant="outline-danger" onClick={ joinGroup}>Join</Button>
            <Button className="m-1" variant="outline-danger" onClick={ redirectFunction }>Details</Button>
            </Stack>
                {/* <ShowGroup /> */}
            </div>
        </div>
        )
 
}

export default GroupItem