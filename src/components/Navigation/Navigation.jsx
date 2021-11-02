import { Container, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import KeycloakService from '../../services/KeycloakService'
import {useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { tokenRemoveAction } from '../../store/actions/tokenAction'

const Navigation = () => {

  const dispatch = useDispatch()
  const history = useHistory();

  const { firstname, username} = useSelector(state => state.userReducer)

   const redirectToTopics = useCallback(() => history.push('/topics'), [history])
   const redirectToGroups = useCallback(() => history.push('/groups'), [history])
   const redirectToEvents = useCallback(() => history.push('/events'), [history])
   const redirectToCalendar = useCallback(() => history.push('/calendar'), [history])
   const redirectToUser = useCallback(() => history.push('/user'), [history])
   const redirectToDirectMessages = useCallback(() => history.push('/directmessages'), [history])
   const redirectToFeed = useCallback(() => history.push('/feed'), [history])

   const handleLogoutClick = () => {
    dispatch(tokenRemoveAction())
    KeycloakService.doLogout()
    redirectToFeed()
  }

    return (

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand onClick = { redirectToFeed }> <img src="/alumninetworklogo.png" alt="page logo" height="60"></img> </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link onClick = { redirectToFeed }>Feed</Nav.Link>
            <Nav.Link onClick = { redirectToTopics }>Topics</Nav.Link>
            <Nav.Link onClick =  { redirectToGroups }>Groups</Nav.Link>
            <Nav.Link onClick = { redirectToCalendar }>Calendar</Nav.Link>
            <Nav.Link onClick = { redirectToEvents }>Events</Nav.Link>

          </Nav>
          <Nav>
          <NavDropdown title={
              <div>
                {firstname}
                <img src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} alt="profilepic" height="40" className="align-middle ms-2 rounded-circle" />
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
