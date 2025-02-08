import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
function Myquiz() {
  const token = Cookies.get("token");
  const nav=useNavigate();
  const [activeMenu, setActiveMenu] = useState(null); // القائمة النشطة
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [quiz, setquiz] = useState([]);
  const fetchUserquizAdded = async () => {
  
    if (token) {
      try {
        const response = await fetch(`${domain}/api/quiz/myquizzes`, {
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
        setquiz(data.data.quiz);
        console.log("quiz data:", data.data.quiz);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    }
  };
  const deletequizById = async (quizId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/quiz/quizzes/${quizId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to delete course with ID: ${quizId}`);
        }
        const data = await response.json();
         toast.success("Quiz deleted successfully", {
                icon: <FaCheckCircle color="green" />,
                });
        setquiz((prevData) =>
          prevData.filter((quiz) => quiz._id !== quizId)
        );
        setActiveMenu(null); // إغلاق القائمة المنسدلة
        console.log("Course deleted successfully", data);
      } catch (error) {
        console.error(`Error deleting course with ID: ${quizId}`, error);
      }
    }
  };
  useEffect(() => {
    fetchUserquizAdded();
  }, []);
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // تبديل القائمة
  };

  const handleUpdate = (courseId) => {
    nav(`/editcorses/${courseId}`);
  };

  const handleDelete = (courseId) => {
    deletequizById(courseId);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="serice courses mycorses">
       <ToastContainer/>
      <div className="tops">
        <h2 className="serich">Instructor Quizes</h2>
      </div>
      <div className="middels">
        {quiz.map((quiz, index) => (
          <div key={quiz._id} className="card">
            <div className="bob">
              <div className="fof">
              <h2><Link to={`/view/${quiz.courseId}`}>{quiz.title || "Untitled Course"}</Link></h2>
              </div>
              <div className="bot">
                <div className="to">
                <p>{quiz.author} </p>
                </div>
                <div className="bo">
                <span className={`col${(quiz.category || "").toLowerCase()}`}>{quiz.category || "Uncategorized"}</span>
                </div>
              </div>
            </div>
            <span className="colonicons" onClick={() => toggleMenu(index)}>
              <BsThreeDotsVertical />
            </span>
            {activeMenu === index && (
              <div className="menu">
                <p onClick={() => handleUpdate(quiz._id)} className="update">Update</p>
                <p onClick={() => handleDelete(quiz._id)} className="delete">Delete</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myquiz;
