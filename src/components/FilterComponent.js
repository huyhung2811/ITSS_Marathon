import React, { useState } from "react";

const FilterComponent = ({ onSubmit }) => {
    const [location, setLocation] = useState("");
    const [level, setLevel] = useState("");
    const [day, setDay] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [fee, setFee] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [goal, setGoal] = useState("");

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <div className="container">
            <h3 className="text-center mt-3">フィルター</h3>
            <ul className="filter-ul p-0">
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">thu</lable>
                        <div className="col-8">
                            <select style={{ height: '40px' }} className="w-75 rounded" value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="All">All</option>
                                <option value="2">thu 2</option>
                                <option value="3">thu 3</option>
                                <option value="4">thu 4</option>
                                <option value="5">thu 5</option>
                                <option value="6">thu 6</option>
                                <option value="7">thu 7</option>
                                <option value="8">chu nhat</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">kip</lable>
                        <div className="col-8">
                            <select
                                style={{ height: '40px' }}
                                className="w-75 rounded"
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="1">タイムスロット 1</option>
                                <option value="2">タイムスロット 2</option>
                                <option value="3">タイムスロット 3</option>
                                <option value="4">タイムスロット 4</option>
                                <option value="5">タイムスロット 5</option>
                                <option value="6">タイムスロット 6</option>
                                <option value="7">タイムスロット 7</option>
                                <option value="8">タイムスロット 8</option>
                                <option value="9">タイムスロット 9</option>
                                <option value="10">タイムスロット 10</option>
                                <option value="11">タイムスロット 11</option>
                                <option value="12">タイムスロット 12</option>
                                <option value="13">タイムスロット 13</option>
                                <option value="14">タイムスロット 14</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">料金</lable>
                        <div className="col-8">
                            <input
                                style={{ height: '40px' }}
                                className="w-75 rounded"
                                type="text"
                                value={fee}
                                onChange={(e) => setFee(e.target.value)}
                            />
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">場所</lable>
                        <div className="col-8">
                            <input
                                style={{ height: '40px' }}
                                className="w-75 rounded"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">性別</lable>
                        <div className="col-8">
                            <select style={{ height: '40px' }} className="w-75 rounded" value={sex} onChange={(e) => setSex(e.target.value)}>
                                <option value="All">All</option>
                                <option value="female">女</option>
                                <option value="male">男</option>
                                <option value="third gender">第三の性別</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">tuoi</lable>
                        <div className="col-8">
                            <input
                                style={{ height: '40px' }}
                                className="w-75 rounded"
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">目的</lable>
                        <div className="col-8">
                            <select style={{ height: '40px' }} className="w-75 rounded" value={goal} onChange={(e) => setGoal(e.target.value)}>
                                <option value="All">All</option>
                                <option value="仕事に行く">仕事に行く </option>
                                <option value="勉強">勉強</option>
                                <option value="試験に受ける">試験に受ける</option>
                                <option value="基本的なコミュニケーション">
                                    基本的なコミュニケーション
                                </option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="my-5">
                    <div className="row d-flex align-items-center justify-content-center">
                        <lable className="col-4 text-end text-white">レベル</lable>
                        <div className="col-8">
                            <select
                                style={{ height: '40px' }}
                                className="w-75 rounded"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="1">A1</option>
                                <option value="2">A2</option>
                                <option value="3">B1</option>
                                <option value="4">B2</option>
                                <option value="5">C1</option>
                                <option value="6">C2</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li className="my-3">
                    <div className="d-flex justify-content-center">
                        <button className="rounded border-0 text-center mt-2 mx-2 p-2 bg-white text-success" onClick={handleSubmit}>申し込み</button>
                        <button className="rounded border-0 text-center mt-2 mx-2 p-2 bg-white text-danger">キャンセル</button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FilterComponent;