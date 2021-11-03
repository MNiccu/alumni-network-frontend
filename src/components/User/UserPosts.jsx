import { Card} from "react-bootstrap"

//Returns user posts
const UserPosts = ({posts}) => {

    const SinglePost = ({post}) => {
        if(post.isParent){
            return (
                <Card className="mb-1">
                    <Card.Header size="sm">
                        <p className="my-0"><i>Posted to thread</i></p>
                        <p className="my-0"><b>{post.message}</b></p>
                    </Card.Header>
                </Card>
            )
        }
        else if(!post.isParent){
            return (
                <Card className="mb-1">
                    <Card.Header size="sm">
                        <p className="my-0"><i>Replied to user</i></p>
                        <p className="my-0"><b>{post.message}</b></p>
                    </Card.Header>
                </Card>
            )
        }
    }


    //maps users posts
    return (
        posts.map(post => {
            return (
                <SinglePost key={post.postId} post={post} />
            )
        })
    )
}

export default UserPosts