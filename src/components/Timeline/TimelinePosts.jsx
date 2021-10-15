import TimelinePostsItem from "./TimelinePostsItem"

const TimeLinePosts = ({posts}) => {
    return (
        <div>
            {posts.map(post => {
                return (
                    <TimelinePostsItem key={post.postId} post={post}/>
                )
            })}
        </div>
    )
}

export default TimeLinePosts