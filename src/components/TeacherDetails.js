import React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';
import Rating from '@mui/material/Rating';
import { ListGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Slider from 'react-slick';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TeacherDetails() {
    const [commentText, setCommentText] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({});
    const { id } = useParams();
    const [teachers, setTeachers] = useState([]);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [mesage, setMesage] = useState('');
    const [refesh, setRefesh] = useState(0);

    useEffect(() => {
        async function fetchTeacher() {
            try {
                const response = await axios.get(
                    'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/teacher',
                );
                console.log(response.data);
                setTeachers(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTeacher();
    }, []);
    console.log(id);
    const user_id = 1;
    const teacher = teachers.find((teacher) => teacher.id === parseInt(id));
    useEffect(() => {
        async function fetchComment() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/comment/${id}`,
                );
                setComments(response.data);
                console.log(response.data);
                // const user_id = localStorage.getItem('userid');
                const user_id = 1;
                if (user_id) {
                    const data = response.data?.find((item) => item?.user_id === user_id);
                    setComment(data);
                    setRating(data?.rating);
                    setCommentText(data?.comment);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchComment();
    }, [refesh]);
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
                'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/review',
                formData,
            );
            // Handle the response as needed
            console.log(response.data);
            setMesage('更新に成功')
            handleClickMessage();
            setRefesh(refesh + 1);
            // Clear the form fields
            // setCommentText('');
            // setRating(0);
            // setComments([...comments, formData]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClickMessage = () => {
        setOpen(true);
    };

    const handleCloseMessage = () => {
        setOpen(false);
    };

    const handleClickMessage1 = () => {
        setOpen1(true)
    }

    const handleCloseMessage1 = () => {
        setOpen1(false)
    }

    const handleRegister = (e) => {
        console.log(e)
        axios.post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/register-class', 
        {
            "user_id": localStorage.getItem('userid'),
            "class_id": e?.id
        }).then(() => {
            setMesage('クラスへの登録が完了しました')
            handleClickMessage();
        }).catch(() => {
            handleClickMessage1();
        })
    }

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleCloseMessage}
                // message="I love snacks"
            >
                <Alert severity="success">{mesage}</Alert>
            </Snackbar>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open1}
                onClose={handleCloseMessage1}
                // message="I love snacks"
            >
                <Alert severity="error">このクラスに登録しました</Alert>
            </Snackbar>
            <Modal.Dialog className="modal-xl">
                <Modal.Header closeButton onClick={handleClose} />
                <Modal.Body>
                    <Row>
                        <Col md={12} style={{ marginRight: '10px' }}>
                            <Card
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    color: '#000066',
                                    backgroundColor: '#FF9966',
                                    borderRadius: '5px',
                                }}
                            >
                                <Card.Title style={{ textAlign: 'center', fontSize: '30px' }}>
                                    <strong>先生:</strong> {teacher.name}
                                </Card.Title>
                                <br />
                                <Card.Text>
                                    <strong style={{ marginLeft: '4%' }}>
                                        名前<span style={{ margin: '0 50px 0 100px' }}>: </span>
                                    </strong>{' '}
                                    {teacher.name} - {teacher.age}
                                    <br />
                                    <br />
                                    <strong style={{ marginLeft: '4%' }}>
                                        住所<span style={{ margin: '0 50px 0 100px' }}>: </span>
                                    </strong>{' '}
                                    {teacher.address}
                                    <br />
                                    <br />
                                    <strong style={{ marginLeft: '4%' }}>
                                        性別<span style={{ margin: '0 50px 0 100px' }}>: </span>
                                    </strong>
                                    {teacher.sex}
                                    <br />
                                    <br />
                                    <strong style={{ marginLeft: '4%' }}>
                                        電話番号<span style={{ margin: '0 50px 0 70px' }}>: </span>
                                    </strong>{' '}
                                    {teacher.phone}
                                    <br />
                                    <br />
                                    <strong style={{ marginLeft: '4%' }}>
                                        レベル<span style={{ margin: '0 50px 0 85px' }}>: </span>
                                    </strong>{' '}
                                    {teacher.level}
                                    <br />
                                    <br />
                                    <span>
                                        <strong style={{ marginLeft: '4%' }}>
                                            クラス <span style={{ margin: '0 50px 0 80px' }}>: </span>
                                        </strong>
                                        {teacher.classes?.length}
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        <strong style={{ marginLeft: '4%' }}>
                                            評価<span style={{ margin: '0 50px 0 100px' }}>: </span>
                                        </strong>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={parseFloat(teacher.vote)}
                                            precision={0.01}
                                            readOnly
                                            style={{ backgroundColor: '#fff' }}
                                        />
                                    </span>
                                    <br />
                                    <br />
                                </Card.Text>
                                <div>
                                    <Slider {...settings}>
                                        {teacher.classes.map((classItem) => {
                                            const startDate = new Date(classItem.start_date);
                                            const endDate = new Date(classItem.end_date);

                                            const startMonth = startDate.getMonth('default', { month: 'short' });
                                            const startDay = startDate.getDate();

                                            const endMonth = endDate.getMonth('default', { month: 'short' });
                                            const endDay = endDate.getDate();
                                            return (
                                                <div
                                                    style={{
                                                        width: '90%',
                                                        marginRight: '10px',
                                                        backgroundColor: '#fff',
                                                        // height: '30%',
                                                    }}
                                                >
                                                    <Card
                                                        style={{
                                                            // height: '100px!important',
                                                            marginLeft: '5%',
                                                            marginRight: '5%',
                                                            marginBottom: '10px',
                                                            backgroundColor: '#fff',
                                                        }}
                                                    >
                                                        <Card.Body style={{ color: '#000066', height: '10px' }}>
                                                            <Card.Text>
                                                                <strong>クラス: {classItem.name}</strong> <br />
                                                                <br />
                                                                <strong>
                                                                    開始日 - 終了日: {startDay}/{startMonth} - {endDay}/
                                                                    {endMonth}
                                                                </strong>{' '}
                                                                <br />
                                                                <br />
                                                                <strong>料金: {classItem.fee}</strong> <br />
                                                                <br />
                                                                <strong>レベル: {classItem.level}</strong>
                                                                <br />
                                                                <br />
                                                            </Card.Text>
                                                            <button onClick={() => handleRegister(classItem)} style={{float: 'right', width: '92px', borderRadius: '6px', backgroundColor: 'rgba(94,239,91,0.29)', border: '1px solid black'}}>
                                                                登録
                                                            </button>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div>
                            </Card>
                        </Col>
                        <Col md={11}>
                            <Card style={{ width: '100%' }}>
                                <Card.Title
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '30px',
                                    }}
                                >
                                    <strong>コメント</strong>
                                </Card.Title>
                                <br />
                                <div
                                    style={{
                                        border: '1px solid #000',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        margin: '2px',
                                    }}
                                >
                                    <div className="scrollable" style={{ maxHeight: '268px', overflowX: 'auto' }}>
                                        <ListGroup variant="flush">
                                            {comments.map((comment) => {
                                                return (
                                                    <ListGroup.Item key={comment.id} style={{ borderColor: '#000' }}>
                                                        <span style={{ marginBottom: '10px' }}>
                                                            <strong>{comment?.user_name}:</strong>{' '}
                                                        </span>
                                                        <Rating
                                                            name="half-rating-read"
                                                            value={comment.rating}
                                                            precision={0.1}
                                                            readOnly
                                                        />{' '}
                                                        <br />
                                                        <br />
                                                        {comment.comment}
                                                    </ListGroup.Item>
                                                );
                                            })}
                                        </ListGroup>
                                    </div>
                                </div>

                                <Card.Body>
                                    {comment ? (
                                        <Form className="mt-3">
                                            <Form.Group controlId="rating">
                                                <Form.Label className="mr-2">
                                                    <strong>評価</strong>
                                                </Form.Label>
                                                <br />
                                                <Rating
                                                    name="rating"
                                                    value={parseFloat(rating)}
                                                    precision={1}
                                                    onChange={(event, value) => setRating(value)}
                                                />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="commentText">
                                                <Form.Label>
                                                    <strong>コメント</strong>
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={commentText}
                                                    onChange={(e) => setCommentText(e.target.value)}
                                                />
                                            </Form.Group>
                                            <br />
                                            <Button
                                                style={{
                                                    backgroundColor: '#99CC99',
                                                    border: 'none',
                                                    color: '#000',
                                                    float: 'right',
                                                }}
                                                variant="primary"
                                                onClick={handleCommentSubmit}
                                            >
                                                アップデート
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Form className="mt-3">
                                            <Form.Group controlId="rating">
                                                <Form.Label className="mr-2">
                                                    <strong>評価</strong>
                                                </Form.Label>
                                                <br />
                                                <Rating
                                                    name="rating"
                                                    value={parseFloat(rating)}
                                                    precision={1}
                                                    onChange={(event, value) => setRating(value)}
                                                />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="commentText">
                                                <Form.Label>
                                                    <strong>コメント</strong>
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={commentText}
                                                    placeholder="コメント..."
                                                    onChange={(e) => setCommentText(e.target.value)}
                                                />
                                            </Form.Group>
                                            <br />
                                            <Button
                                                style={{
                                                    backgroundColor: '#99CC99',
                                                    border: 'none',
                                                    color: '#000',
                                                    float: 'right',
                                                }}
                                                variant="primary"
                                                onClick={handleCommentSubmit}
                                            >
                                                送信
                                            </Button>
                                        </Form>
                                    )}
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
