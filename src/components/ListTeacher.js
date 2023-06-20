import React, { useState } from "react";
import { Pagination } from "antd";
import ShowTeacher from "./ShowTeacher";
import FilterComponent from './FilterComponent';

import "./ListTeacher.css"


function ListTeacher({teachers}) {
  const [currentPage, setCurrentPage] = useState(1);


  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const currentTeacher = teachers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalItems = teachers.length;


  const handleFilterSubmit = filterData => {
    // Xử lý logic khi nhận được các giá trị filter
    // Gọi API hoặc thực hiện các tác vụ liên quan
    console.log(filterData); // Ví dụ: In ra dữ liệu filter trong console

    // Sau khi xử lý xong, có thể cập nhật dữ liệu kết quả vào state "results"
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
        <ShowTeacher currentTeacher={ currentTeacher } />
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