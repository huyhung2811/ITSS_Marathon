import React, { useState } from 'react';
import { Pagination } from 'antd';
import ShowTeacher from './ShowTeacher';
import FilterComponent from './FilterComponent';
import './ListTeacher.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';

function ListTeacher() {
    const [currentPage, setCurrentPage] = useState(1);
    const [points, setPoints] = useState(null);
    const [buttonClick, setButtonClick] = useState(false);
    const user_id = localStorage.getItem('userid');
    const [teachers, setTeachers] = useState([]);
    const [refesh, setRefesh] = useState(0);
    const [active, setActive] = useState(true);
    // const fetchMatchingInfor = async() => {
    //     const userId = localStorage.getItem('userid');
    //     axios.get()
    // }
    useEffect(() => {
        async function fetchTeacher() {
            try {
                const response = await axios.get(
                    `https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/get-teacher-by-question/${user_id}`,
                );
                console.log(response.data)
                setActive(false)
                setTeachers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTeacher();
    }, [refesh]);
    const handleShowFilter = () => {
        setButtonClick(!buttonClick);
    };

    const pageSize = 6;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    console.log(teachers)
    const currentTeacher = teachers?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(currentTeacher)
    if (points !== null) {
        var currentTeacherPoint = points?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    }

    const indexOfLastStudent = currentPage * pageSize;
    const indexOfFirstStudent = indexOfLastStudent - pageSize;
    const totalItems = teachers?.length;

    const handleFilterSubmit = (location, level, day, timeSlot, fee, sex, age, goal, dem) => {
        console.log(location, level, day, timeSlot, fee, sex, age, goal, dem);
        axios
            .post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/matching', {
                salary: fee,
                address: location,
                sex: sex,
                age: age,
                goal: goal,
                level: level,
                day_of_week: day,
                time_slot: timeSlot,
                dem: dem,
            })
            .then((response) => {
                setPoints(response.data);
                console.log('point:', points);
                console.log('thanh cong');
            })
            .catch((error) => {
                console.log('loi');
            });
        setCurrentPage(1);
    };

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
                
                {buttonClick && (
                    <div className="filter-container">
                        <FilterComponent onSubmit={handleFilterSubmit} handleShowFilter={handleShowFilter} />
                    </div>
                )}

                <div className="list-paginate">
                    <div style={{display: 'flex', justifyContent: "center"}}>
                        <Skeleton sx={{display: active ? 'block' : 'none'}} variant="rounded" width={"248px"} height={"395px"} />
                    </div>
                    <div
                        className="filter-results"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        {points !== null ? (
                            <ShowTeacher
                                currentTeacher={currentTeacherPoint}
                                indexOfFirstStudent={indexOfFirstStudent}
                            />
                        ) : (
                            <ShowTeacher onRefesh={setRefesh} count={refesh} currentTeacher={currentTeacher} indexOfFirstStudent={indexOfFirstStudent} />
                        )}
                    </div>
                    <div className="paginate-numbers">
                        <Pagination
                            style={{display: 'flex', justifyContent: 'center'}}
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
