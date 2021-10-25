import { Container} from "react-bootstrap"
import MessageItem from "./MessageItem"

const DirectMessages = () => {

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



    return (
        <Container>
            <h1 className="text-center mb-3">Here you can see your messages and start new conversation</h1>
            <div className="list-group">
                {dummy1.map(item => {
                    return(
                        <MessageItem key={item.id} item={item} />
                    )
                })}
            </div>
        </Container>
    )
}

export default DirectMessages