import { Container } from "react-bootstrap"
import TimelinePostsItem from "../Timeline/TimelinePostsItem"
import { useState } from "react"
import { PostAPI } from "./PostAPI"


//Edit created post
const CreateEditPost = ({postContext}) => {

	const onFormSubmit = event => {
		event.preventDefault()	
        

		PostAPI.postPost("id-here", post.message, postContext)
		}

    
	const [post, setPost] = useState( {
        postTarget: [],
        message: " ",
        senderId: 1
    })

    const handleInputChange = event => {
		setPost (
			{
			...post,
			message: event.target.value
			}
		)
		setShowingPreview(false)
	}
    
	const [showingPreview, setShowingPreview] = useState(false);
	
	const showPreview = () => {
		setShowingPreview(!showingPreview);
	}  


    return (
        <Container>

        <div className="container">
			<div className="card mt-2 w-100 mx-auto">
				<div className="card-body">
					<h3>New post in {postContext.context}</h3>
					
					<form className="my-4" onSubmit={ onFormSubmit }>
						
						<div className="mb-4">
							
							<label htmlFor="postInput" className="form-label">Content:</label>
							<textarea onChange={handleInputChange} value={post.message} className="form-control" id="postInput" rows="4" placeholder="Your post"></textarea>
						</div>
						
						<div className="float-end">
                        <span type="button" onClick={ showPreview } className="me-2">preview</span>
							<button type="submit" className="btn btn-primary">Post</button>
						</div>
					</form>
				</div>
			</div>
		</div>
        
		<div>
        	{showingPreview ? ( <TimelinePostsItem post={post}></TimelinePostsItem>) 
        	: ( <h6 className="card-text"></h6>)}      
    	</div>

        </Container>
    )
}
export default CreateEditPost