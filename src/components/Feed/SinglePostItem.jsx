import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { FeedAPI} from './FeedAPI'
import "./feed.css"


const SinglePostItem = () => {

    const { postid } = useParams()
    const { id, name, username } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)

    const [postinfo, setPostinfo] = useState({
        post: [],
        fetching: true
    })
    const [replies, setReplies] = useState({
        replies: [],
        fetching: true
    })
    const [userReply, setUsersReply] = useState("")

    useEffect(() => {
        getInformation()
    }, [])

    const getInformation = () => {
        FeedAPI.getSinglePost(token, postid)
            .then(response => {
                if(response !== null){
                    setPostinfo({
                        post: response,
                        fetching: false
                    })
                    console.log("post", response)
                }
            })

        FeedAPI.getAllReplies(token, postid)
            .then(response => {
                if(response !== null){
                    setReplies({
                        replies: response,
                        fetching: false
                    })
                    console.log("replies", response)
                }
            })
    }

    const handleReply = event => {
        event.preventDefault()
        const newReply = {
            text: userReply,
            replyParentId: postid,
            members: [
                {
                    id: id
                }
            ]
        }
        FeedAPI.sendPost(token, newReply)
            .then(response => {
                console.log(response)
            })
    }

    const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }

    const Reply = ({reply}) => {
        return (
            <div className="card-header">
                    <div className="row">
                        <div className="col-1 pe-0" id="post-img">
                            <img src={`https://avatars.dicebear.com/api/avataaars/userid${id}.svg`} alt="Users profile" className="card-img align-middle rounded-circle" />
                        </div>
                        <div className="col-10">
                            <p className="card-title">{reply.senderName}</p>
                            <p className="card-text">{reply.text}</p>
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <div className="container">
            <div className="card my-3 w-75 mx-auto">
                <div className="card-header">
                    <div className="row">
                        <div className="col-1 pe-0" id="post-img">
                            <img src={`https://avatars.dicebear.com/api/avataaars/userid${id}.svg`} alt="Users profile" className="card-img align-middle rounded-circle" />
                        </div>
                        <div className="col-10">
                            <p className="card-title">{postinfo.post.senderName}</p>
                            <p className="card-text">{postinfo.post.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card scroll convo-container w-75 mx-auto">
                <div className="card-body scrollable convo-container">
                    {!replies.replies.length && <p className="align-middle text-center fs-3">No replies in this conversation</p>}
                    {replies.replies.map(reply => {
                        return (
                            <Reply reply={reply} />
                        )
                    })}
                </div>
            </div>
            <div className="card my-4 w-75 mx-auto">
                <div className="card-header">
                    <form onSubmit={handleReply}>
                        <div className="form-group">
                            <label htmlFor="replyToUser">Send message to this user</label>
                            <textarea onChange={handleTextArea} className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
                    </form>
                </div>
             </div>
        </div>
    )
}

export default SinglePostItem