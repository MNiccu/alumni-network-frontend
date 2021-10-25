import TimelinePostsItem from "./TimelinePostsItem"

const TimeLinePosts = ({posts, searchTerm}) => {


    

    return (
        <div>
            
            {posts.filter((post) => {
                   
                if (searchTerm == "") {
                    return post 
                }
                else if (post.message.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())) {
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