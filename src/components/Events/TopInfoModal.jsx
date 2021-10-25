import { Row, Col } from "react-bootstrap"

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
        users.map((user, index) => {
            return (
                // TODO: VÄLIAIKAINEN RATKAISU, KEY=INDEX PITÄÄ MUUTTAA BACKISTA SAATAVAAN INDEXIIN
                <Attendees key={index} user={user} /> 
            )
        })
    )   
}

export default TopInfoModal