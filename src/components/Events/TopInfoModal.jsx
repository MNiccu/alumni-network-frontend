import { Row, Col } from "react-bootstrap"

//Returns event attendees 
const TopInfoModal = ({users}) => {

    const Attendees = ({user}) => {
        return (
            <Row>
                <Col md={2}>
                    <img src={`https://avatars.dicebear.com/api/avataaars/userid${user}.svg`} alt="Users profile" className="rounded img-sm " />
                </Col>
                <Col>
                    <p className="align-middle mt-3">{user}</p>
                </Col>
            </Row>
        )
    }

    return (
        users.map((user) => {
            return (
                
                <Attendees key={user.id} user={user} /> 
            )
        })
    )   
}

export default TopInfoModal