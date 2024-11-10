import React, { useState } from 'react';
import './Studentform.css';

function StudentForm() {
    const [formData, setFormData] = useState({
        name: '',
        parentName: '',
        dob: '',
        phone: '',
        email: '',
        schoolName: '',
        state: '',
        city: '',
        pincode: '',
        address: '',
        class: '',
        gender: '',
        subjects: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                subjects: checked
                    ? [...prevData.subjects, value]
                    : prevData.subjects.filter((subject) => subject !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Here you can add the logic to send the form data to the backend
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Participate Now</h1>
            <p className="form-description">
                If you are a student who is wanting to participate in Olympiad 2024, please fill in the details in the below form.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Parent Name</label>
                    <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">School Name</label>
                    <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Class</label>
                    <input
                        type="text"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group checkbox-group">
                    <label className="form-label">Subjects</label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Math"
                            checked={formData.subjects.includes('Math')}
                            onChange={handleChange}
                            className="checkbox-input"
                        />
                        Math
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="Science"
                            checked={formData.subjects.includes('Science')}
                            onChange={handleChange}
                            className="checkbox-input"
                        />
                        Science
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="subjects"
                            value="English"
                            checked={formData.subjects.includes('English')}
                            onChange={handleChange}
                            className="checkbox-input"
                        />
                        English
                    </label>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
