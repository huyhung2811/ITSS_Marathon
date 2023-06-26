import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function TeacherDetail({ teachers }) {
    const { id } = useParams();

    const teacher = teachers.find((teacher) => teacher.id === Number(id));

    if (!teacher) {
        return <p>Teacher not found</p>;
    }

    return (
        <div className="teacher-detail">
            <Row className="justify-content-center">
                <h2>{teacher.name}</h2>
                <Card border="light" style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Teacher Details</Card.Title>
                        <Card.Text>
                            <strong>Fee: </strong> {teacher.fee} <br />
                            <strong>Location: </strong> {teacher.location} <br />
                            <strong>Gender: </strong> {teacher.gender} <br />
                            <strong>Age: </strong> {teacher.age} <br />
                            <strong>Qualification: </strong> {teacher.qualification} <br />
                            <strong>Phone: </strong> {teacher.phone} <br />
                            <strong>Class: </strong> {teacher.class} <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default TeacherDetail;
