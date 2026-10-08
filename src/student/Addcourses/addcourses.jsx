import React, { useState } from "react";
import "./addcourses.css";
import { FaImage, FaVideo } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
import { uploadWithProgress } from "../../utels/upload";
const AddCourse = () => {
  const token = Cookies.get("token");
  const nav=useNavigate();
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // Image preview
  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [progress, setProgress] = useState(null); // upload % while submitting
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

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
    e.target.value = ""; // allow picking the same file again after removing it
  };

  const handleRemoveVideo = () => {
    setVideo(null);
    setVideoPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video) {
      setError("Please choose the intro video");
      return;
    }
    setError("");
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
    data.append("video", video);

    try {
      setProgress(0);
      const response = await uploadWithProgress(
        `${domain}/api/courses/add`,
        "POST",
        token,
        data,
        setProgress
      );
      if (response.ok) {
        // next step: add the course lessons
        nav(`/editcorses/${response.data.data.newcourse._id}`);
      } else {
        setError(response.data?.message || "Error adding course");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      setError("An error occurred while adding the course.");
    } finally {
      setProgress(null);
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
            <label htmlFor="video">
              <FaVideo className="avatar-img" />
            </label>
            <span className="upload-hint">Intro video * (MP4, WEBM, OGG, MOV · max 500 MB)</span>
            <input
              type="file"
              id="video"
              accept="video/mp4,video/webm,video/ogg,video/quicktime"
              onChange={handleVideoChange}
              style={{ display: "none" }}
            />
          </div>
          {videoPreview && (
            <div className="preview-container">
              <video src={videoPreview} className="video-preview" controls />
              <button type="button" className="remove-btn" onClick={handleRemoveVideo}>
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        <div className="upload-container imgupload">
          <div className="upload">
            <label htmlFor="file">
              <FaImage className="avatar-img" />
            </label>
            <span className="upload-hint">Cover image (shown on the course card · max 2 MB)</span>
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
              <button type="button" className="remove-btn" onClick={handleRemoveImage}>
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        {progress !== null && (
          <div className="upload-progress">
            <div className="upload-progress-bar" style={{ width: `${progress}%` }} />
            <span>{progress < 100 ? `Uploading ${progress}%` : "Processing..."}</span>
          </div>
        )}
        <button type="submit" disabled={progress !== null}>
          {progress !== null ? "Uploading..." : "Add Course & continue to lessons"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddCourse;
