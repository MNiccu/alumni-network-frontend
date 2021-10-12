import { TopicListAPI } from "./TopicListApi"
import { useState, useEffect } from "react"
import React from "react"

const TopicList = () => {

    let topicListArray = []
    

    const [topics, setTopics] = useState([])

    useEffect(() => {
        
        listTopics()
       
        console.log(topics)
        
    }, [])

    const listTopics = event => {
        TopicListAPI.getTopics().then(
            result => {
                
                topicListArray = result
                setTopics(topicListArray)
                
            })
    }

    
    
	return (
		<main>
			<h1>Topic List</h1>
			

            <div>
               {topics.map(a => <p>Name: {a.name}</p>)}

               
            </div>

		</main>
	)
}
export default TopicList