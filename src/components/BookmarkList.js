import React, { useState } from 'react';
import { Pagination } from 'antd';
import './ListTeacher.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Bookmark from './Bookmark';

function BookmarkList() {
    const id = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonClick, setButtonClick] = useState(false);

    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        async function fetchTeacher() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/getbookmark/${id}`,
                );
                console.log(response.data)
                setTeachers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTeacher();
    }, []);
    console.log('hehe', teachers);
    const handleShowFilter = () => {
        setButtonClick(!buttonClick);
    };

    const pageSize = 6;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log('he', teachers);
    const currentTeacher = teachers?.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const indexOfLastStudent = currentPage * pageSize;
    const indexOfFirstStudent = indexOfLastStudent - pageSize;
    const totalItems = teachers.length;

    return (
        <div style={{ alignContent: 'center' }}>
            <div className="m-0 py-1 my-1" style={{ backgroundColor: '#ADD8E1', alignContent: 'center' }}>
                <p className="fw-bold fs-4 m-0">
                    <FontAwesomeIcon
                        className="mx-5"
                        icon={faFilter}
                        style={{ color: '#1A9360' }}
                        role="button"
                        onClick={handleShowFilter}
                    />
                    条件に合わせて
                    <span className="text-danger">最適な教師</span>
                    を見つける！
                </p>
            </div>
            <div className="listTeacher-container">
                <div className="list-paginate">
                    <div
                        className="filter-results"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Bookmark currentTeacher={currentTeacher} indexOfFirstStudent={indexOfFirstStudent} />
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

export default BookmarkList;
