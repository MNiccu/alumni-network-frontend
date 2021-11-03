import {Container , Button, Form} from "react-bootstrap"
import { useState } from "react"
import { GroupListAPI } from "../GroupList/GroupListApi"
import { useSelector } from "react-redux";

//Returns form for new group
const NewGroup = () => {

    const { token } = useSelector(state => state.tokenReducer)


    const [groupData, setGroupData] = useState( {
        groupName: " ",
        groupDescription: " ",
        isPrivate: "false"
    })

    const handleInputChange = event => {
		setGroupData (
			{
			...groupData,
            [event.target.name]: event.target.value,
			
			}
		)
	}

    //Posts new group in database
    const createGroup = () => {
        GroupListAPI.postNewGroup(token, groupData)
    }


    return (
        <Container>
        <div className="card my-5">
            <div className="card-header">
                <div className="row">
                    
                    <div className="col-sm-10">
                        <h5 className="card-title">Something. </h5>
                                                
                    </div>
                </div>
            </div>
            <div className="card-body">
            
            <Form>
                        <Form.Group className="mb-3" controlId="formSettingsName">
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control onChange={handleInputChange} name="groupName" 
                            value={groupData.groupName} type="text" placeholder="Give your group a name"
                             size="sm" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsStatus">
                            <Form.Label className="m-2">Group privacy </Form.Label>
                            <Form.Check onChange={handleInputChange} 
                                    inline
                                    label="public "
                                    name="isPrivate"
                                    type="radio"
                                    value="false"
                                    checked={groupData.isPrivate === "false"}
                                
                                />
                                <Form.Check onChange={handleInputChange}
                                    inline
                                    label="private"
                                    name="isPrivate"
                                    type="radio"
                                    value="true"
                                    checked={groupData.isPrivate === "true"}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettings" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleInputChange} name="groupDescription" 
                            value={groupData.groupDescription} as="textarea" rows={2} 
                            placeholder="Give a description to your new group" size="sm"></Form.Control>
                        </Form.Group>
                        
                   </Form>
            <Button className="m-1 ms-auto" variant="outline-danger" onClick={createGroup}>Create</Button>
            
            </div>
        </div>
        </Container>
        )

}

export default NewGroup