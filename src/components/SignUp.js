import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';
import axios from 'axios';

const SignUp = ({ toggleSignUpPage }) => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [signUpData, setSignUpData] = useState({});

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleSignUp = () => {
    setAvatar(avatarPreview);
    if (
      signUpName &&
      signUpEmail &&
      gender &&
      signUpPassword &&
      signUpPassword === signUpConfirmPassword
    ) {
      // Xử lý đăng ký tại đây, ví dụ gửi request đến server
      // Đăng ký thành công và gửi thông tin về database

      if (!validateEmail(signUpEmail)) {
        setErrorMessage('Email không đúng. Hãy nhập lại email');
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

      setSignUpData(
        {
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
          sex: gender,
          avatar: avatar
        }

      );
      console.log(signUpData);
      axios.post('https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/register', signUpData)
        .then(response => {
          // Xử lý phản hồi từ API sau khi gửi thành công
          console.log("OK", response.data);
        })
        .catch(error => {
          // Xử lý lỗi khi gửi yêu cầu
          console.error(error);
        });
      setSuccessMessage('Đăng kí thành công! Bạn sẽ được chuyển tới trang đăng nhập sau 3s');
      setErrorMessage('')
      setShowPopup(true);
      // Tự động ẩn popup sau 5 giây
      // setTimeout(() => {
      //   setShowPopup(false);
      //   setErrorMessage('');
      //   setSuccessMessage('');

      //   window.location.href = '/signin';
      // }, 3000);


      // Chuyển tới trang đăng nhập


    } else {
      setErrorMessage('Vui lòng điền đầy đủ thông tin và xác nhận mật khẩu!');
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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageRef = ref(storage, `images/${file.name}`);
      uploadBytes(imageRef, file).then(() => {
        getDownloadURL(imageRef).then((url) => {
          console.log("Download URL:", url);
          setAvatarPreview(url);
        });
      });
    }
  };


  return (


    <div className='sign-up'>

      <div className='left-column'>
        <img src="login-elearning.png" alt="elearning" />
      </div>
      <div className='right-column'>

        <div className='signup-form'>
          <h2 className="sign-up-title">サインアップ</h2>

          <div className="sign-up-container">
            <div className="avatar-container">
              <label htmlFor="avatar-upload" className="upload-container"
              >
                <span >
                  <img className="user-avatar-icon" src="user-camera-icon.png" alt="" />
                </span>

                <span className="upload-text">アップロードアバター</span>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />
                <span >
                  <img className="upload-icon" src="upload-icon.png" alt="" />
                </span>
              </label>
              <div className="avatar-preview">
                {avatarPreview ? <img src={avatarPreview} alt="Avatar Preview" /> : <img src="add-avatar.png" alt="Avatar Preview" />}
              </div>
            </div>
          </div>
          <div className="sign-up-container">
            <input
              type="text"
              value={signUpName}
              placeholder='名'
              onChange={(e) => setSignUpName(e.target.value)}
            />
          </div>
          <div className="sign-up-container">
            <input
              type="email"
              value={signUpEmail}
              placeholder='メール'
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
          </div>
          <div className="sign-up-container">
            <input
              type="password"
              placeholder='パスワード'
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
          </div>
          <div className="sign-up-container">
            <input
              type="password"
              placeholder='パスワード'
              value={signUpConfirmPassword}
              onChange={(e) => setSignUpConfirmPassword(e.target.value)}
            />
          </div>

          <div className="sign-up-container">
            <div className="gender-options">
              <label className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                {"　男性"}
              </label>
              <label className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />

                {"　女性"}

              </label>
              <label className="gender">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                />

                {"　第三の性別"}

              </label>
            </div>
          </div>

          <div className="sign-up-container">
            <button onClick={handleSignUp}>サインアップ</button>
          </div>

          <div className="sign-up-container">
            <p>すでにアカウントをお持ちですか？
              <Link to="/signin">
                <span className='link-login'>ログイン</span>
              </Link> </p>
          </div>
        </div>
        <div className="alert-part">
          {
            showPopup &&
            <div className="popup">

              {successMessage && <p className="success">{successMessage}</p>}
              {errorMessage && <p className="error">{errorMessage}</p>}

            </div>
          }
        </div>
      </div>



    </div>
  );
};

export default SignUp;
