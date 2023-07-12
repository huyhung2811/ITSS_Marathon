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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { storage } from '../firebase';

const Profile = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [showInfo, setShowInfo] = useState(true);
    const [showClass, setShowClass] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const [classStuding, setClassStuding] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [image, setImage] = useState(userInfo.avatar);
    const user_id = localStorage.getItem('userid');

    useEffect(() => {
        async function fetchClassStuding() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-class-by-user/${user_id}`,
                );
                setClassStuding(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchClassStuding();
    }, []);
    console.log(`Class`, classStuding)
    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const userId = localStorage.getItem('userid');
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/users/${user_id}`,
                );
                setUserInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserInfo();
    }, []);

    console.log("hehe", userInfo);

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
            const imageRef = ref(storage, `images/${file.name}`);
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    console.log("Download URL:", url);
                    setImage(url);
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
        setUserInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleGenderChange = (e) => {
        setUserInfo((prevState) => ({
            ...prevState,
            sex: e.target.value
        }));
    };
    console.log("Change", userInfo);
    const handleSubmitEdit = () => {
        setUserInfo((prevData) => ({
            ...prevData,
            avatar: image,
        }));
        axios.put('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/edit-info', userInfo)
            .then(response => {
                // Xử lý phản hồi từ API sau khi gửi thành công
                console.log("OK", response.data);
            })
            .catch(error => {
                // Xử lý lỗi khi gửi yêu cầu
                console.error(error);
            });
        setShowInfo(true);
        setEditInfo(false);
    };

    return (
        <Card className="text-center mx-auto" style={{ width: "1400px" }}>
            <Card.Body>
                <Row>
                    <Col style={{ marginLeft: "50px", width: "400px" }}>
                        <Card style={{ width: "400px", justifyContent: "center", backgroundColor: "#75593e" }}>
                            <br />
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                                {userInfo.avatar ? 
                                <Card.Img src={userInfo.avatar} alt="Avatar" style={{ width: '180px', height: '180px', borderRadius: '20%' }} />
                                : 
                                <Card.Img src={"https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"} alt="Avatar" style={{ width: '180px', height: '180px', borderRadius: '20%' }} />
                                }
                                 <br /><br /> <br />
                                {/* https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png */}
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
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                                        {userInfo.avatar ? 
                                        <Card.Img src={userInfo.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '20%' }} />
                                        : 
                                        <Card.Img src={"https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '20%' }} />
                                        }
                                        <br /><br /> <br />
                                    {/* https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png */}
                                    </div>
                                    <Card.Text style={{ marginLeft: "70px" }}>
                                        <strong>名前<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {userInfo.name}<br /><br />
                                        <strong>メール<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {userInfo.email}<br /><br />
                                        <strong>住所<span style={{ margin: '0 50px 0 100px' }}>: </span></strong> {userInfo.address}<br /><br />
                                        <strong>レベル<span style={{ margin: '0 50px 0 85px' }}>: </span></strong> {userInfo.level}<br /><br />
                                        <strong>性別<span style={{ margin: '0 50px 0 100px' }}>: </span></strong>{userInfo.sex === 'female' ? '女性' : '男性'}<br /><br />
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
                                                <input type="file" accept="image/*" style={{ display: 'none' }} id="avatar-input" onChange={handleAvatarChange} />
                                                <label htmlFor="avatar-input" style={{ marginRight: '10px', cursor: 'pointer', border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000', padding: '5px 10px' }}>
                                                    <PortraitIcon />プロフィール アバター <FontAwesomeIcon icon={faUpload} />
                                                </label>
                                                {console.log(image)}
                                                {image &&
                                                    <img src={image} alt="Avatar" style={{ marginLeft: "156px", width: '120px', height: '120px', borderRadius: '20%', float: "right", border: "1px solid #000" }} />
                                                }

                                            </div>
                                        </Form.Group><br />
                                        <Form.Group controlId="name">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.name} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }}
                                                    onChange={(e) => handleChange("name", e.target.value)}
                                                />
                                                <FontAwesomeIcon icon={faUser} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div>

                                        </Form.Group><br />

                                        <Form.Group controlId="email">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.email} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }}
                                                    onChange={(e) => handleChange("email", e.target.value)}
                                                />
                                                <FontAwesomeIcon icon={faEnvelope} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="address">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.address} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }}
                                                    onChange={(e) => handleChange("address", e.target.value)}
                                                />
                                                <FontAwesomeIcon icon={faMapLocationDot} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="level">
                                            <div style={{ position: "relative" }}>
                                                <Form.Control type="text" value={userInfo.level} style={{ paddingLeft: "30px", border: '1px solid #000', borderRadius: "10px", background: '#d1d1d1', color: '#000' }}
                                                    onChange={(e) => handleChange("level", e.target.value)}
                                                />
                                                <FontAwesomeIcon icon={faFlag} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                                            </div><FontAwesomeIcon />
                                        </Form.Group><br />

                                        <Form.Group controlId="gender" style={{ alignItem: "center" }}>
                                            <div style={{ display: 'flex', alignItems: "center" }}>
                                                <Form.Check
                                                    type="radio"
                                                    label="男性"
                                                    name="gender"
                                                    value="male"
                                                    id="gender-male"
                                                    defaultChecked={userInfo.sex === 'male'}
                                                    onChange={handleGenderChange}
                                                    style={{ marginRight: '10px' }}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="女性"
                                                    name="gender"
                                                    value="female"
                                                    id="gender-female"
                                                    defaultChecked={userInfo.sex === 'female'}
                                                    onChange={handleGenderChange}
                                                    style={{ marginRight: '10px' }}
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="第三の性別"
                                                    name="gender"
                                                    value="other"
                                                    id="gender-other"
                                                    onChange={handleGenderChange}
                                                    defaultChecked={userInfo.sex === 'other'}
                                                />
                                            </div>
                                        </Form.Group>

                                        <Button onClick={handleSubmitEdit} variant="primary" style={{ margin: "10px", backgroundColor: "#da2525", border: "none", color: "#fff", float: "right" }}>アップデート</Button>
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
                                                                            <ListGroup.Item key={classStuding.id} style={{ padding: "0px", color: "#000", backgroundColor: "#d0facf", border: "1px solid #dce7dc", borderRadius: "5px", marginBottom: "10px" }}>
                                                                                <Card.Text style={{ marginLeft: "10px" }}>
                                                                                    <strong>クラス:<span style={{ margin: '0 20px 0 30px', color: "#000" }}></span></strong> {classStuding.name_class}<br />
                                                                                    <strong>教師:<span style={{ margin: '0 16px 0 50px', color: "#000" }}> </span></strong> {classStuding.teacher}<br />

                                                                                    <table>
                                                                                        <tr>
                                                                                            <td><strong style={{ display: "inline-block" }}>レベル :</strong>
                                                                                                <span style={{ marginLeft: "48px", color: "#000" }}>{classStuding.level}</span></td>
                                                                                            <td style={{ width: "30px" }}></td>
                                                                                            <td style={{ marginLeft: "30px" }}><strong style={{ display: "inline-block" }}>目的 :</strong>
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
                                                                                            <td style={{ padding: "0px" }}><strong style={{ display: "inline-block" }}>時間 :</strong>
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
