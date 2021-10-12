import { GroupListAPI } from "./GroupListApi"
import { useState, useEffect } from "react"
import React from "react"
import GroupDetail from "../GroupDetail/GroupDetail"

const GroupList = () => {

    const [isOpen, setIsOpen] = useState(false)

    let groupListArray = []
    let testgroup = []

    const [groups, setGroups] = useState([])

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        
        listGroups()
       
        console.log(groups)
        
    }, [])

    const listGroups = event => {
        GroupListAPI.getGroups().then(
            result => {
                console.log("AAAA", result)
                groupListArray = result
                testgroup = groupListArray[0]
                console.log(testgroup.groupId)
                setGroups(groupListArray)
                
            })
    }

    
	return (
		<main>
			<h1>Group List</h1>
			<input
                type="button"
                value="Click to Open Popup"
                onClick={togglePopup} />


            {isOpen && <GroupDetail
                content={<>
                    <br></br>
                    <b>Design your Popup</b>
                                        
                    
                </>} handleClose={togglePopup} />}

            <div>
               {groups.map(a => <p>{a.groupId}:  {a.name}</p>)}

               
            </div>

		</main>
	)
}
export default GroupList