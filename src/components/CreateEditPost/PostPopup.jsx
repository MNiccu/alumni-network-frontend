import CreateEditPost from "./CreateEditPost"
import { Modal, Row, Col, Stack, Container } from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"

const PostPopup = () => {
    
    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()
   
    
    useEffect(() => {
       
    },[])
    
    const ShowPopup = () => {
        
        return (
            <Container>

                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                        {console.log("hello")}

                        <Modal.Body> 
                          <CreateEditPost/>
                        </Modal.Body>
                </Modal>
            </Container>
        )
    }

    return (
        <div className="card my-5">
            
            <div className="card-body">
            <button type="button" className="btn btn-outline-secondary"
             onClick={ () => setModalShow(true)} >New post</button>
 
               <ShowPopup />
            </div>
        </div>
        )
 
}

export default PostPopup