import { Modal, Row, Col, Stack, Container , Button} from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { GroupListAPI } from "../GroupList/GroupListApi"
import KeycloakService from "../../services/KeycloakService"
import { useSelector } from "react-redux";


const GroupItem = ({group}) => {

    const { token } = useSelector(state => state.tokenReducer)


    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()

    const redirectFunction = useCallback(() => history.push('group/'+group.id), [history])

    const joinGroup = () => {
        //Token needs to be passed too
        GroupListAPI.patchGroupMember(group.id, token)

    }
    
    useEffect(() => {
       
    },[])

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