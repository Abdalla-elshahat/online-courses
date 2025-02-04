import React, { useState } from "react";
import "./addcourses.css";
import { FaImage } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
const AddCourse = () => {
  const domain = "http://localhost:4000";
  const token = Cookies.get("token");
  const nav=useNavigate();
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // Image preview
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    category: "web development",
    isPublished: false,
    author: "",
    status: "active",
    imgcourse: "",
  });

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else if (name === "price") {
      setFormData((prevData) => ({ ...prevData, [name]: parseFloat(value) }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("price", formData.price.toString()); // Ensure price is a string
    data.append("status", formData.status);
    data.append("isPublished", formData.isPublished);
    if (image) {
      data.append("imgcourse", image);
    }

    try {
      const response = await fetch(`${domain}/api/courses/add`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: data,
      });
      console.log('Form Data:', formData);
      if (response.ok) {
        const result = await response.json();
        nav("/mycorses")
      } else {
        setError("Error adding course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      setError("An error occurred while adding the course.");
    }
  };

  return (
    <div className="add-course-container">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit} className="add-course-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Published:
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="archived">Archived</option>
          </select>
        </label>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="web development">Web Development</option>
            <option value="data science">Data Science</option>
            <option value="machine learning">Machine Learning</option>
            <option value="mobileApp">Mobile App</option>
          </select>
        </label>
        <div className="upload-container imgupload">
          <div className="upload">
            <label htmlFor="file">
              <FaImage className="avatar-img" />
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          {preview && (
            <div className="preview-container">
              <img src={preview} alt="Avatar Preview" className="avatar-preview" />
              <button className="remove-btn" onClick={handleRemoveImage}>
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        <button type="submit">Add Course</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddCourse;
