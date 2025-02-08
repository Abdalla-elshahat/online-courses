import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "./view.css";
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
const ViewCourse = () => {
  const token = Cookies.get("token");
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [activeMenu, setActiveMenu] = useState(null); // القائمة النشطة
  const [rating, setrating] = useState(0); // القائمة النشطة
  const [Data,setUserData] = useState(null); // القائمة النشطة
  const [Reviewid, setReviewid] = useState(null);
  const [update, setupdate] = useState(""); // القائمة النشطة
  const [quiz,setquiz]=useState([]);
  // const handlerating=(e)=>{
  //   e.perventDefault();
  //   setrating(e.target.value);
  // }
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // تبديل القائمة
  };
  const fetchCourseById = async (courseId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/${courseId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        setCourseData(data.data.course);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };
  const fetchQuizBycourseId = async (courseId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/quiz/quizzes/course/${courseId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        console.log(data.data)
      setquiz(data.data)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };
  const fetchReviews = async (courseId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/${courseId}/reviews`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setReviews(data.data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
  };
  const handleAddReview = async (courseId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/${courseId}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: newRating,
            comment: newComment,
          }),
        });
        const data = await response.json();
        setNewComment(""); // Clear the input field
        setNewRating(5); // Reset the rating
        fetchReviews(courseId); // Refresh reviews
      } catch (error) {
        console.error("Error adding review:", error);
      }
    }
  };
  const handleDeleteReview = async (courseId, reviewId) => {
    if (token) {
      try {
        await fetch(`${domain}/api/courses/${courseId}/reviews/${reviewId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActiveMenu(null)
        fetchReviews(courseId); // Refresh reviews
        setActiveMenu(null)
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    }
  };
  const handleUpdateReview = async (courseId, reviewId) => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/courses/${courseId}/reviews/${reviewId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: rating,
            comment: update,
          }),
        });
        if (!response.ok) throw new Error("Failed to update review");
        fetchReviews(courseId);
        setReviewid(null);
        setupdate("");
      } catch (error) {
        console.error("Error updating review:", error);
      }
    }
  };
  const fetchUserData = async () => {
          if (token) {
            try {
              const response = await fetch(`${domain}/api/users/alldata`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
              });
              const data = await response.json();
              setUserData(data);
            } catch (error) {
              console.error("Failed to fetch user data:", error);
            }
          }
        };
  const handleUpdate = (reviewId, currentComment, currentRating) => {
          setReviewid(reviewId);
          setupdate(currentComment); // تعبئة النص الحالي في الحقل
          setrating(currentRating); // تعبئة التقييم الحالي
          setActiveMenu(null)
        };
  useEffect(() => {
    fetchCourseById(courseId);
    fetchReviews(courseId);
    fetchQuizBycourseId(courseId);
    fetchUserData();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <div className="view-course-container">
      <div className="course-details">
        <img
          src={`${domain}/uplouds/${courseData.imgcourse}`}
          alt={courseData.title}
          className="course-image"
        />
        <div className="course-info">
          <h1 className="course-title">{courseData.title}</h1>
          <p className="course-description">{courseData.description}</p>
          <p className="course-author">
            <strong>Author:</strong> {courseData.author}
          </p>
          <p className="course-category">
            <strong>Category:</strong> {courseData.category}
          </p>
          <p className="course-price">
            <strong>Price:</strong> ${courseData.price}
          </p>
          {quiz&&quiz.map((e,index)=>{
            return(
              <div key={e.id} className="quiz">
              <p className="course-price">
            <strong>Quiz{index+1}</strong><Link to={`/takequiz/${e._id}`} className="link">{e.title}</Link></p>
                </div>
            )
          })}
        </div>
      </div>
      <div className="reviews-section">
        <h2>Reviews</h2>
        <div className="add-review">
          <input type="text"
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your review..."
          />
        
{/* <form id="ratingForm" action={(e)=>{handlerating(e)}}>
  <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
  </fieldset>
  <button className="submit clearfix">comment</button>
  </form> */}
          <div className="btn-comment">
          <button onClick={() =>setNewComment("")}>cancel</button>
          <button onClick={() =>handleAddReview(courseId)}>comment</button>
          </div>
         
        </div>
        {reviews.map((review, index) => (
          <div key={review._id} className="review">
            <img src={`${domain}/uplouds/${review.avatar}`} alt={review.userName} className="review-avatar"/>
            <div className="review-content">
              <div className="left">
                <span className="top">
                <h4>{review.username}</h4>
                </span>
               {Reviewid===review._id?(
                <div className="bottom">
                  <div className="add-review updates">
                  <input type="text"  value={update} onChange={(e) => setupdate(e.target.value)} className="updatetext"/>
                  <div className="btn-comment">
                  <button onClick={() =>setupdate("")}>cancel</button>
                  <button onClick={() =>handleUpdateReview(courseId, review._id)}>Save</button>
                  </div>
          </div>
                </div>
               ):(
                <div className="bottom">
                {/* <p>{review.rating}</p> */}
                <p>{review.comment}</p>
                </div>
               )} 
              </div>
              <div className="right">
              {review.userId === Data?._id && (
  <span className="colonicons" onClick={() => toggleMenu(index)}>
    <BsThreeDotsVertical />
  </span>
)}
              </div>
              {activeMenu === index && (
                <div className="menu">
                  <p className="delete" onClick={() => handleDeleteReview(courseId, review._id)}><MdDelete/> Delete</p>
                  <p className="update" onClick={() => handleUpdate(review._id, review.comment, review.rating)}><MdEdit /> Update</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourse;

