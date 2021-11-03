import { Stack, Button} from "react-bootstrap"
import { useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { GroupListAPI } from "../GroupList/GroupListApi"
import { useSelector } from "react-redux";

//Returns single group item 
const GroupItem = ({group}) => {

    const { token } = useSelector(state => state.tokenReducer)

    const history = useHistory()

    //Redirect to right group by id
    const redirectFunction = useCallback(() => history.push('group/'+group.id), [history])

    //Join group functions which patches group members in database
    const joinGroup = () => {
        GroupListAPI.patchGroupMember(group.id, token)
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
            <Stack direction="horizontal" gap={3}>
            <h6 className="m-1">{group.description}</h6>   
            <Button className="m-1 ms-auto" variant="outline-danger" onClick={ joinGroup}>Join</Button>
            <Button className="m-1" variant="outline-danger" onClick={ redirectFunction }>Details</Button>
            </Stack>
            </div>
        </div>
        )
 
}

export default GroupItem