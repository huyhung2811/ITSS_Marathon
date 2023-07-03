import React, { useState } from 'react';
import "./Sidebar.css";
import TeacherManager from './TeacherManager';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('teachers');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div
          className={`sidebar-item ${selectedItem === 'teachers' ? 'active' : ''}`}
          onClick={() => handleItemClick('teachers')}
        >
          教師を管理
        </div>
        <div
          className={`sidebar-item ${selectedItem === 'classes' ? 'active' : ''}`}
          onClick={() => handleItemClick('classes')}
        >
          クラスを管理
        </div>
      </div>
      <div className="content" style={{ backgroundColor: '#f7f6f9' }}>
        {selectedItem === 'teachers' && <div><TeacherManager/></div>}
        {selectedItem === 'classes' && <div>Nội dung quản lý lớp học</div>}
      </div>
    </div>
  );
};

export default Sidebar;
