import React, { useState, useEffect } from 'react';
import './TeacherManager.css';
import TeacherAdd from './TeacherAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from 'antd';
import axios from "axios";

const TeacherTable = ({ teachers, setTeachers }) => {
    const [showTable, setShowTable] = useState(true);
    const [showAddForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const response = await axios.put('http://127.0.0.1:8000/api/update-status');
            const data = response.data;
            setTeachers(data);
          } catch (error) {
            console.error('Lỗi:', error);
          }
        };
    
        fetchTeachers();
      }, [setTeachers]);

    const handleStatusChange = async (teacherId) => {
        try {
            const updatedTeachers = teachers.map((teacher) => {
              if (teacher.id === teacherId) {
                // Thay đổi trạng thái của giáo viên
                const newStatus = teacher.status === 'active' ? 'inactive' : 'active';
                return { ...teacher, status: newStatus };
              }
              return teacher;
            });
        
            await axios.put('http://127.0.0.1:8000/api/update-status', updatedTeachers);
        
            setTeachers(updatedTeachers);
          } catch (error) {
            console.error('Lỗi:', error);
          }
    };

    const handleDeleteTeacher = async (teacherId) => {
        
    };

    const handleAddTeacher = () => {
        setShowTable(false);
        setShowForm(true);
    };

    const pageSize = 8;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastTeacher = currentPage * pageSize;
    const indexOfFirstTeacher = indexOfLastTeacher - pageSize;
    const currentTeachers = teachers.slice(indexOfFirstTeacher, indexOfLastTeacher);
    const totalItems = teachers.length;

    return (
        <div>
            {showTable && (
                <div>
                    <button className="add-teacher" onClick={handleAddTeacher}>
                        新しい教師を追加する
                    </button>
                    <table className="teacher-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>名前</th>
                                <th>メール</th>
                                <th>電話番号</th>
                                <th>cv_url</th>
                                <th>スターテス</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTeachers.map((teacher) => (
                                <tr key={teacher.id}>
                                    <td>
                                        <img
                                            src={teacher.avatar}
                                            alt="avatar"
                                            className="img-avatar"
                                        />
                                    </td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.phone}</td>
                                    <td>
                                        <a href={teacher.cv_url} target="_blank" rel="noopener noreferrer">
                                            link.url
                                        </a>
                                    </td>
                                    <td>
                                        <label className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                checked={teacher.status === 'active'}
                                                onChange={() => handleStatusChange(teacher.id)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteTeacher(teacher.id)}>
                                            <FontAwesomeIcon icon={faTrash} style={{ color: '#FEAF00' }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="paginate-numbers">
                        <Pagination current={currentPage} pageSize={pageSize} total={totalItems} onChange={handlePageChange} />
                    </div>
                </div>
            )}
            {showAddForm && <TeacherAdd setShowForm={setShowForm} setShowTable={setShowTable} />}
        </div>
    );
};

export default TeacherTable;
