import {useState, useEffect} from 'react'; 
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ListTeacher from './components/ListTeacher';
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';
function App() {
  const [teachers, setTeachers] = useState([]);

  useEffect(()=>{
    async function fetchTeacher(){
    try {
      const response = await axios.get(
        "https://647b0017d2e5b6101db0ba04.mockapi.io/TeacherList"
      ); 
      setTeachers(response.data); 
    } catch (error) {
      console.log(error);
    }
  }
  fetchTeacher();
  },[]);
  
  return (
    <div className="App">
      <Header1 />
      <Routes>
     <Route path="/search" element = {<ListTeacher teachers={teachers} />}  />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
