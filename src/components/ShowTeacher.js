import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

import "./ListTeacher.css";
import { useState } from "react";
import Rating from "@mui/material/Rating";

// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher, indexOfFirstStudent }) {
  const a = "%";
  console.log(currentTeacher);
  const [clickHeart, setClickHeart] = useState(false);
  const handleClick = () => {
    setClickHeart(!clickHeart);
  };
  return (
    <Row xs={3} md={3} className="g-4" style={{ marginTop: "5px" }}>
      {currentTeacher.map((teacher, idx) => (

        <Col key={idx}>
          <Card>
            <div className="card">
              <Link to={`/teacher/${teacher.id}`} className="link-no-underline">
                <Card.Img
                  variant="top"
                  src={teacher.avatar}
                  style={{
                    width: "70%",
                    height: "70%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "15%"
                  }}
                />
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
                  {clickHeart ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ marginLeft: "50px", color: "red" }}
                      onClick={handleClick}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ marginLeft: "50px" }}
                      onClick={handleClick}
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
