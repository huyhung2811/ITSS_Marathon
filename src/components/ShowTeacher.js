import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ShowTeacher({ currentTeacher}) {
    return (
        <Row xs={1} md={4} className="g-4">
            {currentTeacher.map((teacher, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={teacher.image} />
                        <Card.Body>
                            <Card.Title>{teacher.name}</Card.Title>
                            <Card.Text>
                                level: {teacher.level}<br />
                                Study from: {teacher.study_form}<br />
                                Time slot: {teacher.time_slot}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ShowTeacher;