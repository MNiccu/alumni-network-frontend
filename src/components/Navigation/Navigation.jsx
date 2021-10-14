import { Container, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css'

const Navigation = () => {

    return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/groups">Groups</Nav.Link>
      <Nav.Link href="/topicdetail">Topictest</Nav.Link>
      <Nav.Link href="/topics">Topics</Nav.Link>
      <Nav.Link href="/timeline">Timeline</Nav.Link>
      <Nav.Link href="/calendar">Calendar</Nav.Link>
      <Nav.Link href="/">New post</Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown title="User">
        <NavDropdown.Item  href="/user">Profile</NavDropdown.Item>
        <NavDropdown.Item>User settings</NavDropdown.Item>
        <NavDropdown.Item>Dashboard</NavDropdown.Item>

    </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
  
    )


}

export default Navigation
