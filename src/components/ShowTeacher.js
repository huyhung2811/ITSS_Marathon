import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


import "./ListTeacher.css"
import "./ShowTeacher.css"

import { useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";

// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher, indexOfFirstStudent }) {
  const a = "%";
  const [showHeart, setShowHeart] = useState({});

  const toggleHeart = (teacherId) => {
    setShowHeart((prevState) => ({
      ...prevState,
      [teacherId]: !prevState[teacherId],
    }));
    axios
            .post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/bookmark', {
              teacher_id: teacherId,
              user_id: 1
            })
            .then((response) => {
                console.log('thanh cong');
            })
            .catch((error) => {
                console.log('loi');
            });
  };
  return (
    <Row xs={3} md={3} className="g-4" style={{ marginTop: "5px" }}>
      {currentTeacher.map((teacher, idx) => (

        <Col key={idx}>
          <Card style={{border:"1px solid #000"}}>
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
                  {showHeart[teacher.id] ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ marginLeft: "50px", color: "red" }}
                      onClick={() => toggleHeart(teacher.id)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ marginLeft: "50px" }}
                      onClick={() => toggleHeart(teacher.id)}
                    />
                  )}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>

  );
}

export default ShowTeacher;
