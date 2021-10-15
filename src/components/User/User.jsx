import { useEffect, useState } from "react"
import { Container, Card, Row, Col, Image, Button, Offcanvas, Form } from "react-bootstrap"
import { UserAPI } from "./UserAPI"
import UserPosts from "./UserPosts"
import "./user.css"


const User = () => {

    const [posts, setPosts] = useState({
        posts: [],
        loading: true
    })

    const [show, setShow] = useState(false)

    useEffect(() => {
        UserAPI.getPosts(dummyUser.id)
            .then(response => {
                if(response.length) {
                    setPosts({
                        posts: response,
                        loading: false
                    })
                }
            })
    }, [])

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const dummyUser = {
        id: 3,
        username: "batman",
        name: "Bruce Wayne",
        picture: "",
        status: "Fighting criminals by night, lurking by day",
        bio: "I AM THE NIGHT",
        funFact: "Is the night",
        token: "batman1234"
        }

    return (
        <Container>
            <Card.Header className="my-5">
                <Row>
                    <Col xs={2} sm={2} md={3} lg={2}>
                        <Image src={`https://avatars.dicebear.com/api/avataaars/userid${dummyUser.id}.svg`} alt="user profile" className="img-sm" />
                    </Col>
                    <Col>
                        <Card.Title className="mt-2">{dummyUser.name}</Card.Title>
                        <Card.Subtitle>@{dummyUser.username}</Card.Subtitle>
                        <Card.Text className="mt-3">{dummyUser.status}</Card.Text>
                        <Button variant="outline-danger" size="sm">My follows</Button>&nbsp;
                        <Button variant="outline-danger" size="sm" >My groups</Button>&nbsp;
                        <Button variant="outline-danger" size="sm" >My events</Button>&nbsp;
                    </Col>
                    <Col lg={1} className="text-center">
                        <span className="material-icons" onClick={ handleShow} type="button">mode_edit</span>
                    </Col>
                </Row>
            </Card.Header>

            <Card className="mb-5">
                <Card.Header>
                    <Row>
                        <Col lg={11}>
                            <Card.Title>Fun fact</Card.Title>
                            <Card.Subtitle>{dummyUser.funFact}</Card.Subtitle>
                        </Col>
                        <Col lg={1} className="text-center">
                        <span className="material-icons" onClick={ handleShow} type="button">mode_edit</span>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>My bio</Card.Title>
                    <Card.Subtitle>{dummyUser.bio}</Card.Subtitle>
                </Card.Body>
            </Card>

            <Card className="mb-5 card-scroll">
                <Card.Title className="mx-3">Users activity</Card.Title>
                <div className="scrollable">
                    <UserPosts posts={posts.posts} />
                </div>
            </Card>

            <Offcanvas show={show} onHide={handleClose} backdrop={false} scroll={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Change your personal information</p>
                   <Form>
                        <Form.Group className="mb-3" controlId="formSettingsName">
                            <Form.Label>Your full name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" size="sm" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsStatus">
                            <Form.Label>Current work status</Form.Label>
                            <Form.Control type="text" placeholder="Currently working/studying ..." size="sm"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettings" >
                            <Form.Label>Fun fact about yourself</Form.Label>
                            <Form.Control type="textarea" placeholder="Fun fact about me is ..." size="sm"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsn" >
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="Tell us more about yourself" size="sm"></Form.Control>
                        </Form.Group>
                        <Form.Group className="float-end">
                            <Button variant="danger" size="sm" className="">Cancel</Button>&nbsp;
                            <Button variant="primary" size="sm" className="">Save Changes</Button>
                        </Form.Group>
                   </Form>
                </Offcanvas.Body>
            </Offcanvas>

        </Container>
    )
}

export default User