import React, { useState } from 'react';
import { Pagination } from 'antd';
import './ListTeacher.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Bookmark from './Bookmark';
import Skeleton from '@mui/material/Skeleton';

function BookmarkList() {
    const id = localStorage.getItem('userid');
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonClick, setButtonClick] = useState(false);
    const [active1, setActive1] = useState(true);

    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        async function fetchTeacher() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/getbookmark/${id}`,
                );
                console.log(response.data);
                setActive1(false)
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
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Skeleton
                                sx={{ display: active1 ? 'block' : 'none' }}
                                variant="rounded"
                                width={'248px'}
                                height={'395px'}
                            />
                        </div>
                        <Bookmark currentTeacher={currentTeacher} indexOfFirstStudent={indexOfFirstStudent} />
                    </div>
                    <div className="paginate-numbers">
                        <Pagination
                            style={{ display: 'flex', justifyContent: 'center' }}
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
