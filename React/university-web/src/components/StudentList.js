import React, { useState, useEffect } from 'react';

fubcnction StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Component Mounted! Fetching data...");
    const timer  = setTimeout(() => {

        const data = [
            { id: 1, name: "Alice", major: "CS" },
            { id: 2, name: "Bob", major: "Math" },
            { id: 3, name: "Charlie", major: "Physics" }
        ];
        setStudents(data);
        setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);





  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Current Students</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          studentId={student.id}
          major={student.major}
        />
      ))}
    </div>
  );
}

export default StudentList;