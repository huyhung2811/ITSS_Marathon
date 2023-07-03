import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';

const TeacherAdd = () => {
    const [teacherData, setTeacherData] = useState({
        name: '',
        phone: '',
        birthday: '',
        gender: '',
        cvFile: null,
        salary: '',
        level: '',
        address: '',
        additionalInfo: '',
        avatar: null,
    });

    const districts = [
        "Ba Dinh",
        "Hoan Kiem",
        "Hai Ba Trung",
        "Dong Da",
        "Tay Ho",
        "Cau Giay",
        "Thanh Xuan",
        "Hoang Mai",
        "Long Bien",
        "Bac Tu Liem",
        "Nam Tu Liem",
        "Ha Dong",
        "Son Tay",
        "Ba Vi",
        "Phuc Tho",
        "Dan Phuong",
        "Hoai Duc",
        "Thach That",
        "Quoc Oai",
        "Chuong My",
        "Thanh Oai",
        "Thuong Tin",
        "Phu Xuyen",
        "Me Linh",
        "Dong Anh",
        "Gia Lam",
        "Soc Son",
        "Thanh Tri",
        "My Duc",
        "Ung Hoa",
    ];


    const districtOptions = districts.map((district) => (
        <option key={district} value={district}>{district}</option>
    ));
    const handleChange = (name, value) => {
        setTeacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setTeacherData((prevData) => ({
            ...prevData,
            cvFile: file,
        }));
    };
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setTeacherData((prevData) => ({
            ...prevData,
            avatar: file,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(teacherData);
        setTeacherData({
            name: '',
            phone: '',
            birthday: '',
            gender: '',
            cvFile: null,
            salary: '',
            level: '',
            address: '',
            additionalInfo: '',
            avatar: null,
        });
    };

    return (
        <div style={{ color: "#0f5204", backgroundColor: "#fff", padding: "20px" }}>
            <br />
            <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
                <strong>新しい先生を追加する</strong>
            </Card.Title><br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "50%", paddingRight: "20px", marginLeft: "10%" }}>
                    <Form onSubmit={handleSubmit} style={{ alignItems: "center", justifyContent: "center" }}>
                        <Form.Group controlId="name" className="d-flex align-items-center">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                名:
                            </div>
                            <div style={{ position: "relative" }}>
                                <Form.Control type="text" name="name" value={teacherData.name} onChange={(e) => handleChange("name", e.target.value)} style={{ marginLeft: "47px", width: "300px", paddingLeft: "5px", border: '1px solid #000', borderRadius: "10px", color: '#000' }} />
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="birthday">
                            <div style={{ position: "relative" }}>
                                生年月日:
                                <DatePicker onChange={(date, dateString) => handleChange("birthday", dateString)} style={{ marginLeft: "10px", width: "300px" }} />
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="cvFile">
                            <div style={{ position: "relative" }}>
                                CV:
                                <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} id="cv-file" onChange={handleFileChange} />
                                <label htmlFor="cv-file" style={{ marginLeft: "53px", marginRight: '10px', cursor: 'pointer', border: '1px solid #000', borderRadius: "10px", padding: '5px 10px' }}>
                                    アップロード <FontAwesomeIcon icon={faUpload} />
                                </label>
                                {teacherData.cvFile && (
                                    <span style={{ marginLeft: '5px' }}>{teacherData.cvFile.name}</span>
                                )}
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="level" className="d-flex align-items-center">
                            <div style={{ position: "relative", marginRight: "10px", minWidth: "50px" }}>
                                レベル:
                            </div>
                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                <Form.Control as="select" name="level" value={teacherData.level} onChange={(e) => handleChange("level", e.target.value)} style={{ marginLeft: "14px", width: "300px", border: '1px solid #000', borderRadius: "10px", color: '#000' }}>
                                    <option value="">選択してください</option>
                                    <option value="初級">初級</option>
                                    <option value="中級">中級</option>
                                    <option value="上級">上級</option>
                                </Form.Control>
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="additionalInfo" className="d-flex">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                他の要件:
                            </div>
                            <div style={{ position: "relative" }}>
                                <Form.Control as="textarea" name="additionalInfo" value={teacherData.additionalInfo} onChange={(e) => handleChange("additionalInfo", e.target.value)} style={{ width: "300px", height: "100px", paddingLeft: "5px", border: '1px solid #000', borderRadius: "10px", color: '#000' }} />
                            </div>
                        </Form.Group><br />

                        <Button variant="primary" type="submit" style={{ margin: "10px", backgroundColor: "#feaf00", border: "none", color: "#fff", float: "center" }}>新規追加</Button>
                    </Form>
                </div>

                <div style={{ width: "50%", paddingLeft: "20px" }}>
                    <Form>
                        <Form.Group controlId="phone" className="d-flex align-items-center">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                電話番号:
                            </div>
                            <div style={{ position: "relative" }}>
                                <Form.Control type="text" name="phone" value={teacherData.phone} onChange={(e) => handleChange("phone", e.target.value)} style={{ width: "300px", paddingLeft: "5px", border: '1px solid #000', borderRadius: "10px", color: '#000' }} />
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="gender" className="d-flex align-items-center">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                性別:
                            </div>
                            <div style={{ position: "relative" }}>
                                <Form.Control as="select" name="gender" value={teacherData.gender} onChange={(e) => handleChange("gender", e.target.value)} style={{ width: "300px", marginLeft: "30px", border: '1px solid #000', borderRadius: "10px", color: '#000' }}>
                                    <option value=""></option>
                                    <option value="男性">男性</option>
                                    <option value="女性">女性</option>
                                    <option value="第三の性別">第三の性別</option>
                                </Form.Control>
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="salary" className="d-flex align-items-center">
                            <div style={{ position: "relative", marginRight: "10px", minWidth: "50px" }}>
                                料金:
                            </div>
                            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                <Form.Control type="text    " name="salary" value={teacherData.salary} onChange={(e) => handleChange("salary", e.target.value)} style={{ marginLeft: "16px", width: "300px", paddingLeft: "5px", border: '1px solid #000', borderRadius: "10px", color: '#000' }} />
                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="address" className="d-flex">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                住所:
                            </div>
                            <div style={{ position: "relative" }}>
                                <Form.Control
                                    as="select"
                                    name="address"
                                    value={teacherData.address}
                                    onChange={(e) => handleChange("address", e.target.value)}
                                    size={5} // Số lựa chọn hiển thị
                                    style={{
                                        width: "300px",
                                        marginLeft: "30px",
                                        border: "1px solid #000",
                                        borderRadius: "10px",
                                        color: "#000",
                                        overflow: "auto", // Hiển thị thanh cuộn nếu có nhiều lựa chọn
                                    }}
                                >
                                    <option value=""></option>
                                    {districtOptions}
                                </Form.Control>

                            </div>
                        </Form.Group><br />

                        <Form.Group controlId="avatar" className="d-flex">
                            <div style={{ position: "relative", marginRight: "10px" }}>
                                アバター:
                            </div>
                            <div style={{ position: "relative" }}>
                                <input type="file" accept="image/*" style={{ display: 'none' }} id="avatar-file" onChange={handleAvatarChange} />
                                <label htmlFor="avatar-file" style={{ marginLeft: "10px", marginRight: '10px', cursor: 'pointer', border: '1px solid #000', borderRadius: "10px", padding: '5px 10px' }}>
                                    アップロードアバター <FontAwesomeIcon icon={faUpload} />
                                </label>
                            </div>
                            {teacherData.avatar && (
                                    <img src={teacherData.avatar} alt="Avatar" style={{ marginLeft: "15px", width: '120px', height: '120px', borderRadius: '20%', float: "right" }} />
                                )}
                        </Form.Group><br />

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default TeacherAdd;