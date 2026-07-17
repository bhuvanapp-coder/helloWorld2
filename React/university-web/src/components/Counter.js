import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (const count > 0) {
        setCount(count - 1);
    }
};

return {
    <div style = {{ textAlign: 'center' }}>
        <h1>Class Attendance Counter</h1>
}