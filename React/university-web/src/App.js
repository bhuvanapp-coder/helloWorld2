import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import TitleUpdater from "./components/TitleUpdater";
import UserGreetings from "./components/UserGreeting";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <div>
      <Header />
      <h2>Current Students</h2>
      
      {/* Reusing the same component with different data */}
      <StudentCard 
        name="Alice"
        studentId="s001"
        major="Computer Science"
      />
      
      <StudentCard 
        name="Bob"
        studentId="s002"
        major="Civil Engineering"
      />
      
      <StudentCard 
        name="Charlie"
        studentId="s003"
        major="Culinary Arts"
      />

      <h2>Available Courses</h2>
      
    
      <CourseCard 
        title="Introduction to React" 
        code="CS-101" 
        credits={3} 
      />
      <CourseCard 
        title="Database Systems" 
        code="CS-204" 
        credits={4} 
      />
      <CourseCard 
        title="Advanced Web Development" 
        code="CS-302" 
        credits={3} 
      />


      <h2>Attendance Counter </h2>
      <Counter />

      <h2>Search Bar</h2>
      <SearchBar />
      <h2>Student list</h2>
       <StudentList />
      <h2>Click Tracker</h2>
      <TitleUpdater />
      <h2>Greetings</h2>
      <UserGreetings isLoggedIn={true} />

      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}

export default App;