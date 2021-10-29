import { useState, useEffect } from 'react'; 
import useInfiniteScroll from '../Scroll/useInfiniteScroll';
import { FeedAPI } from './FeedAPI'
import { useSelector } from "react-redux";
import FeedItem from './FeedItem';

const Scroll = () => {

    const [listItems, setListItems] = useState([]);
    const [lastpost, setLastpost] = useState(false)
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems, lastpost);
    const { token } = useSelector(state => state.tokenReducer)

    

    useEffect(() => {
        const postZero = { timeStamp: null }
        FeedAPI.getTimelinePosts(token, postZero)
            .then(response => {
                if(response !== null){
                    setListItems(response)
                    console.log(response)
                }
            })
    }, [])
    
    function fetchMoreListItems() {
        const lastPost = listItems[listItems.length - 1]
        console.log("last post", lastPost)
        FeedAPI.getTimelinePosts(token, lastPost)
            .then(response => {
                
                if(response !== null){
                    if(response.length){
                        setListItems(prevState => ([...prevState, ...response]));
                        setIsFetching(false);
                        console.log("response",response)
                    }
                    else
                        setLastpost(true)
                }
            })
    }

    return (
        <div className="container">
            <ul className="list-group mb-2">
                {listItems.map(listItem => <FeedItem key={listItem.id} post={listItem} />)}
            </ul>
            {isFetching && !lastpost && 'Fetching more list items...'}
            {lastpost && 'Nice you scrolled to bottom'}
            
        </div>
    )
}

export default Scroll