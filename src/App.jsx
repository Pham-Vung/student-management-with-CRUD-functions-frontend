import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/common/NavBar.jsx';
import Home from './Home.jsx';
import AddStudent from './component/student/AddStudent.jsx';
import StudentsView from './component/student/StudentsView.jsx';
import StudentProfile from './component/student/StudentProfile.jsx';
import EditStudent from './component/student/EditStudent.jsx';

function App() {
  return (
    <main className='container mt-5'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/view-students' element={<StudentsView />} />
          <Route exact path='/add-student' element={<AddStudent />} />
          <Route exact path='/edit-student/:id' element={<EditStudent />} />
          <Route exact path='/student-profile/:id' element={<StudentProfile />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
