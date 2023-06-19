import React, { useState } from "react";
import { Pagination, Select } from "antd";
import ShowTeacher from "./ShowTeacher";
import SearchTeacher from "../search/SearchTeacher";
import FilterComponent from './FilterComponent';

import "./ListTeacher.css"

const { Option } = Select;

function ListTeacher({teachers}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [studyFromValue, setStudyFromValue] = useState("All");
  const [levelValue, setLevelValue] = useState("All");
  const [timeSlotValue, setTimeSlotValue] = useState("All");
  const [searchData, setSearchData] = useState(teachers);
  const [isSearch, setIsSearch] = useState(false);

  var showData = teachers;


  const pageSize = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (value) => {
    setStudyFromValue(value);
    setIsSearch(false);
    setCurrentPage(1);
  };

  const handleFilterLevelChange = (value) => {
    setLevelValue(value);
    setIsSearch(false);
    setCurrentPage(1);
  };
  const handleFilterTimeSlotChange = (value) => {
    setTimeSlotValue(value);
    setIsSearch(false);
    setCurrentPage(1);
  };

  const handleSearchDataChange = (data) => {
    setSearchData(data);
    setIsSearch(true);
    setCurrentPage(1);
  };
// hình thức dạy học online/offline
const handleStudyForm = () => {
  var filteredStudyForm = [];
  teachers.forEach(teacher => {
        var check = teacher.classes.filter((lop) => {
            if (studyFromValue === "All") {
              return true;
            }
            return lop.type === studyFromValue;
        });
        if(check.length > 0){
          filteredStudyForm.push(teacher);
        }
  });
  if (filteredStudyForm.length > 0) {
    showData = filteredStudyForm;
  };
};
handleStudyForm();
  // const filteredStudyForm = teachers.filter((teacher) => {
  //   if (studyFromValue === "All") {
  //     return true;
  //   }
  //   return teacher.study_form === studyFromValue;
  // });
  

// cấp độ dạy học A1 A2 B1 ...
  
  const filteredLevel = showData.filter((teacher) => {
    if (levelValue === "All") {
      return true;
    }
    return teacher.level === levelValue;
  });
  if (filteredLevel.length > 0) {
    showData = filteredLevel;
  }

// kíp học: kíp 1 - 14
const handleTimeSlot = () => {
  var filteredTimeSlot = [];
  showData.forEach(teacher => {
    var check = [];
    teacher.classes.forEach(lop => {
      var timeSlot = lop.schedule_list.filter((slot) => {
          if (timeSlotValue === "All") {
            return true;
          }
          return slot.time_slot === timeSlotValue;
      });
      if(timeSlot.length > 0){
        check.push(lop);
      }
    });
    if(check.length > 0){
      filteredTimeSlot.push(teacher);
    }
  });
  if (filteredTimeSlot.length > 0) {
    showData = filteredTimeSlot;
  }
}
handleTimeSlot();
  // const filteredTimeSlot = showData.filter((teacher) => {
  //   if (timeSlotValue === "All") {
  //     return true;
  //   }
  //   return teacher.time_slot === timeSlotValue;
  // });
  

  const currentTeacher = showData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalItems = isSearch ? searchData.length : showData.length;
  const currentTeacherSearch = searchData.slice((currentPage - 1) * pageSize, currentPage * pageSize);


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
        { isSearch ?(
                <ShowTeacher currentTeacher={ currentTeacherSearch } />
                ):(
                    <ShowTeacher currentTeacher={ currentTeacher } />
                )
            }
       
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