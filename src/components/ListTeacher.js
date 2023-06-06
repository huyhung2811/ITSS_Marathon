import React, { useState } from "react";
import { Pagination, Select } from "antd";
import ShowTeacher from "./ShowTeacher";
import SearchTeacher from "../search/SearchTeacher";
import Header1 from "./Header1"
import Footer1 from "./Footer1"

const { Option } = Select;

function ListTeacher({teachers}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [studyFromValue, setStudyFromValue] = useState("All");
  const [levelValue, setLevelValue] = useState("All");
  const [timeSlotValue, setTimeSlotValue] = useState("All");
  const [searchData, setSearchData] = useState(teachers);
  const [isSearch, setIsSearch] = useState(false);

  var showData = teachers;


  const pageSize = 8;

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


  return (
    <div>
      <Header1 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <SearchTeacher
            teachers={showData}
            setSearchData={handleSearchDataChange}
            setIsSearch={setIsSearch}
            paginate={handlePageChange}
          />
        </div>
        
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ marginRight: "10px", fontWeight: "bold" }}
            htmlFor="timeSlot"
          >
            タイムスロット:
          </label>
          <Select
            id="timeSlot"
            style={{ width: "200px" }}
            value={timeSlotValue}
            onChange={handleFilterTimeSlotChange}
          >
            <Option value="All">All</Option>
            <Option value="1">kip 1</Option>
            <Option value="2">kip 2</Option>
            <Option value="3">kip 3</Option>
            <Option value="4">kip 4</Option>
            <Option value="5">kip 5</Option>
            <Option value="6">kip 6</Option>
            <Option value="7">kip 7</Option>
            <Option value="8">kip 8</Option>
            <Option value="9">kip 9</Option>
            <Option value="10">kip 10</Option>
            <Option value="11">kip 11</Option>
            <Option value="12">kip 12</Option>
            <Option value="13">kip 13</Option>
            <Option value="14">kip 14</Option>
          </Select>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ marginRight: "10px", fontWeight: "bold" }}
            htmlFor="level"
          >
            レベル:
          </label>
          <Select
            id="level"
            style={{ width: "200px" }}
            value={levelValue}
            onChange={handleFilterLevelChange}
          >
            <Option value="All">All</Option>
            <Option value="A1">A1</Option>
            <Option value="A2">A2</Option>
            <Option value="B1">B1</Option>
            <Option value="B2">B2</Option>
            <Option value="C1">C1</Option>
            <Option value="C2">C2</Option>
          </Select>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{ marginRight: "10px", fontWeight: "bold" }}
            htmlFor="filter"
          >
            式:
          </label>
          <Select
            id="filter"
            style={{ width: "200px" }}
            value={studyFromValue}
            onChange={handleFilterChange}
          >
            <Option value="All">All</Option>
            <Option value="online">online</Option>
            <Option value="offline">offline</Option>
          </Select>
        </div>
      </div>
      { isSearch ?(
                <ShowTeacher currentTeacher={ currentTeacherSearch } />
                ):(
                    <ShowTeacher currentTeacher={ currentTeacher } />
                )
            }
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
        />
      </div>
      <Footer1 />
      
    </div>
  );
}

export default ListTeacher;