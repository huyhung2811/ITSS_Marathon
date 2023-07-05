import React, { useState } from "react";
import "./FilterCss.css";
const FilterComponent = ({ onSubmit, handleShowFilter }) => {
  const [location, setLocation] = useState("All");
  const [level, setLevel] = useState("All");
  const [day, setDay] = useState("All");
  const [timeSlot, setTimeSlot] = useState("All");
  const [fee, setFee] = useState(null);
  const [sex, setSex] = useState("All");
  const [age, setAge] = useState(null);
  const [goal, setGoal] = useState("All");

  const handleSubmit = () => {
    var dem = 0;
    if (location !== "All") {
      dem = dem + 1;
    }
    if (level !== "All") {
      dem = dem + 1;
    }
    if (day !== "All") {
      dem = dem + 1;
    }
    if (timeSlot !== "All") {
      dem = dem + 1;
    }
    if ((fee !== null)&&(fee !== '')) {
      dem = dem + 1;
    }
    if (sex !== "All") {
      dem = dem + 1;
    }
    if ((age !== null)&&(fee !== '')) {
      dem = dem + 1;
    }
    if (goal !== "All") {
      dem = dem + 1;
    }
    onSubmit(location, level, day, timeSlot, fee, sex, age, goal, dem);
  };

  return (
    <div className="container">
      
      <ul className="filter-ul p-0">
      <h3 className="text-center mt-3">フィルター</h3>
        <li className="my-5">
          <div className="row d-flex align-items-center justify-content-center">
            <lable className="col-4 text-end text-white">曜日</lable>
            <div className="col-8">
              <select
                style={{ height: "40px" }}
                className="w-75 rounded"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="All">All</option>
                <option value="2">月曜日</option>
                <option value="3">火曜日</option>
                <option value="4">水曜日</option>
                <option value="5">木曜日</option>
                <option value="6">金曜日</option>
                <option value="7">土曜日</option>
                <option value="8">日曜日</option>
              </select>
            </div>
          </div>
        </li>
        <li className="my-5">
          <div className="row d-flex align-items-center justify-content-center">
            <lable className="col-4 text-end text-white">タイムスロット</lable>
            <div className="col-8">
              <select
                style={{ height: "40px" }}
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
                style={{ height: "40px" }}
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
              <select
                style={{ height: "40px" }}
                className="w-75 rounded"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Ba Dinh">Ba Dinh</option>
                <option value="Hoan Kiem">Hoan Kiem</option>
                <option value="Hai Ba Trung">Hai Ba Trung</option>
                <option value="Dong Da">Dong Da</option>
                <option value="Tay Ho">Tay Ho</option>
                <option value="Cau Giay">Cau Giay</option>
                <option value="Thanh Xuan">Thanh Xuan</option>
                <option value="Hoang Mai">Hoang Mai</option>
                <option value="Long Bien">Long Bien</option>
                <option value="Bac Tu Liem">Bac Tu Liem</option>
                <option value="Nam Tu Liem">Nam Tu Liem</option>
                <option value="Ha Dong">Ha Dong</option>
                <option value="Son Tay">Son Tay</option>
                <option value="Ba Vi">Ba Vi</option>
                <option value="Phuc Tho">Phuc Tho</option>
                <option value="Dan Phuong">Dan Phuong</option>
                <option value="Hoai Duc">Hoai Duc</option>
                <option value="Thach That">Thach That</option>
                <option value="Quoc Oai">Quoc Oai</option>
                <option value="Chuong My">Chuong My</option>
                <option value="Thanh Oai">Thanh Oai</option>
                <option value="Thuong Tin">Thuong Tin</option>
                <option value="Phu Xuyen">Phu Xuyen</option>
                <option value="Me Linh">Me Linh</option>
                <option value="Dong Anh">Dong Anh</option>
                <option value="Gia Lam">Gia Lam</option>
                <option value="Soc Son">Soc Son</option>
                <option value="Thanh Tri">Thanh Tri</option>
                <option value="My Duc">My Duc</option>
                <option value="Ung Hoa">Ung Hoa</option>
              </select>
            </div>
          </div>
        </li>
        <li className="my-5">
          <div className="row d-flex align-items-center justify-content-center">
            <lable className="col-4 text-end text-white">性別</lable>
            <div className="col-8">
              <select
                style={{ height: "40px" }}
                className="w-75 rounded"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
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
            <lable className="col-4 text-end text-white">年歴</lable>
            <div className="col-8">
              <input
                style={{ height: "40px" }}
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
              <select
                style={{ height: "40px" }}
                className="w-75 rounded"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
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
                style={{ height: "40px" }}
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
            <button
              className="rounded border-0 text-center mt-2 mx-2 p-2 bg-white text-success"
              onClick={handleSubmit}
            >
              申し込み
            </button>
            <button className="rounded border-0 text-center mt-2 mx-2 p-2 bg-white text-danger"
            onClick={handleShowFilter}
            >
              キャンセル
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
