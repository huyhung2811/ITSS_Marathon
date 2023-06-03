import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Teacher({ currentTeacher, indexTeacher }) {
    return (
        <Row xs={1} md={4} className="g-4">
            {currentTeacher.map((teacher, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={teacher.image} />
                        <Card.Body>
                            <Card.Title>{teacher.name}</Card.Title>
                            <Card.Text>
                                Achievements: {teacher.achievements}<br />
                                Graduate: {teacher.graduate}<br />
                                Experience: {teacher.experience}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Teacher;