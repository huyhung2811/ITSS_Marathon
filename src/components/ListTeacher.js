import React, { useState } from "react";
import { Pagination } from "antd";
import ShowTeacher from "./ShowTeacher";
import FilterComponent from './FilterComponent';

import "./ListTeacher.css"
import axios from "axios";


function ListTeacher({teachers}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [points, setPoints] = useState(null);


  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const currentTeacher = teachers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (points !== null){
    var currentTeacherPoint = points.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
  
  }
  

  const indexOfLastStudent = currentPage * pageSize;
  const indexOfFirstStudent = indexOfLastStudent - pageSize;
  const totalItems = teachers.length;


  const handleFilterSubmit = (location, level, day, timeSlot, fee, sex, age, goal, dem) => {
    console.log(location, level, day, timeSlot, fee, sex, age, goal, dem);
    axios.post('http://127.0.0.1:8000/api/matching', { 
      salary: fee, address: location,
      sex: sex, age: age,
      goal: goal, level: level,
      day_of_week: day, time_slot: timeSlot,
      dem: dem
    })
    .then(response => {
      setPoints(response.data);
      
    console.log('thanh cong');
    })
    .catch(error => {
      console.log("loi");
    });
    setCurrentPage(1);
    
  };

  return (
    <div className="listTeacher-container">
       <div className="filter-container">
        <FilterComponent onSubmit={handleFilterSubmit} />
      </div>   
      <div className="list-paginate">
      <div className = "filter-results"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        { points !== null ? (
        <ShowTeacher currentTeacher={ currentTeacherPoint } indexOfFirstStudent={indexOfFirstStudent} />
        ):(
        <ShowTeacher currentTeacher={ currentTeacher } indexOfFirstStudent={indexOfFirstStudent} />
        )}

      </div>
      <div className = "paginate-numbers">
      <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
        </div>
    </div>
    </div>
  );
}

export default ListTeacher;