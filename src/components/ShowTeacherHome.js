import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import './ListTeacher.css';
import './ShowTeacher.css';

import Rating from '@mui/material/Rating';
import axios from 'axios';
import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { Box, Snackbar, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// currentTeacher là danh sách các giáo viên cần in
function ShowTeacherHome({ currentTeacher }) {
    const [open1, setOpen1] = useState(false);

    const handleClickMessage1 = () => {
        setOpen1(true);
    };

    const handleCloseMessage1 = () => {
        setOpen1(false);
    };
    const a = '%';
    const toggleHeart = (teacherId) => {
        if (localStorage.getItem('userid'))
            axios
                .post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/bookmark', {
                    teacher_id: teacherId,
                    user_id: 1,
                })
                .then((response) => {
                    console.log('thanh cong');
                })
                .catch((error) => {
                    console.log('loi');
                });
        else handleClickMessage1();
    };
    return (
        <Row xs={3} md={3} className="g-4" style={{ marginTop: '5px' }}>
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open1}
                onClose={handleCloseMessage1}
                // message="I love snacks"
            >
                <Alert severity="error">ログインする必要があります</Alert>
            </Snackbar>
            {currentTeacher.map((teacher, idx) => (
                <Col key={idx}>
                    <Card style={{ border: '1px solid #000' }}>
                        <div className="card">
                            <div className="avatar-background"></div>
                            <Link to={`/teacherHome/${teacher.id}`} className="link-no-underline">
                                <div className="avatar-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={teacher.avatar}
                                        style={{
                                            width: '90%',
                                            height: '230px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            marginLeft: '5%',
                                        }}
                                    />
                                </div>
                            </Link>

                            <Card.Body
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Card.Title>
                                    {teacher.name} , {teacher.age}
                                </Card.Title>
                                <Card.Text>
                                    {/* {teacher.point && Math.round(teacher.point * 100) + a} */}
                                    {/* <div style={{ alignItems: "center" }}>
                    {teacher.point&&teacher.point >= 0.8 ? (
                      <div style={{ color: "green" }}>Math.round(teacher.point * 100) + a</div>
                    ) : teacher.point >= 0.5 && teacher.point<=0.8 ? (
                      <div style={{ color: "yellow" }}>{Math.round(teacher.point * 100) + a}</div>
                    ) : (
                      <div style={{ color: "red" }}>{Math.round(teacher.point * 100) + a}</div>
                    )}
                  </div> */}
                                    {teacher.point && (
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                display: 'flex',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <CircularProgress
                                                variant="determinate"
                                                // value={20}
                                                value={
                                                    isNaN(parseFloat(teacher.point * 100))
                                                        ? 0
                                                        : parseFloat(teacher.point * 100)
                                                }
                                                sx={{ color: 'red' }}
                                            />
                                            <Box
                                                sx={{
                                                    top: 0,
                                                    left: 0,
                                                    bottom: 0,
                                                    right: 0,
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Typography
                                                    variant="caption"
                                                    component="div"
                                                    color="black"
                                                    fontWeight="bold"
                                                >
                                                    {`${Math.round(
                                                        parseFloat(
                                                            isNaN(parseFloat(teacher.point * 100))
                                                                ? 0
                                                                : parseFloat(teacher.point * 100),
                                                        ),
                                                    )}%`}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    )}
                                    <br />
                                    <strong>レベル:</strong> {teacher.level}
                                    <br />
                                    {teacher.address + ', Ha Noi'}
                                    <br />
                                    <span>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={parseFloat(teacher.vote)}
                                            precision={0.1}
                                            readOnly
                                            style={{ backgroundColor: '#fff' }}
                                        />
                                    </span>
                                    {teacher.bookmark ? (
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            style={{ marginLeft: '50px', color: 'red' }}
                                            onClick={() => toggleHeart(teacher.id)}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            style={{ marginLeft: '50px' }}
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

export default ShowTeacherHome;
