import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { FeedAPI} from './FeedAPI'
import "./feed.css"

//Returns single post item for feed
const SinglePostItem = () => {

    const { postid } = useParams()
    const { id} = useSelector(state => state.userReducer)
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

    //Gets all related info from database
    const getInformation = () => {
        FeedAPI.getSinglePost(token, postid)
            .then(response => {
                if(response !== null){
                    setPostinfo({
                        post: response,
                        fetching: false
                    })
                }
            })

        FeedAPI.getAllReplies(token, postid)
            .then(response => {
                if(response !== null){
                    setReplies({
                        replies: response,
                        fetching: false
                    })
                }
            })
    }

    //Handles replys and sends them to database
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
        const copyOfReplies = replies.replies
        const repliesBeforeAPIresponse = [newReply, ...replies.replies]
        setReplies({
            replies: repliesBeforeAPIresponse,
            fetching: false
        })
        FeedAPI.sendPost(token, newReply)
            .then(response => {
                const newRepliesArray = [response, ...copyOfReplies]
                setReplies({
                    replies: newRepliesArray,
                    fetching: false
                })
                setUsersReply("")
            })  
    }

    const timeDifference = (timeStamp) => {
        const postDate = new Date(timeStamp)
        const differenceTime = Date.now() - postDate
        const differenceDay = Math.floor(differenceTime / (1000 * 3600 * 24))
        const differenceHour = Math.floor(differenceTime / (1000 * 3600))
        if(differenceDay > 0)
            return <span className="text-muted ms-2 blockquote-footer small-font-size"> Posted {differenceDay} days ago</span>
        else if(differenceDay < 0)
            return <span className="text-muted ms-2 blockquote-footer small-font-size"> Posted {Math.abs(differenceDay)} days to today from the future</span>
        else 
            return <span className="text-muted ms-2 blockquote-footer small-font-size">Posted {differenceHour} hours ago</span>
    }

    //Handles changes in text area
    const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }

    const Reply = ({reply}) => {
        return (
            <div className="card-header my-1">
                    <div className="row">
                        <div className="col-1 pe-0" id="post-img">
                            <img src={`https://avatars.dicebear.com/api/avataaars/${reply.id}.svg`} alt="Users profile" className="card-img align-middle rounded-circle prof-img" />
                        </div>
                        <div className="col-10">
                            <p className="card-title">{reply.senderName}{timeDifference(reply.timeStamp)}</p>
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
                            <img src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`} alt="Users profile" className="card-img align-middle rounded-circle prof-img" />
                        </div>
                        <div className="col-10">
                            <p className="card-title">{postinfo.post.senderName}{timeDifference(postinfo.post.timeStamp)}</p>
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
                            <Reply key={reply.id} reply={reply} />
                        )
                    })}
                </div>
            </div>
            <div className="card my-4 w-75 mx-auto">
                <div className="card-header">
                    <form onSubmit={handleReply}>
                        <div className="form-group">
                            <label htmlFor="replyToUser">Send message to this user</label>
                            <textarea onChange={handleTextArea} value={userReply} className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
                    </form>
                </div>
             </div>
        </div>
    )
}

export default SinglePostItem