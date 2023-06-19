import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import "./ListTeacher.css"

// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher }) {
  return (
    <Row xs={3} md={3} className="g-4">
      {currentTeacher.map((teacher, idx) => (
        <Col key={idx}>
          <Card >
            <div className="card">
            <Card.Img
              variant="top"
              src={"data:image/jpeg;base64,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"}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Title>{teacher.user_info.name}</Card.Title>
              <Card.Text>
                <strong>レベル:</strong> {teacher.level}
                <br />
                <div>
                  <strong>授業時間: </strong>
                  {teacher.classes.map((classItem, index) =>
                    classItem.schedule_list.map((schedule, subIndex) => (
                      <span key={subIndex}>
                        {schedule.day_of_week} - タイムスロット{" "}
                        {schedule.time_slot}
                        <br />
                      </span>
                    ))
                  )}
                </div>
                <strong>評価:</strong> {teacher.rating}{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd500" }} />
              </Card.Text>
            </Card.Body>
            </div>
          </Card>
          <Link to={`/teacher/${idx +1}`}>chitiet</Link>
        </Col>
      ))}
    </Row>
  );
}

export default ShowTeacher;
