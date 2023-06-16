import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";

function TeacherDetails({ teachers }) {
  const { id } = useParams();
  const teacher = teachers.find((teacher) => teacher.user_id === parseInt(id));
  if (!teacher) {
    return <p>Teacher not found</p>;
  }
  return (
    <Card>
      <Row>
        <Col xs={4}>
          <Card.Img
            src="https://img.lovepik.com/element/40143/7392.png_860.png"
            alt="Teacher"
            style={{
                width: "90px",
                height: "90px",
                objectFit: "cover",
                borderRadius: "50%",
                marginLeft: "400%",
                marginTop: "30%",
              }}
          />
        </Col>
        <Col xs={8}>
          <Card.Body style={{ 
            textAlign: "left",
            width: "140%",
            marginLeft: "40%",
          }}>
            <Card.Title style={{ 
            textAlign: "center",
            fontSize: "30px"
            }}>先生 :{teacher.user_info.name}</Card.Title>
            <Card.Text style={{
                border: "2px solid #ccc",
            }}>
            <strong style={{ marginLeft: "4%"}}>名前<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.user_info.name}<br /><br />
            <strong style={{ marginLeft: "4%" }}>レベル<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {teacher.level}<br /><br />
            <strong style={{ marginLeft: "4%" }}>住所<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.address}<br /><br />
            <strong style={{ marginLeft: "4%" }}>年齢<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.age}<br /><br />
            <strong style={{ marginLeft: "4%" }}>授業回数<span style={{ margin: '0 50px 0 70px' }}>: </span></strong> {teacher.route}<br /><br />
            <strong style={{ marginLeft: "4%" }}>目標<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.goal}<br /><br />
            <strong style={{ marginLeft: "4%" }}>給与<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.salary}<br /><br />
            <strong style={{ marginLeft: "4%" }}>その他の要件<span style={{ margin: '0 45px' }}>: </span></strong> {teacher.other_requirements}<br /><br />
            <strong style={{ marginLeft: "4%" }}>電話番号<span style={{ margin: '0 50px 0 70px' }}>: </span></strong> {teacher.phone}<br /><br />
            <strong style={{ marginLeft: "4%" }}>評価<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.rating} <FontAwesomeIcon icon={faStar} style={{ color: "#ffd500" }} /> <br /><br />
            <Card.Title style={{ marginLeft: "4%" }}>Classes:</Card.Title>
            <Row>
            {teacher.classes.map((classItem) => (
                <Col key={classItem.id} xs={12} md={6}>
                <Card style={{
                        width: '150%',
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginBottom: "10px",
                        backgroundColor: "#D2B48C"
                    }}>
                    <Card.Body >
                    <Card.Title style={{ textAlign: "center",}}>{classItem.name}</Card.Title>
                    <Card.Text>
                        <strong>Type:</strong> {classItem.type}<br />
                        <strong>Start Date:</strong> {classItem.start_date}<br />
                        <strong>End Date:</strong> {classItem.end_date}<br />
                        <strong>Max Students:</strong> {classItem.max_student}<br />
                        <strong>Day of Week:</strong> {classItem.day_of_week}<br />
                        <strong>Time Slot:</strong> {classItem.time_slot}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            </Card.Text>
            
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default TeacherDetails;

