
import { useState, useEffect } from "react"
import React from "react"


const GroupDetail = props => {

    
    
    const [groups, setGroups] = useState([])


    useEffect(() => {
        
      console.log("insider", groups)
    }, [])
    

    return (
		<main className="popup-box">
			
      <div>
        <p>This is a popup</p>
        <span className="close-icon" onClick={props.handleClose}>CLOSE</span>
               {props.content}
      </div>
      <div>
      {groups.map(a => <p>{a.groupId}:  {a.name}</p>)}
      </div>

		</main>
	)
}
export default GroupDetail