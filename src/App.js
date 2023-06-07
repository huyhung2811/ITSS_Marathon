import { useState, useEffect } from 'react';
import axios from 'axios';
import ListTeacher from './components/ListTeacher';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';
// import teacherTest from './data/teacherTest';

//import teacherTest from "./data/teacherTest";

function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeacher() {
      try {
        const response = await axios.get(
          "https://be-marathonwebsite-ruler-production-93fe.up.railway.app/api/teacher?fbclid=IwAR1HucjzXBSZ8B1BIFnzWSgmYxOMlsPdvNOxK9r7ikWJa1GlVWYaLGOCe9Y"
        );
        setTeachers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTeacher();
  }, []);
  // useEffect(() => {
  //   // Kiểm tra xem dữ liệu đã được lưu trong Local Storage chưa
  //   const existingData = localStorage.getItem('myData');

  //   if (!existingData) {
  //     // Nếu dữ liệu chưa được lưu, đẩy dữ liệu từ file data vào Local Storage
  //     localStorage.setItem('myData', JSON.stringify(teacherTest));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Lấy dữ liệu từ LocalStorage
  //   const storedData = localStorage.getItem('myData');

  //   if (storedData) {
  //     // Nếu dữ liệu đã tồn tại trong LocalStorage, gán vào state
  //     setTeachers(JSON.parse(storedData));
  //   }
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path="/list-teacher" element={<ListTeacher teachers={teachers} />}></Route>
          <Route path="/" element={<h1>hello</h1>}></Route>
        </Routes>
        <Footer1 />
      </BrowserRouter>

    </div>
  );
}

export default App;