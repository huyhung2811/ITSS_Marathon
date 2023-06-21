import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import Rating from "@mui/material/Rating";
import { ListGroup, Form, Button } from "react-bootstrap";
import axios from 'axios';
import Slider from 'react-slick';




function TeacherDetails({ teachers }) {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  console.log(id);
  const user_id = 1;
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id));
  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await axios.get(
          `https://be-marathonwebsite-ruler-production-93fe.up.railway.app/api/comment/${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchComment();
  }, [id]);
  if (!teacher) {
    return <p>Teacher not found</p>;
  }
  const handleClose = () => {
    window.history.back();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const users = [
    { user_id: 1, name: "John" },
    { user_id: 2, name: "Jane" },
    { user_id: 3, name: "David" },
    { user_id: 4, name: "Sarah" },
    { user_id: 5, name: "Michael" },
    { user_id: 6, name: "Emily" },
    { user_id: 7, name: "James" },
    { user_id: 8, name: "Olivia" },
    { user_id: 9, name: "Daniel" },
    { user_id: 10, name: "Sophia" }
  ];

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user_id: user_id,
      teacher_id: id,
      rating: rating,
      comment: commentText,
    };
    try {
      const response = await axios.post(
        "https://be-marathonwebsite-ruler-production-93fe.up.railway.app/api/review",
        formData
      );
      // Handle the response as needed
      console.log(response.data);
      // Clear the form fields
      setCommentText("");
      setRating(0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className="modal-xl">
        <Modal.Header closeButton onClick={handleClose} />
        <Modal.Body>
          <Row>
            <Col md={12} style={{ marginRight: "10px" }}>
              <Card>
                <Card.Body style={{
                  textAlign: "left",
                  width: "100%",
                  color: "#000066",
                  backgroundColor: "#FF9966"
                  // marginLeft: "10%",
                }}>
                  <Card.Title style={{
                    textAlign: "center",
                    fontSize: "30px"
                  }}><strong>先生:</strong> {teacher.name}</Card.Title>
                  <Card.Text>
                    <strong style={{ marginLeft: "4%" }}>名前<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.name} - {teacher.age}<br /><br />
                    <strong style={{ marginLeft: "4%" }}>住所<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {teacher.address}<br /><br />
                    <strong style={{ marginLeft: "4%" }}>性別<span style={{ margin: '0 50px 0 100px' }}>: </span></strong>{teacher.sex}<br /><br />
                    <strong style={{ marginLeft: "4%" }}>電話番号<span style={{ margin: '0 50px 0 70px' }}>: </span></strong> 0{teacher.phone}<br /><br />
                    <strong style={{ marginLeft: "4%" }}>レベル<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {teacher.level}<br /><br />
                    <span><strong style={{ marginLeft: "4%" }}>クラス <span style={{ margin: '0 50px 0 80px' }}>: </span></strong>{teacher.classes.length}</span><br /><br />
                    <span><strong style={{ marginLeft: "4%" }}>評価<span style={{ margin: '0 50px 0 100px' }}>: </span></strong>
                      <Rating name="half-rating-read" defaultValue={teacher.vote} precision={0.001} readOnly style={{ backgroundColor: "#fff" }} /></span><br /><br />
                    <div className="slider-wrapper">
                      <Slider {...settings}>
                        {teacher.classes.map((classItem) => (
                          <div style={{ width: "90%", marginRight: "10px", backgroundColor: "#fff" }}>
                            <Card style={{
                              width: '100px!important',
                              marginLeft: "5%",
                              marginRight: "5%",
                              marginBottom: "10px",
                              backgroundColor: "#fff"
                            }}>
                              <Card.Body style={{ color: "#000066" }}>
                                <Card.Title style={{ textAlign: "center", }}>{classItem.name}</Card.Title>
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
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={11}>
              <Card style={{ width: '100%' }}>
                <Card.Title style={{
                  textAlign: "center",
                  fontSize: "30px"
                }}><strong>コメント</strong></Card.Title>
                <br />
                <div style={{ border: "1px solid #000", borderRadius: "5px", padding: "10px", margin: "2px" }}>
                  <div className="scrollable" style={{ maxHeight: "268px", overflowX: "auto" }}>
                    <ListGroup variant="flush">
                      {comments.map((comment) => {
                        const user = users.find((user) => user.user_id === comment.user_id);
                        return(
                          <ListGroup.Item key={comment.id} style={{ borderColor: "#000" }}>
                          <span style={{ marginBottom: "10px" }}><strong>{user.name}:</strong> </span><Rating name="half-rating-read" value={comment.rating} precision={0.1} readOnly /> <br /><br />{comment.comment}
                        </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </div>
                </div>

                <Card.Body>
                  <Form className="mt-3">
                    <Form.Group controlId="rating">
                      <Form.Label className="mr-2"><strong>評価</strong></Form.Label><br />
                      <Rating
                        name="rating"
                        value={rating}
                        precision={1}
                        onChange={(event, value) => setRating(value)}
                      />
                    </Form.Group><br />
                    <Form.Group controlId="commentText">
                      <Form.Label><strong>コメント</strong></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={commentText}
                        placeholder="コメント..."
                        onChange={(e) => setCommentText(e.target.value)}
                      />
                    </Form.Group><br />
                    <Button style={{ backgroundColor: "#99CC99", border: "none", color: "#000", float: "right" }} variant="primary" onClick={handleCommentSubmit}>
                      送信
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
export default TeacherDetails;

