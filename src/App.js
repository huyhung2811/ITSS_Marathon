import { useState, useEffect } from 'react';
import axios from 'axios';
import ListTeacher from './components/ListTeacher';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header1';
import Footer1 from './components/Footer1';
import TeacherDetails from './components/TeacherDetails';
import Profile from './components/Profile';
import Sidebar from './admin/Sidebar';
// import TeacherAdd from './admin/TeacherAdd';
import "./App.css"


function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeacher() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/teacher"
        );
        setTeachers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeacher();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-body'>
        <Routes>
          <Route path="/list-teacher" element={<ListTeacher teachers={teachers} />}></Route>
          <Route path="/teacher/:id" element={<TeacherDetails teachers={teachers} />} />
          <Route path="/" element={<h1>hello</h1>}></Route>
          <Route path="/profile" element={<Profile teacher={teachers} setTeachers={setTeachers}/>}></Route>
          <Route path="/admin" element={<Sidebar teachers={teachers} setTeachers={setTeachers}/>}></Route>
        </Routes>
      </div>
      <div className="App-footer">
        <Footer1 />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;