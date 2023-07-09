import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { Link } from 'react-router-dom';
import './signUp.css';

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { isLoggedIn, currentUser, login, logout } = useContext(AuthContext);
  console.log("loz",currentUser);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const api = {
    login: async (username, password) => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email:username, password:password })
        });
  
        const data = await response.json();
        

  
        return data.user;
      } catch (error) {
        throw new Error("Đã xảy ra lỗi khi gọi API login.");
      }
    }
  };
  const handleSignIn = async (e) => {
    // e.preventDefault();
    if (signInEmail && signInPassword) {
      if(!validateEmail(signInEmail)){
      setErrorMessage('メールが間違っています。 メールアドレスを再入力してください!');
      setSuccessMessage('')
      setShowPopup(true);
        // Tự động ẩn popup sau 5 giây
        setTimeout(() => {
          setShowPopup(false);
          setErrorMessage('');
          setSuccessMessage('');
        }, 3000);
        return
      }
      else{
        try {
          // Gọi API login
          const response = await api.login(signInEmail, signInPassword);
          if (response) {
            // Đăng nhập thành công
        localStorage.setItem('userid', response.id);
        window.location.href = '/question';
        // Chuyển tới trang nào đó của ứng dụng
          } else {
            setErrorMessage('アカウントまたはパスワードが間違っています。 再入力してください！');
            setSuccessMessage('')
            setShowPopup(true);
        // Tự động ẩn popup sau 5 giây
            setTimeout(() => {
          setShowPopup(false);
          setErrorMessage('');
          setSuccessMessage('');
        }, 3000);
          }
        } catch (error) {
          console.log("Lỗi khi gọi API login:", error);
        }
        
        
      }
      // Xử lý đăng nhập tại đây, ví dụ gửi request đến server
      
    } else {
      setErrorMessage('メールアドレスとパスワードを入力してください!');
      setSuccessMessage('')
      setShowPopup(true);
        // Tự động ẩn popup sau 5 giây
        setTimeout(() => {
          setShowPopup(false);
          setErrorMessage('');
          setSuccessMessage('');
        }, 3000);
    }
  };

  

  return (
    <div className = "signin">
      <div className = "left-column">
      <img src="login-elearning.png" alt="elearning" />
    </div>
     <div className = "right-column">

      <div className = "login-form">
      <div className = "login-title"><h2>ログイン</h2></div>
      <div className = "sign-in-container">
      <img src="avatar_default.png" alt="Default Avatar" />
      </div>
     <div className="sign-in-container">
      <input
        type="email"
        value={signInEmail}
        placeholder='メール'
        onChange={(e) => setSignInEmail(e.target.value)}
      />
      </div>
      <div className="sign-in-container">
      <input
        type="password"
        placeholder='パスワード'
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      />
      </div>
      <div className='sign-in-container'>
      <button onClick={handleSignIn}>ログイン</button>
      </div>
      <div className='sign-in-container'>
      <p>アカウントを持っていないのですか? <Link to="/signup"><span className = "link-signup">サインアップ</span></Link></p>
      </div>
      
      </div>
      <div className = "alert-part">
      {
      showPopup &&
      <div className = "popup">
    
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        
    </div>
    }
      </div>
     </div>
     
    </div>
  );
};

export default SignIn;
