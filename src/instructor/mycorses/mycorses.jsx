import './mycorses.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from "js-cookie"; 
import { domain } from '../../utels/constents/const';
function Mycorses() {
  const token = Cookies.get("token");
  const [courseData, setCourseData] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null); // القائمة النشطة
  const [order, setorder] = useState("asc");
  const [sort, setsort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [quiz, setquiz] = useState([]);
  const nav=useNavigate();
  const fetchUserCoursesAdded = async () => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/coursesiamadded?sort=${sort}&order=${order}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        
        const data = await response.json();
        setCourseData(data.data.courses);
        console.log("courses data:", data.data.courses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    }
  };
  const deleteCourseById = async (courseId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/delete/${courseId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete course with ID: ${courseId}`);
        }
        const data = await response.json();
         toast.success("Course deleted successfully", {
                icon: <FaCheckCircle color="green" />,
                });
        setCourseData((prevData) =>
          prevData.filter((course) => course._id !== courseId)
        );
        setActiveMenu(null); // إغلاق القائمة المنسدلة
        console.log("Course deleted successfully", data);
      } catch (error) {
        console.error(`Error deleting course with ID: ${courseId}`, error);
      }
    }
  };
  const fetchquiz = async () => {
          setLoading(true);
          try {
              const response = await fetch(`${domain}/api/quiz/quizzes`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      "Authorization": `Bearer ${token}`,
                  }
              });
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              console.log(data)
              setquiz(data);
          } catch (error) {
              console.error("Error fetching courses:", error);
          } finally {
              setLoading(false);
          }
      };
  useEffect(() => {
    fetchUserCoursesAdded();
    fetchquiz();
  }, [order,sort]);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // تبديل القائمة
  };

  const handleUpdate = (courseId) => {
    nav(`/editcorses/${courseId}`);
  };

  const handleDelete = (courseId) => {
    deleteCourseById(courseId);
  };

  const handleView = (courseId) => {
    nav(`/view/${courseId}`);
  };
  const handlequiz = (courseId) => {
    nav(`/createquiz/${courseId}`);
  };

  const filteredcourses = courseData.filter((user) =>
    user.title.toLowerCase().includes(search.toLowerCase())
  ); 
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="serice courses mycorses">
       <ToastContainer/>
      <div className="tops">
        <h2 className="serich">Instructor Courses</h2>
        <span className="Goto">
          <Link to={"/addcourss"}> New Course <FaPlus /></Link>
        </span>
      </div>
      <div className="inputall">
        <span className="input1">
          <input type="text" placeholder="Filter by name"  onChange={(e)=>setSearch(e.target.value)}/>
          <IoSearchSharp />
        </span>
        <div className="inputs">
          <div className="input2">
            <label htmlFor="input2" className="labla">Sort</label>
            <select name="input2" id="input2" onChange={(e)=>setsort(e.target.value)}>
              <option value="title">title</option>
              <option value="price">price</option>
              <option value="createdAt">createdAt</option>
            </select>
          </div>
          <div className="input3">
            <label htmlFor="input3" className="labla">Order</label>
            <select name="input3" id="input3"  onChange={(e)=>setorder(e.target.value)}>
            <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
        </div>
      </div>
      <div className="middels">
        {filteredcourses.map((course, index) => (
          <div key={course._id} className="card">
            <img src={`${domain}/uplouds/${course.imgcourse}`} alt={course.title} />
            <div className="bob">
              <div className="fof">
              <h2>{course.title || "Untitled Course"}</h2>
              <p>{(course.description || "").substring(0, 40) + "..."}</p>
              </div>
              <div className="bot">
                <div className="to">
                <h2>${parseFloat(course.price || 0).toFixed(2)}/mo</h2>
                <p>{course.sales || 0} SALES</p>
                </div>
                <div className="bo">
                <span className={`col${(course.category || "").toLowerCase()}`}>{course.category || "Uncategorized"}</span>
                <span>{course.status || "Unknown"}</span>
                </div>
              </div>
            </div>
            <span className="colonicons" onClick={() => toggleMenu(index)}>
              <BsThreeDotsVertical />
            </span>
            {activeMenu === index && (
              <div className="menu">
                <p onClick={() => handleUpdate(course._id)} className="update">Update</p>
                <p onClick={() => handleDelete(course._id)} className="delete">Delete</p>
                <p onClick={() => handleView(course._id)} className="view">View</p>
                <p onClick={() => handlequiz(course._id)} className="quiz">Create Quiz</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mycorses;
