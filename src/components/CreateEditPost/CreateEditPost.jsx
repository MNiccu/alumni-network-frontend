import { Container } from "react-bootstrap"
import TimelinePostsItem from "../Timeline/TimelinePostsItem"
import { useState } from "react"

const CreateEditPost = () => {

    const post = {
        postTarget: {},
        message: "test content. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        senderId: 1
    }

    const [fields, setFields] = useState({
		postInput: "",
		fetching: true
	})

    const handleInputChange = event => {
		setFields ({
			...fields,
			[event.target.id]: event.target.value

		})
	}
    const onFormSubmit = event => {
		event.preventDefault()	
        //could be post or edit...
		}

        const showPreview = () => {
            //save data to "post", show a TimelinePostItem with that info.
            
        }  

    return (
        <Container>

        <div className="container">
			<div className="card mt-2 w-100 mx-auto">
				<div className="card-body">
					<h3>Edit/Create post</h3>
					<form className="my-4" onSubmit={ onFormSubmit }>
						
						<div className="mb-4">
							<label htmlFor="postInput" className="form-label">Content:</label>
							<textarea onChange={handleInputChange} value={fields.bio} className="form-control" id="postInput" rows="4" placeholder="Your post"></textarea>
						</div>
						
						<div className="float-end">
                        <span type="button" onClick={ showPreview } className="me-2">preview</span>
							<button type="submit" className="btn btn-primary">Post</button>
						</div>
					</form>
				</div>
			</div>
		</div>
        <p>preview test. This should not be visible at all times</p>
        <TimelinePostsItem post={post}></TimelinePostsItem>
        
        </Container>
    )
}
export default CreateEditPost