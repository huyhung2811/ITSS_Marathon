import React, { useState, useContext } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMapLocationDot, faFlag, faUpload } from '@fortawesome/free-solid-svg-icons';
import PortraitIcon from '@mui/icons-material/Portrait';
import { AuthContext } from '../context/AuthContext';

const classStuding = [
    {
        "id": 1,
        "name": "Thu",
        "type": "online",
        "fee": 100000,
        "level": "A1",
        "start_date": "2023-07-05",
        "end_date": "2023-08-16",
        "max_student": 23,
        "day_of_week": "Tuesday",
        "schedule_list": [
            {
                "day_of_week": "Tuesday",
                "time_slot": "5"
            },
            {
                "day_of_week": "Tuesday",
                "time_slot": "6"
            }
        ]
    },
    {
        "id": 2,
        "name": "Minh",
        "type": "online",
        "fee": 80000,
        "level": "A2",
        "start_date": "2023-06-08",
        "end_date": "2023-08-17",
        "max_student": 27,
        "day_of_week": "Monday",
        "schedule_list": [
            {
                "day_of_week": "Tuesday",
                "time_slot": "2"
            },
            {
                "day_of_week": "Monday",
                "time_slot": "11"
            }
        ]
    },
    {
        "id": 3,
        "name": "Anh",
        "type": "online",
        "fee": 150000,
        "level": "B1",
        "start_date": "2023-06-07",
        "end_date": "2023-08-15",
        "max_student": 22,
        "day_of_week": "Sunday",
        "schedule_list": [
            {
                "day_of_week": "Thursday",
                "time_slot": "7"
            },
            {
                "day_of_week": "Sunday",
                "time_slot": "14"
            }
        ]
    }
];

