import { useState, useEffect } from "react"


const PostEditor = ({post, onPostChange}) => {
    
    const [postContent, setPostContent] = useState(post.message);
    const [isEditing, setIsEditing] = useState(false);

    const onEditBtnClick = () => {

        if(isEditing) {
            //Save
        }

        setIsEditing(!isEditing);

    };

    return (
    <div>
        
        {isEditing ? (<textarea value={postContent} onChange={(event)=> {setPostContent(event.target.value); onPostChange(event.target.value)}}></textarea>) 
        : ( <h6 className="card-text">{postContent}</h6>)}      
        <button onClick={()=> onEditBtnClick}> {isEditing ? (<>Save</>) : (<>Edit</>)}</button>
    </div>
    );

}
export default PostEditor