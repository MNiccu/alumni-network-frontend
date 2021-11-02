// import { useState, useEffect } from 'react'; 
// import useInfiniteScroll from './useInfiniteScroll';
// import { ScrollAPI } from './ScrollAPI';
// import { useSelector } from "react-redux";

// //
// const Scroll = () => {

//     const [listItems, setListItems] = useState([]);
//     const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
//     const { token } = useSelector(state => state.userReducer)


//     useEffect(() => {
//         const postZero = { timeStamp: null }
//         ScrollAPI.getTimelinePosts(token, postZero)
//             .then(response => {
//                 if(response !== null){
//                     setListItems(response)
//                 }
//             })
//             console.log(listItems)
//     }, [])
    
//     function fetchMoreListItems() {
//         const lastPost = listItems[listItems.length - 1]
//         ScrollAPI.getTimelinePosts(token, lastPost)
//             .then(response => {
//                 if(response !== null){
//                     setListItems(prevState => ([...prevState, ...response]));
//                     setIsFetching(false);
//                     console.log("response",response)
//                 }
//             })
//     }

//     return (
//         <div className="container">
//             <ul className="list-group mb-2">
//                 {listItems.map(listItem => <li className="list-group-item">List Item {listItem.text} with stamp {listItem.timeStamp}</li>)}
//             </ul>
//             {isFetching && 'Fetching more list items...'}
//         </div>
//     )
// }

// export default Scroll