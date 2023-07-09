import React, { useState, useContext, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMapLocationDot, faFlag, faUpload } from '@fortawesome/free-solid-svg-icons';
import PortraitIcon from '@mui/icons-material/Portrait';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import SkeletonImage from 'antd/es/skeleton/Image';

const Profile = () => {
    const { isLoggedIn, currentUser, login, logout } = useContext(AuthContext);
    const [showInfo, setShowInfo] = useState(true);
    const [showClass, setShowClass] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const [image, setImage] = useState("data:image/jpeg;base64,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");
    const [classStuding, setClassStuding] = useState({});

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

    useEffect(() => {
        async function fetchClassStuding() {
            try {
                const response = await axios.get(
                    'https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-class-by-user/1',
                );
                setClassStuding(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClassStuding();
    }, []);

    console.log("hehe", classStuding);

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
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        console.log("alo" + file);

        if (file) {
            const imageRef = ref(Storage, `images/${file.name}`);
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log("Download URL:", url);
                    // setUserInfo((prevData) => ({
                    //     ...prevData,
                    //     avatar: url,
                    // }));
                    SkeletonImage(url);
                });
            });
        }
    };
    const handleEditProfile = () => {
        setShowInfo(false);
        setEditInfo(true);
        console.log('Edit profile');
    };
    const handleChange = (name, value) => {
        // setUserInfo((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        // }));
    };
    const handleSubmitEdit=()=>{

    };

    console.log('user', currentUser);
    return (
        <Card className="text-center mx-auto" style={{ width: "1400px" }}>
            <Card.Body>
                <Row>
                    <Col style={{ marginLeft:"50px",width: "400px" }}>
                        <Card style={{ width: "400px", justifyContent: "center", backgroundColor: "#75593e" }}>
                            <br />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Card.Img src={userInfo.avatar} alt="Avatar" style={{ width: '200px', height: '200px', borderRadius: '20%', marginRight: '20px' }} /> <br /><br /> <br />
                            </div>
                            <Card.Body>
                                <Button variant="link" onClick={handleShowInfo}>アカウント情報</Button> <br /><br />
                                <Button variant="link" onClick={handleShowClass} className="transparent-button">クラス情報</Button> <br /><br /> <br /><br /><br /><br /> <br /><br />
                                <Button onClick={logout} style={{ color: "red", backgroundColor: "#fff", border: "none" }}>ログアウト</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: "800px", marginRight: "50px" }}>
                        <Card style={{ width: '800px', textAlign: "left", padding: "40px" }}>
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
                                                <input type="file" accept="image/*" style={{ display: 'none' }} id="avatar-input" onChange={handleAvatarChange}/>
                                                <label htmlFor="avatar-input" style={{ marginRight: '10px', cursor: 'pointer', border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000', padding: '5px 10px' }}>
                                                    <PortraitIcon />プロフィール アバター <FontAwesomeIcon icon={faUpload} />
                                                </label>
                                                {image && (
                                                    <img src={image} alt="Avatar" style={{ marginLeft: "156px", width: '120px', height: '120px', borderRadius: '20%', float: "right" }} />
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
                                                <Tab.Content style={{ width: "730px" }}>
                                                    <Tab.Pane style={{ backgroundColor: "#fff" }} eventKey="first">
                                                        <div style={{ marginRight: "5px", backgroundColor: "#fff" }}>
                                                            <div className="scrollable" style={{ maxHeight: "450px", overflowX: "auto" }}>
                                                                <ListGroup variant="flush">
                                                                    {classStuding && classStuding.map((classStuding) => {
                                                                        return (
                                                                            <ListGroup.Item key={classStuding.id} style={{ padding:"0px", color: "#000", backgroundColor: "#d0facf", border: "1px solid #dce7dc", borderRadius: "5px", marginBottom: "10px" }}>
                                                                                <Card.Text style={{ marginLeft: "10px" }}>
                                                                                    <strong>クラス:<span style={{ margin: '0 20px 0 30px', color: "#000" }}></span></strong> {classStuding.name_class}<br />
                                                                                    <strong>教師:<span style={{ margin: '0 16px 0 50px', color: "#000" }}> </span></strong> {classStuding.teacher}<br />

                                                                                    <table>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>レベル :</strong>
                                                                                                <span style={{ marginLeft: "48px", color: "#000" }}>{classStuding.level}</span></td>
                                                                                            <td style={{ width: "30px" }}></td>
                                                                                            <td style={{marginLeft: "30px"}}><strong style={{ display: "inline-block" }}>目的 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.goal}</span><br /></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>開始日 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.start_date}</span></td>
                                                                                            <td></td>
                                                                                            <td> <strong style={{ display: "inline-block" }}>終了日 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.end_date}</span><br /></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>学費 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.fee}</span></td>
                                                                                            <td></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>曜日 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.timeslot.day_of_week}</span></td>
                                                                                            <td style={{padding:"0px"}}><strong style={{ display: "inline-block" }}>時間 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.timeslot.time_slot}</span></td>
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
                                                                    {classStuding && classStuding.map((classStuding) => {
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
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.start_date}</span></td>
                                                                                            <td></td>
                                                                                            <td> <strong style={{ display: "inline-block" }}>終了日 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.end_date}</span><br /></td>
                                                                                            <td></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>学費 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.fee}</span></td>
                                                                                            <td></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>曜日 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.timeslot.day_of_week}</span></td>
                                                                                            <td><strong style={{ display: "inline-block" }}>時間 :</strong>
                                                                                                <span style={{ marginLeft: "10px", color: "#000" }}>{classStuding.timeslot.time_slot}</span></td>
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
