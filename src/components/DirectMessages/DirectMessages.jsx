import { Container} from "react-bootstrap"
import MessageItem from "./MessageItem"
import { DirectMessagesAPI } from "./DirectMessagesAPI"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux";

const DirectMessages = () => {

    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useSelector(state => state.userReducer)

     const [posts, setPosts] = useState( {
        posts: [],
        loading: true
     })

    useEffect(() => {
        DirectMessagesAPI.getPost(token)
            .then(response => {
                console.log("AFLAFKAFLKFL", response)
                if(response !== null){
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            })
    }, [])

    return (
        <Container>
            <h2 className="mt-3">Here you can see your messages and start new conversation</h2>
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