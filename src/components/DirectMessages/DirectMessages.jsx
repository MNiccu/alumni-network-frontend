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

    const dummy1 = [
        {
            id: 1,
            message: "hello my dude",
            timestamp: "",
            from: {
                username: "thefrogboy",
                picture: `https://avatars.dicebear.com/api/avataaars/thefrogboy.svg`,
                name: "The Frog"
            }
        },
        {
            id: 2,
            message: "lets party all night long mate",
            timestamp: "",
            from: {
                username: "houseislit",
                picture: `https://avatars.dicebear.com/api/avataaars/houseislit.svg`,
                name: "Swedish House Mafia"
            }
        },
        {
            id: 3,
            message: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risusvarius blandit.",
            timestamp: "",
            from: {
                username: "loremdude",
                picture: `https://avatars.dicebear.com/api/avataaars/loremdude.svg`,
                name: "Donatello Angello"
            }
        }
    ]

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
            <h1 className="text-center mb-3">Here you can see your messages and start new conversation</h1>
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