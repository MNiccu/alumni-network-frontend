import { useState, useEffect } from "react"
import { TimelineAPI } from "./TimelineAPI";
import { useSelector } from "react-redux";

const PostEditor = ({post}) => {
    
    const { token } = useSelector(state => state.userReducer)
    const [postContent, setPostContent] = useState(post.message);
    const [isEditing, setIsEditing] = useState(false);

    const onEditBtnClick = () => {

        if(isEditing) {
            //Save
            TimelineAPI.patchEdit(post.postId, postContent, post, token)
        }

        setIsEditing(!isEditing);

    };

    const onPostChange = event => {
        
    }

    return (
    <div>
        
        {isEditing ? (<textarea value={postContent} onChange={(event)=> {setPostContent(event.target.value); onPostChange(event.target.value)}}></textarea>) 
        : ( <h6 className="card-text">{postContent}</h6>)}      
        
        {post.senderId === 3 && <button onClick={onEditBtnClick}> {isEditing ? (<>Save</>) : (<>Edit</>)}</button>}
    </div>
    );

}
export default PostEditor