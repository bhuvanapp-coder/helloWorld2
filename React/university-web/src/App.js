import Header from './component/Header';
import StudentCard from './component/StudentCard';
import CourseCard from './component/CourseCard';
import Counter from './component/Counter';
import SearchBar from './component/SearchBar';
import StudentList from './component/StudentList';
import TitleUpdater from './component/TitleUpdater';
import UserGreeting from './component/UserGreeting';
import CourseList from './component/CourseList';
import RegistrationForm from './component/RegistrationForm';
import { Link ,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
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