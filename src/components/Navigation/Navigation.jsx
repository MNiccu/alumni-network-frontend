import { Container, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css'
import KeycloakService from '../../services/KeycloakService'


const Navigation = () => {

  const handleLogoutClick = () => {
    KeycloakService.doLogout()
  }

  // <button onClick={ handleLoginClick }>Logout with Keycloak</button>>

    return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/timeline"> <img src="/alumninetworklogo.png" height="60"></img> </Navbar.Brand>
    
    <Nav className="me-auto">
      <Nav.Link href="/groups">Groups</Nav.Link>
      <Nav.Link href="/topics">Topics</Nav.Link>
      <Nav.Link href="/timeline">Timeline</Nav.Link>
      <Nav.Link href="/calendar">Calendar</Nav.Link>
      <Nav.Link href="/events">Events</Nav.Link>

    </Nav>
    <Nav>
    <NavDropdown title={
        <div>
          {KeycloakService.getUsername()}
          <img src={`https://avatars.dicebear.com/api/avataaars/userid${KeycloakService.getUsername()}.svg`} alt="profilepic" height="40" className="align-middle rounded-circle" />
        </div>}>

        <NavDropdown.Item  href="/user">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/directmessages">Direct messages</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={ handleLogoutClick }>Logout</NavDropdown.Item>
    </NavDropdown>
    
    </Nav>
    </Container>
  </Navbar>
  
    )


}

export default Navigation
