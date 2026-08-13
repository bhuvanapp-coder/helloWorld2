import Header from './components/Header';
import StudentCard from './components/StudentCard';
import CourseCard from './components/CourseCard';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import StudentList from './components/StudentList';
import TitleUpdater from './components/TitleUpdater';
import Login from './components/Login';
import UserGreeting from './components/UserGreeting';
import CourseList from './components/CourseList';
import RegistrationForm from './components/RegistrationForm';
import { Link ,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
function App() {
  return(
    <div>
      {/*Navigation*/}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/studentslist">Live Student List</Link>
        
        
      </nav>
      <Routes>
        {/*Login Page */}
        <Route path="/login" element={<Login />} />
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path='/studentslist' element={<StudentList/>} />
        {/* Students Page */}
        <Route path="/students" element={
        <div>
          <StudentCard name="Gayathri" studentId="12345" major="Computer Science" />
          <StudentCard name="Aswathy" studentId="67890" major="Mathematics" /> 
          <StudentCard name="Ganga" studentId="54321" major="Physics" />
        </div>
         } />

        
      </Routes> 

     
      <Header />
      
      <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
    
      <RegistrationForm/>
      <h2>Current Students</h2>
      <StudentCard name="Gayathri" studentId="12345" major="Computer Science" />
      <StudentCard name="Aswathy" studentId="67890" major="Mathematics" /> 
      <StudentCard name="Ganga" studentId="54321" major="Physics" />
      <h2>Current Courses</h2>
      <CourseList/>
      <CourseCard title="Introduction to Computer Science" code="CS101" credits="3" />
      <CourseCard title="Calculus I" code="MATH101" credits="4" /> 

      <h2>Class Attendance Counter</h2>
      <Counter />
    

      {/*Title Updater*/}
      <h2>Click Tracker(Updates Tab Title)</h2>
      <TitleUpdater/>
      

      <UserGreeting isLoggedIn={true} />

      
    </div>
  );
}
export default App;