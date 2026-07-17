import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";


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
    </div>
  );
}


export default App;