import { Modal, Row, Col, Stack, Container , Button, Form} from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { GroupListAPI } from "../GroupList/GroupListApi"
import KeycloakService from "../../services/KeycloakService"
import { useSelector } from "react-redux";


const NewGroup = () => {

    const { token } = useSelector(state => state.userReducer)

    
    const history = useHistory()
    //const redirectFunction = useCallback(() => history.push('group/'+group.id), [history])

    const createGroup = () => {
        GroupListAPI.postNewGroup(token)
    }
    
    useEffect(() => {
       
    },[])

    return (
        <Container>
        <div className="card my-5">
            <div className="card-header">
                <div className="row">
                    
                    <div className="col-sm-10">
                        <h5 className="card-title">Something. </h5>
                                                
                    </div>
                </div>
            </div>
            <div className="card-body">
            
            <Form>
                        <Form.Group className="mb-3" controlId="formSettingsName">
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" size="sm" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsStatus">
                            <Form.Label className="m-2">Group privacy </Form.Label>
                            <Form.Check
                                    inline
                                    label="public "
                                    name="group1"
                                    type="radio"
                                />
                                <Form.Check
                                    inline
                                    label="private"
                                    name="group1"
                                    type="radio"
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsn" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Tell us more about yourself" size="sm"></Form.Control>
                        </Form.Group>
                        <Form.Group className="float-end">
                            <Button variant="danger" size="sm" className="">Cancel</Button>&nbsp;
                            <Button variant="primary" size="sm" className="">Save Changes</Button>
                        </Form.Group>
                   </Form>
            <Button className="m-1 ms-auto" variant="outline-danger" onClick={createGroup}>Create</Button>
            
            </div>
        </div>
        </Container>
        )

}

export default NewGroup