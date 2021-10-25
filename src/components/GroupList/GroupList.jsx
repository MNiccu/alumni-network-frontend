import { GroupListAPI } from "./GroupListApi"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import GroupItem from "../GroupDetail/GroupItem"
import withKeycloak from "../../hoc/WithKeycloak"

const GroupList = () => {

    
    let groupListArray = []
 
    const [groups, setGroups] = useState([])

    
    useEffect(() => {
        
        listGroups()
       
        
    }, [])

    const listGroups = event => {
        GroupListAPI.getPublicGroups().then(
            result => {
                console.log("AAAA", result)
                groupListArray = result
                setGroups(groupListArray)
                console.log(groupListArray)
                
            })
    }

    
    //TODO dealing with private groups...
	return (
        
            <Container>
                <h3>Public Groups</h3>
                 
        {groups && groups.map(group => {
          return (
            <GroupItem key={group.groupId} group={group}/> 
          )
        })}
      
            </Container>
            
	)
}
export default withKeycloak(GroupList)