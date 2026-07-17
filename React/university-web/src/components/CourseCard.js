import React from 'react';

// props is an object containing all attributes passed to this tag
function CourseCard(props) {
  return (
    <div
      className="course-card"
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px'
      }}
    >
      <h3>{props.title}</h3>
      <p>Code: {props.code}</p>
      <p>Credits: {props.credits}</p>

      <button onClick={() => alert("Viewing " + props.title)}>
        View Details
      </button>
    </div>
  );
}

export default CourseCard; 