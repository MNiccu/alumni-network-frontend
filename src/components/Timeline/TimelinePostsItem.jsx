import { Modal, Row, Col, Stack, Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { TimelineAPI } from "./TimelineAPI"
import Replies from "./Replies"
import "./timeline.css"
import PostEditor from "./PostEditor"

//Returns posts in timeline
const TimelinePostsItem = ({post}) => {
    
    const [modalShow, setModalShow] = useState(false)

    const [replies, setReplies] = useState({
        comments: [],
        loading: true
    })
    
    const ShowPost = () => {
        
        return (
            <Container>

                <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                        <Modal.Title  className="mb-4">
                            <Row className="mt-2">
                                <Col xs={2} md={2} lg={2} className="mx-1">
                                    <img src={`https://avatars.dicebear.com/api/avataaars/userid${post.senderId}.svg`} alt="Users profile" className="card-img img-thumbnail img-sm" />
                                </Col>
                                <Col xs={4} sm={6} md={10} lg={8}>
                                    <Stack gap={1}>
                                        <h5 className="">Post by user with id {post.id}</h5>
                                        <p className="h6">{post.text}</p>
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
                                <div className="col">
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="2" name="text" placeholder="Leave a comment"></textarea>
                                        </div>
                                        <div className="form-group float-end mt-1">
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
    
   
    return (
    <div className="card my-3">
        <div className="card-header">
            <div className="row">
                <div className="col-1 pe-0" id="post-img">
                    <img src={`https://avatars.dicebear.com/api/avataaars/userid${post.senderId}.svg`} alt="Users profile" className="card-img align-middle rounded-circle" />
                </div>
                <div className="col-10">
                    <p className="card-title">Post by user with id {post.id}</p>
                    <p className="card-text">{post.text}</p>
                    <PostEditor post={post.text}/>
                </div>
                <div className="ms-5 mt-1">

                    <ShowPost />
                </div>
            </div>
        </div>
    </div>
    )
}

export default TimelinePostsItem