import { useState, useEffect } from 'react';
import axios from 'axios';
import ListTeacher from './components/ListTeacher';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';
import TeacherDetails from './components/TeacherDetails';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// import teacherTest from './data/teacherTest';

//import teacherTest from "./data/teacherTest";

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeacher() {
      try {
        const response = await axios.get(
          "https://be-marathonwebsite-ruler-production-93fe.up.railway.app/api/teacher"
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
        <Header1 />
        <Routes>
          <Route path="/list-teacher" element={<ListTeacher teachers={teachers} />}></Route>
          <Route path="/teacher/:id" element={<TeacherDetails teachers={teachers} />} />
          <Route path="/" element={<h1>hello</h1>}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;