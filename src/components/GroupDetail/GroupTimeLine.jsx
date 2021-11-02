import { useState, useEffect } from 'react'; 
import useInfiniteScroll from '../Scroll/useInfiniteScroll';
import { useSelector } from "react-redux";
import { GroupListAPI } from '../GroupList/GroupListApi';
import FeedItem from "../Feed/FeedItem"

const GroupTimeLine = ({posts, groupId}) => {

    const [postList, setPostList] = useState([])
    const [isLastpost, setIsLastpost] = useState({
        isLast: false,
        scroll: 0
    })
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems, isLastpost.isLast);
    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useSelector(state => state.userReducer)
    const [userReply, setUsersReply] = useState("")


    const handleReply = event => {
        event.preventDefault()
        const newReply = {
            text: userReply,
            targetGroup: groupId,
            members: [
                {
                    id: id
                }
            ]
        }
        GroupListAPI.sendPost(token, newReply)
            .then(response => {
                console.log(response)
                setPostList(prevState => ([response,...prevState]))
            })
    }

    useEffect(() => {
        if(posts.length > 10){
            setPostList(posts.slice(0, 10))
            setIsLastpost({
                ...isLastpost,
                scroll: 10
            })
        }
        else {
            setPostList(posts.slice(0, posts.length))
            setIsLastpost({
                ...isLastpost,
                scroll: posts.length
            })
        }
    }, [])

    
    function fetchMoreListItems() {
        const restOfPost = posts.slice(isLastpost.scroll, posts.length)
        console.log(restOfPost.length)
        if(!restOfPost.length){
            setIsLastpost({
                ...isLastpost,
                isLast: true
            })
            console.log("inlast", isLastpost.isLast)
        }
        else {
            console.log("in else")
            if(restOfPost.length > 10){
                setPostList(prevState => ([...prevState, ...restOfPost.slice(0, 10)]))
                setIsFetching(false)
                setIsLastpost({
                    ...isLastpost,
                    scroll: isLastpost.scroll + 10
                })
            }
            else {
                setPostList(prevState => ([...prevState, ...restOfPost]))
                setIsFetching(false)
                setIsLastpost({
                    ...isLastpost,
                    scroll: isLastpost.scroll + 10
                })
            }
        }
    }

    const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }

    return (
        <div className="container">
            <div className="card my-4 w-75 mx-auto">
                <div className="card-header">
                    <form onSubmit={handleReply}>
                        <div className="form-group">
                            <label htmlFor="replyToUser">Send message to feed</label>
                            <textarea onChange={handleTextArea} className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
                    </form>
                </div>
             </div>
             
            <ul className="list-group mb-2">
                {postList.map(listItem => <FeedItem key={listItem.id} post={listItem} />)}
            </ul>
            {isFetching && !isLastpost.isLast && <h4 className="text-center my-3">Fetching more list items...</h4>}
            {isLastpost.isLast && <h4 className="text-center my-3" >Nice you scrolled to bottom</h4>}
            
        </div>
    )
}

export default GroupTimeLine