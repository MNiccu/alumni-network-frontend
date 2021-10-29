import { GroupListAPI } from "./GroupListApi"
import { useState, useEffect } from "react"
import { Container, Modal } from "react-bootstrap"
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
    //TODO dealing with private groups...
	return (
        
            <Container>
                <h2 className="mt-3">Public Groups</h2>
                 
                <button onClick={ setModalShow }>Create New Group</button>
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