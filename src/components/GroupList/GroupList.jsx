import { GroupListAPI } from "./GroupListApi"
import { useState, useEffect } from "react"
import { Container, Stack, Button, Form, Modal } from "react-bootstrap"
import GroupItem from "../GroupDetail/GroupItem"
import withKeycloak from "../../hoc/WithKeycloak"
import { useSelector } from "react-redux";

import NewGroup from "./NewGroup"

const GroupList = () => {

    
    const { token } = useSelector(state => state.tokenReducer)
    let groupListArray = []
    const [modalShow, setModalShow] = useState(false)
    const [groups, setGroups] = useState([])
    
    useEffect(() => {
        
        listGroups()
        
    }, [])

    const listGroups = event => {
        console.log(token)
        GroupListAPI.getPublicGroups(token).then(
            result => {
                groupListArray = result
                setGroups(groupListArray)
                console.log(groupListArray)
            })
    }

    const ShowGroup = () => {
    
        return (
            <Container>
            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                    <NewGroup />
            </Modal>
            </Container>
        )
    }

	return (
        
            <Container>
        
                <Stack direction="horizontal" gap={3}>
                 <h2 className="mt-3">Groups</h2>
                 <Button className="ms-auto mt-3" variant="outline-danger" onClick={ () => setModalShow(true) }>Create new group</Button>
                </Stack>
            <ShowGroup />  
            

        {groups && groups.map(group => {
          return (
            <GroupItem key={group.groupId} group={group}/> 
          )
        })}
      
            </Container>
            
	)
}
export default withKeycloak(GroupList)