const Profile = () => {
    const [showInfo, setShowInfo] = useState(true);
    const [showClass, setShowClass] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
  const { logout, currentUser } = useContext(AuthContext);


    const userInfo = {
        id: 10,
        name: 'Trần Huy Phúc',
        sex: 'male',
        email: 'phuctran99@gmail.com',
        role: 'user',
        password: '123456',
        avatar: 'https://anhdep123.com/wp-content/uploads/2021/02/anh-hoc-sinh-dep.jpg',
        address: 'Long Bien',
        level: 'B2',
        desired_place: 'Long Bien',
        desired_gender: 'male',
        desired_goal: '勉強',
        desired_level: 'B2'
    };

    const handleShowInfo = () => {
        setShowInfo(true);
        setShowClass(false);
        setEditInfo(false);
    };

    const handleShowClass = () => {
        setShowInfo(false);
        setShowClass(true);
        setEditInfo(false);
    };
    const handleEditProfile = () => {
        setShowInfo(false);
        setEditInfo(true);
        console.log('Edit profile');
    };

    return (
        <Card className="text-center mx-auto" style={{ width: "1000px" }}>
            <Card.Body>
                <Row>
                    <Col style={{ width: "300px" }}>
                        <Card style={{ width: "300px", justifyContent: "center", backgroundColor: "#75593e" }}>
                            <br />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Card.Img src={userInfo.avatar} alt="Avatar" style={{ width: '200px', height: '200px', borderRadius: '20%', marginRight: '20px' }} /> <br /><br /> <br />
                            </div>
                            <Card.Body>
                                <Button variant="link" onClick={handleShowInfo}>アカウント情報</Button> <br /><br />
                                <Button variant="link" onClick={handleShowClass}>クラス情報</Button> <br /><br />
                                <Button onClick={logout}>ログアウト</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: "600px", marginRight: "30px" }}>
                        <Card style={{ width: '600px', textAlign: "left", padding: "40px" }}>
                            {showInfo && (
                                <div>
                                    <br />
                                    <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
                                        <strong>アカウント情報</strong>
                                    </Card.Title><br />
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Card.Img src={userInfo.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '20%', marginRight: '20px' }} /> <br />
                                    </div>
                                    <Card.Text style={{ marginLeft: "70px" }}>
                                        <strong>名前<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {userInfo.name}<br /><br />
                                        <strong>メール<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {userInfo.email}<br /><br />
                                        <strong>住所<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {userInfo.address}<br /><br />
                                        <strong>レベル<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {userInfo.level}<br /><br />
                                        <strong>性別<span style={{ margin: '0 50px 0 100px' }}>: </span></strong>{userInfo.sex}<br /><br />
                                    </Card.Text>
                                    <Button variant="primary" style={{ margin: "10px", backgroundColor: "#99CC99", border: "none", color: "#000", float: "right" }} onClick={handleEditProfile}>編集</Button>
                                </div>
                            )}
                            {editInfo && (
                                <div>
                                    <br />
                                    <Card.Title style={{ textAlign: "center", fontSize: "30px", color: "#da2525" }}>
                                        <strong>アップデート プロフィール</strong>
                                    </Card.Title><br />
                                    <Form>
                                        <Form.Group controlId="avatar" >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <input type="file" accept="image/*" style={{ display: 'none' }} id="avatar-input" />
                                                <label htmlFor="avatar-input" style={{ marginRight: '10px', cursor: 'pointer', border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000', padding: '5px 10px' }}>
                                                    <PortraitIcon />プロフィール アバター <FontAwesomeIcon icon={faUpload} />
                                                </label>
                                                {userInfo.avatar && (
                                                    <img src={userInfo.avatar} alt="Avatar" style={{ marginLeft: "156px", width: '120px', height: '120px', borderRadius: '20%', float: "right" }} />
                                                )}
                                            </div>
                                        </Form.Group><br />
                                        <Form.Group controlId="name">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.name} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }} />
                                                <FontAwesomeIcon icon={faUser} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div>

                                        </Form.Group><br />

                                        <Form.Group controlId="email">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.email} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }} />
                                                <FontAwesomeIcon icon={faEnvelope} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="location">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.address} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }} />
                                                <FontAwesomeIcon icon={faMapLocationDot} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="level">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.level} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }} />
                                                <FontAwesomeIcon icon={faFlag} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="gender" style={{ alignItem: "center" }}>
                                            <div style={{ display: 'flex', alignItems: "center" }}>
                                                <Form.Check
                                                    type="radio"
                                                    label="男性"
                                                    name="gender"
                                                    id="gender-male"
                                                    defaultChecked={userInfo.sex === 'male'}
                                                    style={{ marginRight: '10px' }}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="女性"
                                                    name="gender"
                                                    id="gender-female"
                                                    defaultChecked={userInfo.sex === 'female'}
                                                    style={{ marginRight: '10px' }}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="第三の性別"
                                                    name="gender"
                                                    id="gender-other"
                                                    defaultChecked={userInfo.sex === 'other'}
                                                />
                                            </div>
                                        </Form.Group>

                                        <Button variant="primary" style={{ margin: "10px", backgroundColor: "#da2525", border: "none", color: "#fff", float: "right" }}>アップデート</Button>
                                    </Form>

                                </div>
                            )}
                            {showClass && (
                                <div>
                                    <br />
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{ backgroundColor: "#fff" }}>
                                        <Row className="flex-column">
                                            <Col sm={{ span: 12 }}>
                                                <Nav variant="pills" className="justify-content-center">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first"
                                                        >受講しているクラス
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">クラスは承認待ち</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                        </Row><br />
                                        <Row>
                                            <Col >
                                                <Tab.Content style={{ width: "550px" }}>
                                                    <Tab.Pane style={{ backgroundColor: "#fff" }} eventKey="first">
                                                        <div style={{ marginRight: "5px", backgroundColor: "#fff" }}>
                                                            <div className="scrollable" style={{ maxHeight: "300px", overflowX: "auto" }}>
                                                                <ListGroup variant="flush">
                                                                    {classStuding.map((classStuding) => {
                                                                        return (
                                                                            <ListGroup.Item key={classStuding.id} style={{ color: "#000", backgroundColor: "#d0facf", border: "1px solid #dce7dc", borderRadius: "5px", marginBottom: "10px" }}>
                                                                                <Card.Text style={{ marginLeft: "10px" }}>
                                                                                    <strong>クラス:<span style={{ margin: '0 50px 0 30px', color: "#000" }}></span></strong> {classStuding.name}<br />
                                                                                    <strong>教師:<span style={{ margin: '0 50px 0 50px', color: "#000" }}> </span></strong> {classStuding.name}<br />

                                                                                    <table>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>レベル :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.level}</span></td>
                                                                                    <td style={{ width: "50px" }}></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>目的 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{userInfo.desired_goal}</span><br /></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>開始日 :</strong>
                                                                                    <span style={{ marginLeft: "10px",  color: "#000" }}>{classStuding.start_date}</span></td>
                                                                                            <td></td>
                                                                                            <td> <strong style={{ display: "inline-block" }}>終了日 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.end_date}</span><br/></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>学費 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.fee}</span></td>
                                                                                            <td></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>曜日 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.day_of_week}</span></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>時間 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.schedule_list[1].time_slot}</span></td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </Card.Text>
                                                                            </ListGroup.Item>
                                                                        );
                                                                    })}
                                                                </ListGroup>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane style={{ backgroundColor: "#fff" }} eventKey="second">
                                                    <div style={{ marginRight: "5px", backgroundColor: "#fff" }}>
                                                            <div className="scrollable" style={{ maxHeight: "300px", overflowX: "auto" }}>
                                                                <ListGroup variant="flush">
                                                                    {classStuding.map((classStuding) => {
                                                                        return (
                                                                            <ListGroup.Item key={classStuding.id} style={{ color: "#000", backgroundColor: "#d0facf", border: "1px solid #dce7dc", borderRadius: "5px", marginBottom: "10px" }}>
                                                                                <Card.Text style={{ marginLeft: "10px" }}>
                                                                                <strong>クラス:<span style={{ margin: '0 50px 0 30px', color: "#000" }}></span></strong> {classStuding.name}<br />
                                                                                    <strong>教師:<span style={{ margin: '0 50px 0 50px', color: "#000" }}> </span></strong> {classStuding.name}<br />
                                                                                    <table>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>レベル :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.level}</span></td>
                                                                                    <td style={{ width: "50px" }}></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>目的 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{userInfo.desired_goal}</span><br /></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>開始日 :</strong>
                                                                                    <span style={{ marginLeft: "10px",  color: "#000" }}>{classStuding.start_date}</span></td>
                                                                                            <td></td>
                                                                                            <td> <strong style={{ display: "inline-block" }}>終了日 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.end_date}</span><br/></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>学費 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.fee}</span></td>
                                                                                            <td></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>曜日 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.day_of_week}</span></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>時間 :</strong>
                                                                                    <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.schedule_list[1].time_slot}</span></td>
                                                                                        </tr>
                                                                                    </table>

                                                                                </Card.Text>
                                                                            </ListGroup.Item>
                                                                        );
                                                                    })}
                                                                </ListGroup>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>
                            )}
                        </Card>
                    </Col>

                </Row>
            </Card.Body>
        </Card >
    );
};

export default Profile;
