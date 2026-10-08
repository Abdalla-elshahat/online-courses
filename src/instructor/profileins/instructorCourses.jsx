import "./instructorCourses.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { getUserCourses } from "../../api/courseApi";
import { imageUrl, onImageError } from "../../utels/image";

// reviews are stored as 1..10 by some clients and 1..5 by others; show them on a 5-star scale
export const Stars = ({ rating }) => {
  const value = rating > 5 ? rating / 2 : rating;
  return [1, 2, 3, 4, 5].map((n) =>
    value >= n ? <IoMdStar key={n} /> : value >= n - 0.5 ? <IoStarHalfSharp key={n} /> : <IoMdStarOutline key={n} />
  );
};

// grid of the courses `userId` added; clicking a card opens the course
function InstructorCourses({ userId, title = "Courses", emptyText = "No courses added yet." }) {
  const nav = useNavigate();
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;
    getUserCourses(userId).then(setCourses).catch((err) => setError(err.message));
  }, [userId]);

  return (
    <div className="instructor-courses">
      <h2 className="ic-title">
        {title} {courses && <span>{courses.length}</span>}
      </h2>
      {error && <p className="ic-empty">{error}</p>}
      {!error && !courses && <p className="ic-empty">Loading...</p>}
      {courses && courses.length === 0 && <p className="ic-empty">{emptyText}</p>}
      {courses && courses.length > 0 && (
        <div className="ic-grid">
          {courses.map((course) => (
            <div className="ic-card" key={course._id} onClick={() => nav(`/view/${course._id}`)}>
              <img src={imageUrl(course.imgcourse)} onError={onImageError} alt={course.title} />
              <div className="ic-body">
                <span className="ic-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="ic-rating">
                  <Stars rating={course.rating} />
                  <span>{course.ratingsCount ? `${course.rating} (${course.ratingsCount})` : "No ratings yet"}</span>
                </div>
                <div className="ic-footer">
                  <span className="ic-lessons"><MdOndemandVideo /> {course.lessons} lesson{course.lessons === 1 ? "" : "s"}</span>
                  <span className="ic-price">{course.price ? `$${course.price}` : "Free"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InstructorCourses;
