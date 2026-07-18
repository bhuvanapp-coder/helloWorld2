import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LiveStudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Define the async function
    const fetchData = async () => {
      try {
        // 2. Make the request
        const res = await axios.get(
          'http://127.0.0.1:8000/api/students/'
        );

        // 3. Update State (Axios puts data inside .data)
        console.log("===== DJANGO API DEBUG =====");
        console.log("Full Response:", res);
        console.log("Students Data:", res.data);
        console.log("Total Students:", res.data.length);
        console.log("============================");

        setStudents(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error connecting to Django:", error);
      }
    };

    // 4. Call it
    fetchData();
  }, []);