import { Card, Row, Col } from "react-bootstrap"


const Replies = ({replies}) => {
    
    const ReplyItem = ({reply}) => {
        return (
            <Card>
                <Row>
                    <Col md={2}>
                        <img src={`https://avatars.dicebear.com/api/avataaars/userid${reply.senderId}.svg`} alt="Users profile" className="card-img img-thumbnail img-sm" />
                    </Col>
                    <Col>
                        <p className="mb-1">Reply by id {reply.senderId}</p>
                        <p className="mb-0">{reply.message}</p>
                    </Col>
                </Row>
            </Card>
        )
    }
    
    return (
        replies.map(reply => {
            return (
                <ReplyItem key={reply.senderId} reply={reply} />
            )
        })
    )
}

export default Replies