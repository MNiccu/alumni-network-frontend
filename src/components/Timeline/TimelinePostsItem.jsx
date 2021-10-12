import { Modal, Row, Col, Stack, Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { TimelineAPI } from "./TimelineAPI"
import Replies from "./Replies"

const TimelinePostsItem = ({post}) => {
    
    const [modalShow, setModalShow] = useState(false)

    const [replies, setReplies] = useState({
        comments: [],
        loading: true
    })

    useEffect(() => {
        if(post.postTarget.length > 0) {
            TimelineAPI.getComments(post.postTarget[0])
                .then(response => {
                    if(response.length){
                        setReplies({
                            comments: response,
                            loading: false
                        })
                    }
                })
            }
    },[])
    
    const ShowPost = () => {
        
        return (
            <Container>

                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                        {console.log("hello")}
                        <Modal.Title  className="mb-4">
                            <Row className="mt-2">
                                <Col xs={2} md={2} lg={2} className="ml-3">
                                    <img src={`https://avatars.dicebear.com/api/avataaars/userid${post.senderId}.svg`} alt="Users profile" className="card-img img-thumbnail img-sm" />
                                </Col>
                                <Col xs={4} sm={6} md={10} lg={8}>
                                    <Stack gap={1}>
                                        <h5 className="">Post by user with id {post.senderId}</h5>
                                        <p className="h6">{post.message}</p>
                                    </Stack>
                                </Col>
                            </Row>
                        </Modal.Title>
                        <Modal.Header>
                            { replies.loading && <p>Loading</p>}
                            { !replies.loading && <Replies replies={replies.comments} /> }
                        </Modal.Header>
                        <Modal.Body> 
                            <div className="row">
                                <div className="col-sm-10">
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="2" name="text" placeholder="Leave a comment"></textarea>
                                        </div>
                                        <div className="form-group float-right">
                                            <button className="btn btn-primary btn-sm">Comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                </Modal>
            </Container>
        )
    }

    const CommentsCount = ({postTarget}) => {
        if(postTarget.length === 1){
            return (
                <button className="btn btn-outline-secondary">Thread have 1 reply</button>
            )
        }
        else if(postTarget.length > 1){
            return (
                <button type="button" className="btn btn-outline-secondary" onClick={ () => setModalShow(true)} >Thread has {postTarget.length} replies</button>
            )
        }
        return ''
    }
    
    return (
    <div className="card my-5">
        <div className="card-header">
            <div className="row">
                <div className="col-sm-2">
                    <img src={`https://avatars.dicebear.com/api/avataaars/userid${post.senderId}.svg`} alt="Users profile" className="card-img img-thumbnail img-sm" />
                </div>
                <div className="col-sm-10">
                    <h5 className="card-title">Post by user with id {post.senderId}</h5>
                    <p className="card-text">{post.message}</p>
                </div>
            </div>
        </div>
        <div className="card-body">
            <CommentsCount postTarget={post.postTarget} />
            <ShowPost />
        </div>
    </div>
    )
}

export default TimelinePostsItem