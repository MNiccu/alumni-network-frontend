import { GroupListAPI } from "./GroupListApi"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import GroupItem from "../GroupDetail/GroupItem"
import withKeycloak from "../../hoc/WithKeycloak"
import { useSelector } from "react-redux";

const GroupList = () => {

    const { token } = useSelector(state => state.userReducer)
    let groupListArray = []
 
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

    
    //TODO dealing with private groups...
	return (
        
            <Container>
                <h2 className="mt-3">Public Groups</h2>
                 
        {groups && groups.map(group => {
          return (
            <GroupItem key={group.groupId} group={group}/> 
          )
        })}
      
            </Container>
            
	)
}
export default withKeycloak(GroupList)