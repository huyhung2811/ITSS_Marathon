import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

/**
 * This is a provider for AuthContext.
 * It will handle the login and logout process.
 * You can use it like this: <AuthContextProvider>...</AuthContextProvider> and then you can use the AuthContext in your component.
 * For example: const { state, login, logout } = useContext(AuthContext);
 * state is an object that contains userId, token, username, isLogin.
 * login is a function that will set the userId, token, username, isLogin to true and save it to localStorage.
 * logout is a function that will set the userId, token, username, isLogin to false and remove it from localStorage.
 */
export const AuthContextProvider = ({ children }) => {
    // const [userName, setUserName] = useState(null);
    // const [userId, setUserId] = useState(null);
    // const [updated, setUpdated] = useState(false);
    // const [isLogin, setIsLogin] = useState(false);

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const api = {
        login: async (username, password) => {
          try {
            const response = await fetch("https://be-marathonwebsite-ruler-production-6ad6.up.railway.app/api/login", {
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
      const login = async (username, password) => {
        try {
          // Gọi API login
          const response = await api.login(username, password);
          
          if (response) {
            setLoggedIn(true);
            setCurrentUser(response);
          } else {
            console.log("Đăng nhập không thành công");
          }
        } catch (error) {
          console.log("Lỗi khi gọi API login:", error);
        }
      };
    
      const logout = () => {
        setLoggedIn(false);
        setCurrentUser(null);
      window.location.href = '/signin';
      };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, currentUser, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
