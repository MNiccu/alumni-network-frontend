import { TopicListApi } from "./TopicListApi"
import { useState, useEffect } from "react"
import React from "react"
import { Container } from "react-bootstrap"
import TopicItem from "../TopicDetail/TopicItem"
import withKeycloak from "../../hoc/WithKeycloak"

const TopicList = () => {

  
    
    let topicListArray = []
 

    const [topics, setTopics] = useState([])

    
    useEffect(() => {
        
        listTopics()
       
        
    }, [])

    const listTopics = event => {
        TopicListApi.getTopics().then(
            result => {
                console.log("AAAA", result)
                topicListArray = result
                setTopics(topicListArray)
                console.log(topicListArray)
                
            })
    }

    
    //TODO dealing with private topics...
	return (
		
            <Container>
                 
        {topics && topics.map(topic => {
          return (
            <TopicItem key={topic.topicId} topic={topic}/> 
          )
        })}
      
            </Container>
            
	)
}
export default withKeycloak(TopicList)