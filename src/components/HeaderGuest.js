import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header1.css';
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function GuestHeader() {
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

                    <div className="notification-bell">
                        <FontAwesomeIcon icon={faBell} style={{ color: "#000000", }} className="fa-2x" />
                    </div>
                    <div className="user">
                        <Link to="/signin">
                            <span><button className="profile">ログイン</button></span>
                        </Link>
                    </div>
                    <Link to="/signup">
                        <span><button className="profile">サインアップ</button></span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default GuestHeader;
