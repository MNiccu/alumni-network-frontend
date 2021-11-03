import { Container, Modal, Stack, Button} from "react-bootstrap"
import MessageItem from "./MessageItem"
import { DirectMessagesAPI } from "./DirectMessagesAPI"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import NewDirectMessage from "./NewDirectMessage";

const DirectMessages = () => {

    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useSelector(state => state.userReducer)
    const [modalShow, setModalShow] = useState(false)

     const [posts, setPosts] = useState( {
        posts: [],
        loading: true
     })

    useEffect(() => {
        DirectMessagesAPI.getPost(token)
            .then(response => {
                if(response !== null){
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            })
    }, [])

    //Popup for direct messages
    const CreateNewDM = () => {
        return (
        <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
            <NewDirectMessage/>
        </Modal>
        )
    }

    return (
        <Container>
                <Stack direction="horizontal" gap={3}>
                 <h2 className="mt-3">Direct messages</h2>
                 <Button className="ms-auto mt-3" variant="outline-danger" onClick={ () => setModalShow(true) }>Start a conversation</Button>
                </Stack>
                <CreateNewDM />
            <div className="list-group">
                {posts.posts.map(item => {
                    return(
                        <MessageItem key={item.id} item={item} />
                    )
                })}
            </div>
        </Container>
    )
}

export default DirectMessages