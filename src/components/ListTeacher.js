import React, { useState } from "react";
import { Pagination } from "antd";
import ShowTeacher from "./ShowTeacher";
import FilterComponent from "./FilterComponent";

import "./ListTeacher.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function ListTeacher({ teachers }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [points, setPoints] = useState(null);
  const [buttonClick, setButtonClick] = useState(false);

  const handleShowFilter = () => {
    setButtonClick(!buttonClick);
  };

  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentTeacher = teachers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (points !== null) {
    var currentTeacherPoint = points.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  }

  const indexOfLastStudent = currentPage * pageSize;
  const indexOfFirstStudent = indexOfLastStudent - pageSize;
  const totalItems = teachers.length;

  const handleFilterSubmit = (
    location,
    level,
    day,
    timeSlot,
    fee,
    sex,
    age,
    goal,
    dem
  ) => {
    console.log(location, level, day, timeSlot, fee, sex, age, goal, dem);
    axios
      .post(
        "https://be-marathonwebsite-ruler-production-93fe.up.railway.app/api/matching",
        {
          salary: fee,
          address: location,
          sex: sex,
          age: age,
          goal: goal,
          level: level,
          day_of_week: day,
          time_slot: timeSlot,
          dem: dem,
        }
      )
      .then((response) => {
        setPoints(response.data);

        console.log("thanh cong");
      })
      .catch((error) => {
        console.log("loi");
      });
    setCurrentPage(1);
  };

  return (
    <>
      <div className="m-0 py-1 my-1" style={{ backgroundColor: "#ADD8E1" }}>
        <p className="fw-bold fs-4 m-0">
          <FontAwesomeIcon
            className="mx-5"
            icon={faFilter}
            style={{ color: "#1A9360" }}
            role="button"
            onClick={handleShowFilter}
          />
          条件に合わせて
          <span className="text-danger">最適な教師</span>
          を見つける！
        </p>
      </div>
      <div className="listTeacher-container">
        {buttonClick && (
          <div className="filter-container">
            <FilterComponent onSubmit={handleFilterSubmit} handleShowFilter={handleShowFilter}/>
          </div>
        )}

        <div className="list-paginate">
          <div
            className="filter-results"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {points !== null ? (
              <ShowTeacher
                currentTeacher={currentTeacherPoint}
                indexOfFirstStudent={indexOfFirstStudent}
              />
            ) : (
              <ShowTeacher
                currentTeacher={currentTeacher}
                indexOfFirstStudent={indexOfFirstStudent}
              />
            )}
          </div>
          <div className="paginate-numbers">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalItems}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListTeacher;
