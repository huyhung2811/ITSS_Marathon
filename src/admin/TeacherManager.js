import React, { useState } from 'react';
import './TeacherManager.css';
import TeacherAdd from './TeacherAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TeacherTable = () => {
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'Teacher 1',
            email: 'teacher1@example.com',
            phone: '123456789',
            cvLink: 'https://example.com/teacher1',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Teacher 2',
            email: 'teacher2@example.com',
            phone: '987654321',
            cvLink: 'https://example.com/teacher2',
            status: 'Inactive'
        },
        // Add more teacher data as needed
    ]);
    const [showTable, setShowTable] = useState(true);
    const [showAddForm, setShowForm] = useState(false);

    const handleStatusChange = (teacherId) => {
        setTeachers((prevTeachers) =>
            prevTeachers.map((teacher) =>
                teacher.id === teacherId ? { ...teacher, status: teacher.status === 'Active' ? 'Inactive' : 'Active' } : teacher
            )
        );
    };
    console.log(teachers);

    const handleAddTeacher = () => {
        setShowTable(false);
        setShowForm(true);
    }

    return (
        <div>

            {showTable &&
                <div>
                    <button className="add-teacher" onClick={handleAddTeacher}>新しい教師を追加する</button>
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
                            {teachers.map((teacher) => (
                                <tr key={teacher.id}>
                                    <td>
                                        <img
                                            src="https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-avatar-don-gian-ma-dep_081757969.jpg"
                                            alt="avatar"
                                            className="img-avatar"
                                        />
                                    </td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.phone}</td>
                                    <td>
                                        <a href={teacher.cvLink} target="_blank" rel="noopener noreferrer">
                                            View CV
                                        </a>
                                    </td>
                                    <td>
                                        <label className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                checked={teacher.status === 'Active'}
                                                onChange={() => handleStatusChange(teacher.id)}
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <button><FontAwesomeIcon icon={faTrash} style={{color: "#FEAF00",}} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            {showAddForm && <TeacherAdd teacher={teachers} setTeachers={setTeachers} />}
        </div>
    );
};

export default TeacherTable;