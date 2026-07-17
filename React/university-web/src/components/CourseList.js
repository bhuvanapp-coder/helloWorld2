function CourseList() {

    const courses = [
        { id: 101, title: "Python Basics", credits: 3 },
        { id: 102, title: "Django Core", credits: 4 },
        { id: 103, title: "React Frontend", credits: 4 }
    ];

    return (
        <ul>
            {courses.map(course => (
                // The key MUST be unique and stable (Use DB IDs)
                <li key={course.id}>
                    ID: {course.id} - <b>{course.title}</b> - ({course.credits})
                </li>
            ))}
        </ul>
    );
}
export default CourseList;