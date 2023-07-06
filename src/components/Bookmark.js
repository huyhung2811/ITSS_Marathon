import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./ListTeacher.css"
import "./ShowTeacher.css"
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
// currentTeacher là danh sách các giáo viên cần in
function Bookmark({ currentTeacher, indexOfFirstStudent }) {
    const id = 1;
    const a = "%";
    const [showHeart, setShowHeart] = useState({});
    const [teachersBM, setTeachersBM] = useState([]);

    const toggleHeart = (teacherId) => {
        setShowHeart((prevState) => ({
            ...prevState,
            [teacherId]: !prevState[teacherId],
        }));
    };
    return (
        <Row xs={3} md={3} className="g-4" style={{ marginTop: "5px" }}>
            {currentTeacher.map((teacher, idx) => (

                <Col key={idx}>
                    <Card style={{ border: "1px solid #000" }}>
                        <div className="card">
                            <div className="avatar-background"></div>
                            <Link to={`/teacher/${teacher.id}`} className="link-no-underline">
                                <div className="avatar-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={teacher.avatar}
                                        style={{
                                            width: '90%',
                                            height: '230px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            marginLeft: '5%'
                                        }}
                                    />
                                </div>
                            </Link>

                            <Card.Body
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Card.Title>{teacher.name} - {teacher.age}</Card.Title>
                                <Card.Text>
                                    {teacher.point && Math.round(teacher.point * 100) + a}
                                    <br />
                                    <strong>レベル:</strong> {teacher.level}
                                    <br />
                                    {teacher.address + ", Ha Noi"}
                                    <br />
                                    <span>
                                        <Rating name="half-rating-read" defaultValue={parseFloat(teacher.vote)} precision={0.01} readOnly style={{ backgroundColor: "#fff" }} /></span>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        style={{
                                            marginLeft: "50px",
                                            color: showHeart[teacher.id] ? "red" : "",
                                            cursor: "pointer"
                                        }}
                                        onClick={() => toggleHeart(teacher.id)}
                                    />

                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>

    );
}

export default Bookmark;
