import './serice.css';
import { MdOndemandVideo } from "react-icons/md";
import { FaRegPlayCircle, FaGraduationCap } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { domain } from '../../utels/constents/const';
import { imageUrl, onImageError } from '../../utels/image';
import { Stars } from '../../instructor/profileins/instructorCourses';

const CATEGORIES = [
  { value: "all", label: "ALL" },
  { value: "web development", label: "Web Development" },
  { value: "data science", label: "Data Science" },
  { value: "machine learning", label: "Machine Learning" },
  { value: "mobileApp", label: "Mobile App" },
];

// the course store: every active course, so a student can pick one to buy
function Serice() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("createdAt");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const order = sort === "createdAt" ? "desc" : "asc";
        const params = new URLSearchParams({ category, sort, order, status: "active", stats: "true" });
        const response = await fetch(`${domain}/api/courses?${params}`);
        if (!response.ok) throw new Error("Could not load courses");
        const result = await response.json();
        setData(result.data.courses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category, sort]);

  const term = search.trim().toLowerCase();
  const courses = data.filter((course) =>
    !term || [course.title, course.author, course.description].some((text) => (text || "").toLowerCase().includes(term))
  );

  return (
    <div className="serice store">
      <div className="tops">
        <h2 className="serich">Services <span className="count">{courses.length} course{courses.length === 1 ? "" : "s"}</span></h2>
        <div className='sortdev'>
          <span className="store-search">
            <IoSearchSharp />
            <input type="text" placeholder="Search courses or instructors" value={search} onChange={(e) => setSearch(e.target.value)} />
          </span>
          <span>Sort : </span>
          <div className="select">
            <select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="createdAt">Newest</option>
              <option value="title">Course name</option>
              <option value="price">Price (low to high)</option>
              <option value="author">Author</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="sericelist">
        {CATEGORIES.map((item) => (
          <li key={item.value} className={category === item.value ? 'activee' : ''} onClick={() => setCategory(item.value)}>
            {item.label}
          </li>
        ))}
      </ul>

      <div className="middels">
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && courses.length === 0 && <p>No courses found.</p>}
        {!loading && !error && courses.map((course) => (
          <div className="card" key={course._id} onClick={() => nav(`/view/${course._id}`)}>
            <img src={imageUrl(course.imgcourse)} onError={onImageError} alt={course.title} className='sericimg' />
            <div className="back">
              <span><FaRegPlayCircle className='span' /></span>
            </div>
            <span className="store-category">{course.category}</span>
            <h2>{course.title}</h2>
            <p><FaGraduationCap /> {course.author || "Unknown instructor"}</p>
            <p><MdOndemandVideo /> {course.lessons} lesson{course.lessons === 1 ? "" : "s"}</p>
            <div className="store-rating">
              <Stars rating={course.rating} />
              <span>{course.ratingsCount ? `${course.rating} (${course.ratingsCount})` : "No ratings yet"}</span>
            </div>
            <div className="store-footer">
              <span className="price">{course.price ? `$${course.price}` : "Free"}</span>
              <button type="button" className="store-buy" onClick={(e) => { e.stopPropagation(); nav(`/view/${course._id}`); }}>
                View course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Serice;
