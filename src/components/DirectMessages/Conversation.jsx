import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TimeLinePosts from "../Timeline/TimelinePosts"
import { DirectMessagesAPI } from "./DirectMessagesAPI"
import withKeycloak from "../../hoc/WithKeycloak"
import "./message.css"
import { useSelector } from "react-redux";


const Conversation = () => {

    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useParams()
    

    const [posts, setPosts] = useState({
        posts: [],
        loading: true
    })

    useEffect(() => {
        DirectMessagesAPI.getConversation(token, id)
            .then(response => {
                if(response !== null){
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            })
    }, [])

    return (
        <>
        <div className="container" >
            <div className="card scroll convo-container">
                <div className="card-body scrollable convo-container">
                    <TimeLinePosts posts={posts.posts} searchTerm={""}/>
                </div>
            </div>
            <div className="card my-4">
                <div className="card-header">
                    <form onSubmit="">
                        <div className="form-group">
                            <label htmlFor="replyToUser">Send message to this user</label>
                            <textarea className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
                    </form>
                </div>
             </div>
        </div>
        </>
    )
}

export default withKeycloak(Conversation)