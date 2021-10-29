import { useEffect, useState, useCallback } from "react"
import {useHistory} from 'react-router-dom'
import { Container, Card, Row, Col, Image, Button, Offcanvas, Form } from "react-bootstrap"
import { UserAPI } from "./UserAPI"
import UserPosts from "./UserPosts"
import { useDispatch, useSelector } from "react-redux";
import "./user.css"
import withKeycloak from "../../hoc/WithKeycloak"

const User = () => {

    const history = useHistory();

    const [posts, setPosts] = useState({
        posts: [],
        loading: true
    })

    const [settings, setSettings] = useState({
        newName: null,
        newUsername: null,
        newStatus: null,
        newBio: null,
        newFunFact: null
    })
    const { id, name, username } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)

    const [show, setShow] = useState(false)

    useEffect(() => {

        UserAPI.getUser(token, id)
            .then(response => {
                console.log(response)
            })

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
        id: 3
        }

    const redirectToTopics = useCallback(() => history.push('/topics'), [history])
    const redirectToGroups = useCallback(() => history.push('/groups'), [history])
    const redirectToEvents = useCallback(() => history.push('/events'), [history])


    const handleSettingsSubmit = event => {
        event.preventDefault()
        const userSettings = {
            id: id,
            name: settings.newName,
            username: settings.newUsername,
            status: settings.newStatus,
            bio: settings.newBio,
            funFact: settings.newFunFact
        }
        UserAPI.updateUser(token, id, userSettings)
            .then(response => {
                if(response !== null) {
                    handleClose()
                }
            })
    }

    const handleSettingsInputChange = event => {
		event.preventDefault()
		setSettings ({
			...settings,
			[event.target.id]: event.target.value

		})
	}

    return (
        <Container>
            <Card.Header className="my-5">
                <Row>
                    <Col xs={2} sm={2} md={3} lg={2}>
                        <Image src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} alt="user profile" className="img-sm" />
                    </Col>
                    <Col>
                        <Card.Title className="mt-2">{name}</Card.Title>
                        <Card.Subtitle>@{username}</Card.Subtitle>
                        <Card.Text className="mt-3">{}</Card.Text>
                        <Button onClick={redirectToTopics} variant="outline-danger" size="sm">My follows</Button>&nbsp;
                        <Button onClick={redirectToGroups} variant="outline-danger" size="sm" >My groups</Button>&nbsp;
                        <Button onClick={redirectToEvents} variant="outline-danger" size="sm" >My events</Button>&nbsp;
                    </Col>
                    <Col className="text-center col-1">
                        <span className="material-icons" onClick={ handleShow} type="button">mode_edit</span>
                    </Col>
                </Row>
            </Card.Header>

            <Card className="mb-5">
                <Card.Header>
                    <Row>
                        <Col className="col-11">
                            <Card.Title>Fun fact</Card.Title>
                            <Card.Subtitle>{}</Card.Subtitle>
                        </Col>
                        <Col className="text-center col-1">
                        <span className="material-icons" onClick={ handleShow} type="button">mode_edit</span>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>My bio</Card.Title>
                    <Card.Subtitle>{}</Card.Subtitle>
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
                   <Form onSubmit={ handleSettingsSubmit }>
                        <Form.Group className="mb-3" controlId="formSettingsName">
                            <Form.Label>Your full name</Form.Label>
                            <Form.Control type="text" onChange={handleSettingsInputChange} placeholder="John Doe" size="sm" id="newName"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsUsername">
                            <Form.Label>Your username</Form.Label>
                            <Form.Control type="text" onChange={handleSettingsInputChange} placeholder="johndoe" size="sm" id="newUsername"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsStatus">
                            <Form.Label>Current work status</Form.Label>
                            <Form.Control type="text" onChange={handleSettingsInputChange} placeholder="Currently working/studying ..." size="sm" id="newStatus" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsFunFact" >
                            <Form.Label>Fun fact about yourself</Form.Label>
                            <Form.Control type="textarea" onChange={handleSettingsInputChange} placeholder="Fun fact about me is ..." size="sm" id="newFunFact" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSettingsBio" >
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" onChange={handleSettingsInputChange} rows={2} placeholder="Tell us more about yourself" size="sm" id="newBio" ></Form.Control>
                        </Form.Group>
                        <Form.Group className="float-end">
                            <Button variant="danger" size="sm" onClick={ handleClose} className="">Cancel</Button>&nbsp;
                            <Button variant="primary" type="submit" size="sm" className="">Save Changes</Button>
                        </Form.Group>
                   </Form>
                </Offcanvas.Body>
            </Offcanvas>

        </Container>
    )
}

export default withKeycloak(User)