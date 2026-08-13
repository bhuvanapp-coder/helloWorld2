import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        profile_pic: null,
        role: "student",
    });

    const [message, setMessage] = useState("");

    // Handle text/select input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            profile_pic: e.target.files[0],
        });
    };

    // POST REQUEST
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page reload

        const data = new FormData();

        data.append("first_name", formData.first_name);
        data.append("last_name", formData.last_name);
        data.append("email", formData.email);
        data.append("role", formData.role);

        if (formData.profile_pic) {
            data.append("profile_pic", formData.profile_pic);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/academic/api/students/",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);

            setMessage(
                "Student created! ID: " + response.data.id
            );

            // Clear form
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                profile_pic: null,
                role: "student",
            });

        } catch (error) {
            console.error("ERROR:", error.response?.data);
            setMessage("Failed to save data.");
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    gap: "10px",
                }}
            >

                {/* First Name */}
                <input
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                />

                {/* Last Name */}
                <input
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                />

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* File Upload */}
                <input
                    type="file"
                    name="profile_pic"
                    onChange={handleFileChange}
                />

                {/* Role */}
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>

                {/* Submit */}
                <button type="submit">
                    Register
                </button>
            </form>

            {/* Output Message */}
            <p>{message}</p>
        </div>
    );
}

export default RegistrationForm;