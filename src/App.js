
// import {useState, useEffect} from 'react'; 
// import axios from 'axios';
import ListTeacher from './components/ListTeacher';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import teacherTest from "./data/teacherTest";


function App() {
  // const [teachers, setTeachers] = useState([]);

  // useEffect(()=>{
  //   async function fetchTeacher(){
  //   try {
  //     const response = await axios.get(
  //       "https://647b0017d2e5b6101db0ba04.mockapi.io/TeacherList"
  //     ); 
  //     setTeachers(response.data); 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // fetchTeacher();
  // },[]);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/list-teacher" element={<ListTeacher teachers={teacherTest} />}></Route>
          <Route path="/" element={<h1>hello</h1>}></Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
