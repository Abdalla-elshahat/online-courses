import React, { useEffect, useState } from "react";
import "./editcorses.css";
import { FaPlus, FaImage, FaTimes, FaExclamationCircle, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie"; 
function Editcorses() {
    const domain = "http://localhost:4000";
    const token = Cookies.get("token");
  const { courseid } = useParams();
   const [preview, setPreview] = useState(null); // عرض الصورة
   const [image, setImage] = useState("");
   const [formData, setFormData] = useState({title: "",description: "",price: "",category: "",author: "",status: "",imgcourse: "",});
   const[breviousdata,setbreviousdata]=useState(null);
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
    try {
      const response = await fetch(`${domain}/api/courses/update/${courseid}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: data,
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        toast.success("Course updated successfully!", {
        icon: <FaCheckCircle color="green" />,
        });
        setTimeout(()=>{
          nav("/mycorses")
        },1000)
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        toast.error("Error updating course.", {
          icon: <FaExclamationCircle color="red" />,
      });
      }
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update course.");
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
        setPreview(`${domain}/uplouds/${breviousdata.imgcourse}`);
      }
    }
  }, [breviousdata]);
  useEffect(() => {
    getcoursesdata();
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
                </div>
                <span className="save">
                  <input type="submit" value="Save Change" />
                </span>
              </form>
            </div>
        
            <div className="card">
<div className="toeditcors">
    <span>
        <h2>Lessons</h2>
        <p>Manage Lessons</p>
    </span>
    <span className='new'>New <FaPlus/></span>
</div>
<div className="bottomcltt">
<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Overview</span>
</div>
<span className='minute'>3:33</span>                                
</div>   
<div className="malomat">
<div className="ganb"> 
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Asset Pipeline</span></div>
<span className='minute'>3:33</span>                                
</div>   

<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Getting Started <span className='free'>Free</span></span>
</div>
<span className='minute'>6.55</span>                                
</div>   
<div className="malomat">
<div className="ganb"><span className='number'><ImParagraphLeft/></span>
<span className='name'>Advanced Workflows <span className='pro'>Pro</span></span>
</div>
<span className='minute'>3:33</span>                                
</div>   
<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Tips & Tricks<span className='pro'>Pro</span></span>
</div>
<span className='minute'>3:33</span>                                
</div>   
<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Final Quiz</span>
</div>
<span className='minute'><span className='quiz'>Quiz</span></span>                                
</div> 
<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Final Quiz</span>
</div>
<span className='minute'>33.3</span>                                
</div> 
<div className="malomat">
<div className="ganb">
<span className='number'><ImParagraphLeft/></span>
<span className='name'>Final Quiz</span>
</div>
<span className='minute'>5.3</span>                                
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









