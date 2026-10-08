import React, { useEffect, useState } from "react";
import "./editcorses.css";
import { FaPlus, FaImage, FaVideo, FaTimes, FaExclamationCircle, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
import { imageUrl, videoUrl } from "../../utels/image";
import { uploadWithProgress } from "../../utels/upload";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteLesson, getCourseQuizzes, getLessons } from "../../api/courseApi";
function Editcorses() {
    const token = Cookies.get("token");
  const { courseid } = useParams();
   const [preview, setPreview] = useState(null); // عرض الصورة
   const [image, setImage] = useState("");
   const [video, setVideo] = useState(null); // new video (optional on edit)
   const [videoPreview, setVideoPreview] = useState(null);
   const [progress, setProgress] = useState(null);
   const [formData, setFormData] = useState({title: "",description: "",price: "",category: "",author: "",status: "",imgcourse: "",});
   const[breviousdata,setbreviousdata]=useState(null);
   const [lessons, setLessons] = useState([]);
   const [quizzes, setQuizzes] = useState([]);
   const nav=useNavigate();
  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
    e.target.value = "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("price", formData.price.toString()); // Ensure price is a strin
    data.append("status", formData.status);
    if (image) {
      data.append("imgcourse", image);
    }
    if (video) {
      data.append("video", video);
    }
    try {
      setProgress(0);
      const response = await uploadWithProgress(
        `${domain}/api/courses/update/${courseid}`,
        "PATCH",
        token,
        data,
        setProgress
      );
      if (response.ok) {
        toast.success("Course updated successfully!", {
        icon: <FaCheckCircle color="green" />,
        });
        setTimeout(()=>{
          nav("/mycorses")
        },1000)
      } else {
        console.error("Error response:", response.data);
        toast.error(response.data?.message || "Error updating course.", {
          icon: <FaExclamationCircle color="red" />,
      });
      }
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update course.");
    } finally {
      setProgress(null);
    }
  };
  const getcoursesdata = async () => {
    try {
      const response = await fetch(`${domain}/api/courses/${courseid}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const result = await response.json();
        setbreviousdata(result.data.course);
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error(
                        <span>
                            <FaExclamationTriangle style={{ marginRight: "8px", color: "red" }} />
                            {errorData.message || "Error get course. data"}
                        </span>
                    );
      }
    } catch (error) {
      console.error("Error get course. data", error);
      alert("Failed to update course.");
    }
  };
  useEffect(() => {
    if (breviousdata) {
      setFormData({
        title: breviousdata.title || "",
        description: breviousdata.description || "",
        price: breviousdata.price || "",
        category: breviousdata.category || "",
        author: breviousdata.author || "",
        status: breviousdata.status || "",
        imgcourse: "",
      });
      if (breviousdata.imgcourse) {
        setPreview(imageUrl(breviousdata.imgcourse));
      }
      setVideoPreview(videoUrl(breviousdata.video));
    }
  }, [breviousdata]);
  const loadLessons = () => {
    getLessons(courseid).then(setLessons).catch((err) => toast.error(err.message));
    getCourseQuizzes(courseid).then(setQuizzes);
  };
  const handleDeleteLesson = async (lesson) => {
    const { isConfirmed } = await Swal.fire({
      title: `Delete "${lesson.title}"?`,
      text: "The lesson video will be removed too.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    });
    if (!isConfirmed) return;
    try {
      await deleteLesson(courseid, lesson._id);
      toast.success("Lesson deleted", { icon: <FaCheckCircle color="green" /> });
      loadLessons();
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    loadLessons();
    getcoursesdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ToastContainer/>
      <div className="dash editcorses">
        <div className="content">
          <div className="studentdashbord">
            <p>Edit Course</p>
          </div>
          <div className="bottomc">
            <div className="card cardleft">
              <form onSubmit={handleSubmit}>
                <div className="bake">
                  <div className="blok">
                    <label htmlFor="author">Author</label>
                    <input
                      type="text"
                      name="author"
                      id="author"
                      placeholder="Author"
                      value={formData.author}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                  <div className="blok">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Course title is editable here"
                      value={formData.title}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                  <div className="blok">
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Description..."
                      value={formData.description}
                      onChange={(e)=>handleInputChange(e)}
                    ></textarea>
                  </div>
                  <div className="blok">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price..."
                      value={formData.price}
                      onChange={(e)=>handleInputChange(e)}
                    />
                  </div>
                  <div className="sele">
                    <label htmlFor="category">CATEGORY</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={(e)=>handleInputChange(e)}
                    >
        <option value="web development">Web Development</option>
            <option value="data science">Data Science</option>
            <option value="machine learning">Machine Learning</option>
            <option value="mobileApp">Mobile App</option>
                    </select>
                  </div>
                  <div className="sele">
                    <label htmlFor="status">status</label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={(e)=>handleInputChange(e)}
                    >
        <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="archived">archived</option>
                    </select>
                  </div>

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
    <button type="button" className="remove-btn" onClick={() => {setImage(null);setPreview(null);}}>
      <FaTimes />
    </button>
  </div>
)}
                          </div> 
                     <div className="upload-container imgupload">
                            <div className="upload">
                              <label htmlFor="video">
                                <FaVideo className="avatar-img" />
                              </label>
                              <span>{video ? video.name : "Replace intro video (optional)"}</span>
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
    <video src={videoPreview} controls style={{ width: 260, maxWidth: "100%", borderRadius: 10, background: "#000" }} />
    {video && (
      <button type="button" className="remove-btn" onClick={() => {setVideo(null);setVideoPreview(videoUrl(breviousdata?.video));}}>
        <FaTimes />
      </button>
    )}
  </div>
)}
                          </div>
                </div>
                {progress !== null && <p>{progress < 100 ? `Uploading ${progress}%` : "Processing..."}</p>}
                <span className="save">
                  <input type="submit" value={progress !== null ? "Uploading..." : "Save Change"} disabled={progress !== null} />
                </span>
              </form>
            </div>
        
            <div className="card">
              <div className="toeditcors">
                <span>
                  <h2>Lessons</h2>
                  <p>{lessons.length} lesson{lessons.length === 1 ? "" : "s"} · {quizzes.length} quiz{quizzes.length === 1 ? "" : "zes"}</p>
                </span>
                <span className="new" onClick={() => nav(`/editlesson/${courseid}`)}>New <FaPlus /></span>
              </div>
              <div className="bottomcltt">
                {lessons.length === 0 && (
                  <p className="empty-row">No lessons yet. Click “New” to upload the first lesson video.</p>
                )}
                {lessons.map((lesson) => (
                  <div className="malomat" key={lesson._id}>
                    <div className="ganb" onClick={() => nav(`/editlesson/${courseid}/${lesson._id}`)}>
                      <span className="number">{lesson.order}</span>
                      <span className="name">
                        {lesson.title}
                        <span className={lesson.isFree ? "free" : "pro"}>{lesson.isFree ? "Free" : "Pro"}</span>
                      </span>
                    </div>
                    <span className="row-actions">
                      <button type="button" title="Edit" onClick={() => nav(`/editlesson/${courseid}/${lesson._id}`)}><MdEdit /></button>
                      <button type="button" title="Delete" className="danger" onClick={() => handleDeleteLesson(lesson)}><MdDelete /></button>
                    </span>
                  </div>
                ))}
                <p className="section-title">Quizzes</p>
                {quizzes.length === 0 && <p className="empty-row">No quiz for this course yet.</p>}
                {quizzes.map((quiz) => (
                  <div className="malomat" key={quiz._id}>
                    <div className="ganb">
                      <span className="number"><ImParagraphLeft /></span>
                      <span className="name">{quiz.title} <span className="quiz">Quiz</span></span>
                    </div>
                    <span className="minute">{quiz.questions?.length || 0} questions · {Math.round((quiz.timeLimit || 0) / 60)} min</span>
                  </div>
                ))}
                <div className="malomat">
                  <div className="ganb" onClick={() => nav(`/createquiz/${courseid}`)}>
                    <span className="number"><FaPlus /></span>
                    <span className="name">Create a quiz for this course</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editcorses;









