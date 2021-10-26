import { Container, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import KeycloakService from '../../services/KeycloakService'
import {useCallback} from 'react'
import {useHistory} from 'react-router-dom'

const Navigation = () => {

  const handleLogoutClick = () => {
    KeycloakService.doLogout()
  }

  const history = useHistory();

  // <button onClick={ handleLoginClick }>Logout with Keycloak</button>>
   const redirectToTopics = useCallback(() => history.push('/topics'), [history])
   const redirectToGroups = useCallback(() => history.push('/groups'), [history])
   const redirectToEvents = useCallback(() => history.push('/events'), [history])
   const redirectToTimeline = useCallback(() => history.push('/timeline'), [history])
   const redirectToCalendar = useCallback(() => history.push('/calendar'), [history])
   const redirectToUser = useCallback(() => history.push('/user'), [history])
   const redirectToDirectMessages = useCallback(() => history.push('/directmessages'), [history])

    return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand onClick = { redirectToTimeline }> <img src="/alumninetworklogo.png" height="60"></img> </Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link onClick =  { redirectToGroups }>Groups</Nav.Link>
      <Nav.Link onClick = { redirectToTopics }>Topics</Nav.Link>
      <Nav.Link onClick = { redirectToTimeline }>Timeline</Nav.Link>
      <Nav.Link onClick = { redirectToCalendar }>Calendar</Nav.Link>
      <Nav.Link onClick = { redirectToEvents }>Events</Nav.Link>

    </Nav>
    <Nav>
    <NavDropdown title={
        <div>
          {KeycloakService.getUsername()}
          <img src={`https://avatars.dicebear.com/api/avataaars/userid${KeycloakService.getUsername()}.svg`} alt="profilepic" height="40" className="align-middle rounded-circle" />
        </div>}>

        <NavDropdown.Item  onClick={ redirectToUser }>Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={ redirectToDirectMessages }>Direct messages</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={ handleLogoutClick }>Logout</NavDropdown.Item>
    </NavDropdown>
    
    </Nav>
    </Container>
  </Navbar>
  
    )


}

export default Navigation
