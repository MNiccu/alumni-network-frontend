import { useSelector } from "react-redux";
import { Stack, Button } from "react-bootstrap"
import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { TopicListApi } from "../TopicList/TopicListApi"


//Returns singular topic item
const TopicItem = ({topic}) => {
    
    const history = useHistory()
    const redirectFunction = useCallback(() => history.push('topic/'+topic.id), [history])
    const { token } = useSelector(state => state.tokenReducer)



    //Patches topic members in database
    const joinGroup = () => {
        TopicListApi.getTopicToPatch(topic.id,token)
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
            <Stack direction="horizontal" gap={3}>
                <h6 className="m-1">{topic.description}</h6>
                <Button className="m-1 ms-auto" variant="outline-danger" onClick={ joinGroup}>Join</Button>
                <Button className="m-1" variant="outline-danger" onClick={ redirectFunction }>Details</Button>
            </Stack>
                
            </div>
        </div>
        )
 
}

export default TopicItem