import React, { useState } from "react";

function RegistrationForm() {

  // State object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "student",
  });

  // Universal Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Last Name */}
        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Role */}
        <div>
          <label>Role:</label><br />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>Preview</h3>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Role:</strong> {formData.role}</p>
    </div>
  );
}

export default RegistrationForm;