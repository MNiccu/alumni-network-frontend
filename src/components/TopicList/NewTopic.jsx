import { useSelector } from "react-redux";
import { TopicListApi } from "./TopicListApi"
import { useState, useEffect } from "react"
import React from "react"
import { Container, Stack, Button, Form, Modal } from "react-bootstrap"
import TopicItem from "../TopicDetail/TopicItem"
import withKeycloak from "../../hoc/WithKeycloak"
import { useHistory } from "react-router-dom"

//Returns a form to make new topic
const NewTopic = () =>{

    const { token } = useSelector(state => state.userReducer)

    const [topics, setTopics] = useState([])

    const [topicData, setTopicData] = useState( {
        name: " ",
        description: " "
    })

    const handleInputChange = event => {
        console.log(event.target.value)
        event.preventDefault()
		setTopicData (
			{
			...topicData,
            [event.target.name]: event.target.value,
			
			}
		)
        console.log(topicData)
	}

    const history = useHistory()

    //Posts new topic to database
    const createTopic = () => {
        TopicListApi.postNewTopic(topicData, token)
    }

    useEffect(() => {
       
    },[])

    return (
            <div className="card rounded">
                <div className="card-header">
                    <div className="row">
                        
                        <div className="col-sm-10">
                            <h5 className="card-title m-2">Create new Topic</h5>
                                                    
                        </div>
                    </div>
                </div>
                <div className="card-body">
                <Form>
                    <Form.Group className="mb-3" controlId="formSettingsName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={ handleInputChange} name="name" value={topicData.name} type="text" rows={2}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSettingsn" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={ handleInputChange } name="description" value={topicData.description} type="text" rows={2}></Form.Control>
                    </Form.Group>
                </Form>
                <Button className="m-1 ms-auto" variant="outline-danger" onClick={createTopic}>Create</Button>
                </div>
            </div>
            )
}
export default NewTopic