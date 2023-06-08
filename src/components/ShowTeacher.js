import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';


// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher }) {
    return (
        <Row xs={2} md={4} className="g-4">
            {currentTeacher.map((teacher, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={"https://img.lovepik.com/element/40143/7392.png_860.png"} />
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Title>{teacher.user_info.name}</Card.Title>
                            <Card.Text>
                                <strong>レベル:</strong> {teacher.level}<br />
                                <div>
                                    <strong>授業時間: </strong>
                                    {teacher.classes.map((classItem, index) => (
                                        classItem.schedule_list.map((schedule, subIndex) => (
                                            <span key={subIndex}>
                                                {schedule.day_of_week} - タイムスロット {schedule.time_slot}<br/>
                                            </span>
                                        ))
                                    ))}
                                </div>

                                <strong>評価:</strong> {teacher.rating} <FontAwesomeIcon icon={faStar} style={{ color: "#ffd500", }} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ShowTeacher;