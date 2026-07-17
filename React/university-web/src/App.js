import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";
import SearchBar from "./components/Search";


function App() {
  return (
    <div>
      <Header />
      <h2>Current Students</h2>

      {/* Reusing the same component with different data */}
      <StudentCard 
        name="Alice Wonderland"
        studentId="s001"
        major="Computer Science"
      />

      <StudentCard
        name="Bob Builder"
        studentId="s002"
        major="Civil Engineering"
      />

      <StudentCard
        name="Charlie Chocolate"
        studentId="s003"
        major="Culinary Arts"
      />

      <h2>Available Courses</h2>
      
    
      <CourseCard
        title="Introduction to Programming"
        code="CS101"
        credits={3}
      />

      <CourseCard
        title="Data Structures"
        code="CS201"
        credits={4}
      />

      <CourseCard
        title="Operating Systems"
        code="CS301"
        credits={4}
      /> 
      <h2>Attendance Counter</h2>
      <Counter />

      <h2>Search Bar</h2>
      <SearchBar />
    </div>
  );
}


export default App;