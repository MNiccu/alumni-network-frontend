import { useSelector } from "react-redux";
import { useState, useEffect } from "react"
import React from "react"
import { Container, Stack, Button, Form, Modal } from "react-bootstrap"
import TopicItem from "../TopicDetail/TopicItem"
import withKeycloak from "../../hoc/WithKeycloak"
import { useHistory } from "react-router-dom"
import { DirectMessagesAPI } from "./DirectMessagesAPI";

//Returns a form to start new direct message
const NewDirectMessage = () =>{

    const { token } = useSelector(state => state.tokenReducer)

    const [directMessages, setDirectMessages] = useState([])

    const [directMessageData, setDirectMessageData] = useState( {
        text: " ",
        targetUser: " "
    })

    const [allUsers, setAllUsers] = useState({
        userList: [],
        selectedUser: "1",
        fetching: true
    })

    const handleInputChange = event => {
        console.log(event.target.value)
        event.preventDefault()
		setDirectMessageData (
			{
			...directMessageData,
            [event.target.name]: event.target.value,
			
			}
		)
	}

    const history = useHistory()

    //Posts new DM to database
    const createDirectMessage = () => {
        DirectMessagesAPI.postNewDirectMessage(directMessageData, token)
    }

    //Handles changes in input
    const handleChange = (event) => {
        setAllUsers({
            ...allUsers,
            selectedUser: +event.target.value
        })
      }

    //Gets all users
    useEffect(() => {
        DirectMessagesAPI.getUsers(token)
            .then(response => {
                if(response !== null){
                    setAllUsers({
                        ...allUsers,
                        userList: response,
                        fetching: false
                    })
                }
            })
    }, [])

    return (
            <div className="card rounded">
                <div className="card-header">
                    <div className="row">
                        
                        <div className="col-sm-10">
                            <h5 className="card-title m-2">Start new conversation</h5>
                                                    
                        </div>
                    </div>
                </div>
                <div className="card-body">
                <Form>
                    <Form.Group className="mb-3" controlId="formSettingsName">
                        <Form.Label>User</Form.Label>
                        <Form.Control onChange={ handleInputChange} name="name" value={directMessageData.targetUser} type="text" rows={2}></Form.Control>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSettingsn" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={ handleInputChange } name="description" value={directMessageData.text} as="textarea" rows={2}></Form.Control>
                    </Form.Group>
                </Form>
                <Button className="m-1 ms-auto" variant="outline-danger" onClick={createDirectMessage}>Create</Button>
                </div>
            </div>
            )
}
export default NewDirectMessage