import {useState, useEffect} from 'react'; 
import axios from 'axios';
import ListTeacher from './components/ListTeacher';

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
      <ListTeacher teachers={teachers} />
    </div>
  );
}

export default App;
