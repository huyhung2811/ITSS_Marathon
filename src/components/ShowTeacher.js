import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher}) {
    return (
        <Row xs={1} md={4} className="g-4">
            {currentTeacher.map((teacher, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68SQ-owyKTbsf-VdMcmO0c3BvJl3HaSzrWg&usqp=CAU"} />
                        <Card.Body>
                            <Card.Title>{teacher.user_id}</Card.Title>
                            <Card.Text>
                                name: {teacher.user_info.name}<br />
                                address: {teacher.address}<br />
                                phone: {teacher.phone}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ShowTeacher;