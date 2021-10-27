import { useSelector } from "react-redux";
import { TopicListApi } from "./TopicListApi"
import { useState, useEffect } from "react"
import React from "react"
import { Container, Stack, Button, Form, Modal } from "react-bootstrap"
import TopicItem from "../TopicDetail/TopicItem"
import withKeycloak from "../../hoc/WithKeycloak"

const TopicList = () => {

    const { token } = useSelector(state => state.userReducer)
    const [modalShow, setModalShow] = useState(false)
    
    let topicListArray = []
 

    const [topics, setTopics] = useState([])

    
    useEffect(() => {
        
        listTopics()
       
        
    }, [])

    const listTopics = event => {
        TopicListApi.getTopics(token).then(
            result => {
                console.log("AAAA", result)
                topicListArray = result
                setTopics(topicListArray)
                console.log(topicListArray)
                
            })
    }

    //TODO
    const CreateNewTopic = () => {
        return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} centered>    
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Name" />
            <Form.Text className="text-muted">
             Give a name for your topic
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="email" placeholder="Description" />
            <Form.Text className="text-muted">
             Give a description of your topic
            </Form.Text>
          </Form.Group>
          <Button variant="outline-danger" type="submit">
            Create topic
          </Button>
        </Form>
        </Modal>
        )
    }

    
    //TODO dealing with private topics...
	return (
		
            <Container>
                <Stack direction="horizontal" gap={3}>
                 <h2 className="mt-3">Topics</h2>
                 <Button className="ms-auto mt-3" variant="outline-danger" onClick={ () => setModalShow(true) }>Create new topic</Button>
                </Stack>
        {topics && topics.map(topic => {
          return (
            <TopicItem key={topic.topicId} topic={topic}/> 
          )
        })}
         <CreateNewTopic />
            </Container>
            
	)
}
export default withKeycloak(TopicList)