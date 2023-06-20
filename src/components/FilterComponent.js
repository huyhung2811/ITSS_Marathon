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
    <div>
      <ul className="filter-ul">
        <li>
          <label className="filter-component">
            thu
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value="All">All</option>
              <option value="2">thu 2</option>
              <option value="3">thu 3</option>
              <option value="4">thu 4</option>
              <option value="5">thu 5</option>
              <option value="6">thu 6</option>
              <option value="7">thu 7</option>
              <option value="8">chu nhat</option>
            </select>
          </label>
        </li>
        <li>
          <label className="filter-component">
            kip
            <select
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
          </label>
        </li>
        <li>
          <label className="filter-component">
            料金
            <input
              type="text"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="filter-component">
            場所
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="filter-component">
            性別
            <select value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="All">All</option>
              <option value="female">女</option>
              <option value="male">男</option>
              <option value="third gender">第三の性別</option>
            </select>
          </label>
        </li>
        <li>
          <label className="filter-component">
            tuoi
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </li>
        <li>
          <label className="filter-component">
            目的
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="All">All</option>
              <option value="仕事に行く">仕事に行く </option>
              <option value="勉強">勉強</option>
              <option value="試験に受ける">試験に受ける</option>
              <option value="基本的なコミュニケーション">
                基本的なコミュニケーション
              </option>
            </select>
          </label>
        </li>
        <li>
          <label className="filter-component">
            レベル
            <select
              className="filter-component"
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
          </label>
        </li>
        <li>
          <div className="filter-component">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
