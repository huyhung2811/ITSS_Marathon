import React, { useState } from 'react';
import Teacher from './Teacher';
import Pagination from './Pagination';

function ListTeacher ({teachers}){
    const [currentPage, setCurrentPage] = useState(1);
    const [teacherPerPage, setTeacherPerPage] = useState(8);

    const indexOfLastTeacher = currentPage * teacherPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - teacherPerPage;
    const currentTeacher = teachers.slice(indexOfFirstTeacher,indexOfLastTeacher);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="teacher-list">
            <Teacher currentTeacher={currentTeacher} indexTeacher={indexOfFirstTeacher}/>
            <Pagination teacherPerPage={teacherPerPage} totalTeachers={teachers.length} paginate={paginate} setTeacherPerPage={setTeacherPerPage} />
        </div>
    )
}

export default ListTeacher;