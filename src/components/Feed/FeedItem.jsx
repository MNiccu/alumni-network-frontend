import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react"
import {useHistory} from 'react-router-dom'
import { Modal, Row, Col, Stack, Container } from "react-bootstrap"



const FeedItem = ({post}) => {

    const history = useHistory();

    const [modalShow, setModalShow] = useState(false)
    const [replies, setReplies] = useState({
        comments: [],
        loading: true
    })

    const redirectToPost = useCallback(() => history.push(`/post/${post.id}`), [history])



      

    const timeDifference = () => {
        const postDate = new Date(post.timeStamp)
        const differenceTime = Date.now() - postDate
        const differenceDay = Math.floor(differenceTime / (1000 * 3600 * 24))
        const differenceHour = Math.floor(differenceTime / (1000 * 3600))
        if(differenceDay !== 0)
            return <span className="text-muted ms-2 blockquote-footer small-font-size">Posted {differenceDay} days ago</span>
        else 
            return <span>Posted {differenceHour} hours ago</span>
    }

    return (
        <div className="card my-3 w-75 mx-auto" onClick={redirectToPost }>
            <div className="card-header pe-0">
                <div className="row pe-0">
                    <div className="col-1 pe-0" id="post-img">
                        <img src={`https://avatars.dicebear.com/api/avataaars/${post.senderName}.svg`} alt="Users profile" className="card-img align-middle rounded-circle" />
                    </div>
                    <div className="col-10">
                        <p className="card-title align-middle">{post.senderName}{timeDifference()}</p>
                        <p className="card-text">{post.text}</p>
                    </div>
                    <div className="col-1 me-0 pe-0">
                    </div>
            </div>
        </div>
    </div>
    )
}

export default FeedItem