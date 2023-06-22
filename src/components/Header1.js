//Header trang hien thi thong tin giao vien 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
function Header1() {


  const [activeButton, setActiveButton] = useState(null);

  const handleClickedOption = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <header>
      <div className="header-container">
        <div className="logo" >
          <Link to="/">
            <img src="marathon-edu-logo.png" alt="Marathon edu Logo" />
          </Link>
        </div>

        <div className="navigation">
          <ul>
            <button
              className={activeButton === 'search' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('search')}
            >
              <Link to="/list-teacher">Search</Link>
            </button>
            <button
              className={activeButton === 'prices' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('prices')}
            >
              <Link to="/prices">Prices</Link>
            </button>
            <button
              className={activeButton === 'faq' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('faq')}
            >
              <Link to="/faq">F.A.Q</Link>
            </button>
            <button
              className={activeButton === 'support' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('support')}
            >
              <Link to="/faq">Support</Link>
            </button>
            <button
              className={activeButton === 'signIn' ? 'active' : 'navigation-options'}
              onClick={() => handleClickedOption('signIn')}
            >
              <Link to="/signin"><span className="signInLink">Sign In</span></Link>
            </button>
          </ul>
          <Link to="/profile">
            <div className="user">
              <div className="avatar">
                <img src="guest-icon.jpg" alt="avatar" />
              </div>
              <button className="username">Fullname</button>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header1;
