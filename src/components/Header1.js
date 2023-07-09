import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
import {faBell} from "@fortawesome/free-regular-svg-icons"

function Header() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClickedOption = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="marathon-edu-logo.png" alt="Marathon edu Logo" />
          </Link>
        </div>

        <div className="navigation">
          <ul className="list">
            <button
              className={activeButton === 'search' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('search')}
            >
              <Link to="/list-teacher">ホームページ</Link>
            </button>
            <button
              className={activeButton === 'prices' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('prices')}
            >
              <Link to="/bookmark">好きな先生</Link>
            </button>
          </ul>

          <div className="notification-bell">
              <font-awesome-icon icon={faBell} />
              <span className="notification-count">3</span>
            </div>
          <div className="user">
            <Link to="/profile">
              <div className="avatar">
                <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg" alt="avatar" />
              </div>
             
            </Link> 
          </div>
          <span><button className="profile">プロフィール</button></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
