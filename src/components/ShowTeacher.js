import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import "./ListTeacher.css"


// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher, indexOfFirstStudent }) {
  const a = "%";
  console.log(currentTeacher);
  return (
    <Row xs={3} md={3} className="g-4" style={{ marginTop: "5px" }}>
      {currentTeacher.map((teacher, idx) => (

        <Col key={idx}>
          <Link to={`/teacher/${teacher.id}`}>
            <Card >
              <div className="card">
                <Card.Img
                  variant="top"
                  src={"https://img.lovepik.com/photo/50100/3954.jpg_wh860.jpg"}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title>{teacher.name}     -     {teacher.age}</Card.Title>
                  <Card.Text style={{float: "left"}}>
                    {teacher.point && Math.round(teacher.point * 100) + a}
                    <br />
                    <strong>レベル:</strong> {teacher.level}
                    <br />
                    {teacher.address}<br/>
                    <span>
                      <Rating name="half-rating-read" defaultValue={parseFloat(teacher.vote)} precision={0.01} readOnly style={{ backgroundColor: "#fff" }} /></span><br />
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>

  );
}

export default ShowTeacher;