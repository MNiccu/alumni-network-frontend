import { useState, useEffect } from 'react'; 
import useInfiniteScroll from '../Scroll/useInfiniteScroll';
import { FeedAPI } from './FeedAPI'
import { useSelector } from "react-redux";
import FeedItem from './FeedItem';

const Feed = () => {

    const [listItems, setListItems] = useState([]);
    const [lastpost, setLastpost] = useState(false)
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems, lastpost);
    const { token } = useSelector(state => state.tokenReducer)
    const { id } = useSelector(state => state.userReducer)
    const [userReply, setUsersReply] = useState("")
    const [allTopics, setAllTopics] = useState({
        topicList: [],
        selectedTopic: 1,
        fetching: true
    })


	const [searchTerm, setSearchTerm] = useState("")
	const changeSearchTerm = ( event ) => {
		setSearchTerm(
			event.target.value
		)
	}


    //Setup for reply to post
    const handleReply = event => {
        event.preventDefault()
        const newReply = {
            text: userReply,
            targetTopic: allTopics.selectedTopic,
            members: [
                {
                    id: id
                }
            ]
        }
        console.log("reply", event.target.value)
        FeedAPI.sendPost(token, newReply)
            .then(response => {
                setListItems(prevState => ([response,...prevState]))
            })
    }

    //Gets posts for feed and joined topics
    useEffect(() => {
        const postZero = { timeStamp: null }
        FeedAPI.getTimelinePosts(token, postZero)
            .then(response => {
                if(response !== null){
                    setListItems(response)
                }
            })

            FeedAPI.getTopics(token)
            .then(response => {
                if(response !== null){
                    setAllTopics({
                        ...allTopics,
                        topicList: response,
                        fetching: false
                    })
                }
            })
    }, [])

    //Fetches more posts when user scrolls down the feed
    function fetchMoreListItems() {
        const lastPost = listItems[listItems.length - 1]
        FeedAPI.getTimelinePosts(token, lastPost)
            .then(response => {
                
                if(response !== null){
                    if(response.length){
                        setListItems(prevState => ([...prevState, ...response]));
                        setIsFetching(false);
                    }
                    else
                        setLastpost(true)
                }
            })
    }

    //Handles changes in input
    const handleTextArea = event => {
        event.preventDefault()
        setUsersReply(event.target.value)
    }

    //Handles changes in input
    const handleChange = (event) => {
        setAllTopics({
            ...allTopics,
            selectedTopic: +event.target.value
        })
      }

    return (

        
        <div className="container">
                    <div className="col-2">
						<input className="border-danger rounded mt-3 ms-auto" type="text" placeholder="search..." onChange={changeSearchTerm} ></input>
					</div>

            <div className="card my-4 w-75 mx-auto">
                <div className="card-header">
                    <form onSubmit={handleReply}>
                        <div className="form-group">
                            <label htmlFor="replyToUser">Send message to feed</label>
                            <textarea onChange={handleTextArea} className="form-control" id="replyToUser" rows="3" placeholder="What's on your mind?" required></textarea>
                            {allTopics.fetching && 
                            <select className="form-select form-select-sm my-2" disabled>
                                <option>Fetching topics</option>
                            </select>
                            }
                            {!allTopics.fetching && <select className="form-select form-select-sm my-2" onChange={ e => handleChange(e)}>
                                {allTopics.topicList.map(topic => {
                                    return(
                                        <option key={topic.id} value={topic.id}>{topic.name}</option>)}

                                    )}
                            </select>}
                        </div>
                        <button type="submit" className="btn btn-primary float-end my-2">Send a message</button>
                    </form>
                </div>
             </div>
             {!listItems.length &&
                <h3 className="text-center mt-5 pt-5 secondary text-muted">You need to join some <a href="/topics">topics</a> or <a href="/groups">groups</a> first to see some posts here</h3>
             }
            <ul className="list-group mb-2 w-75 mx-auto">
                {listItems.filter((listItem) => {
                   
                   if (searchTerm === "") {
                       return listItem 
                   }
                   else if (listItem.text.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
                       return listItem
                   }
               }).map(listItem => <FeedItem key={listItem.id} post={listItem} />)}
            </ul>
            {isFetching && !lastpost && <h4 className="text-center my-3">Fetching more list items...</h4>}
            {lastpost && <h4 className="text-center my-3" >Nice you scrolled to bottom</h4>}
            
        </div>
    )
}

export default Feed