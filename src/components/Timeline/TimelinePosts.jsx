import TimelinePostsItem from "./TimelinePostsItem"

//Returns timelineposts
const TimeLinePosts = ({posts, searchTerm}) => {


    return (
        <div>
            
            {posts.filter((post) => {
                   
                if (searchTerm == "") {
                    return post 
                }
                else if (post.text.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
                    return post
                }
            }).map((post) => {
                return (
                    <div>
                    <TimelinePostsItem key={post.postId} post={post}/>
                    </div>
                );
            })}
        </div>
    )
}

export default TimeLinePosts