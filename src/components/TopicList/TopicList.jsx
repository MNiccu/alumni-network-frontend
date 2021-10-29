import { useSelector } from "react-redux";
import { TopicListApi } from "./TopicListApi"
import { useState, useEffect } from "react"
import React from "react"
import { Container, Stack, Button, Form, Modal } from "react-bootstrap"
import TopicItem from "../TopicDetail/TopicItem"
import withKeycloak from "../../hoc/WithKeycloak"
import NewTopic from "./NewTopic";

const TopicList = () => {

    const { token } = useSelector(state => state.tokenReducer)
    const [modalShow, setModalShow] = useState(false)
    
    let topicListArray = []
 

    const [topics, setTopics] = useState([])

    const [topicData, setTopicData] = useState( {
        name: " ",
        description: " "
    })

    
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
            <NewTopic/>
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
                <CreateNewTopic />
        {topics && topics.map(topic => {
          return (
            <TopicItem key={topic.topicId} topic={topic}/> 
          )
        })}
            </Container>
            
	)
}
export default withKeycloak(TopicList)