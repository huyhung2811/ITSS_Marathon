import React, { useState } from "react";
import { Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowTeacher from "./ShowTeacher";
import FilterComponent from './FilterComponent';

import "./ListTeacher.css"
import { faFilter } from "@fortawesome/free-solid-svg-icons";


function ListTeacher({ teachers }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilter, setShowFilter] = useState(true);


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
        <div>
            <div className="m-0 py-1 my-1" style={{ backgroundColor: '#ADD8E1' }}>
                <p className="fw-bold fs-4 m-0">
                    <FontAwesomeIcon
                        className="mx-5"
                        icon={faFilter}
                        style={{ color: '#1A9360' }}
                        role="button"
                        onClick={() => setShowFilter(!showFilter)}
                    />
                    条件に合わせて
                    <span className="text-danger">最適な教師</span>
                    を見つける！
                </p>
            </div>
            <div className="listTeacher-container">
                {showFilter &&
                    <div className="filter-container">
                        <FilterComponent onSubmit={handleFilterSubmit} />
                    </div>
                }

                <div className="list-paginate" style={{ width: showFilter ? '100%' : '70%' }}>
                    <div className="filter-results"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ShowTeacher currentTeacher={currentTeacher} />
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
        </div>
    );
}

export default ListTeacher;