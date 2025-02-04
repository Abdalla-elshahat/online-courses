import './serice.css';
import { FaFileCode } from "react-icons/fa";
import { CgAlarm } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Serice() {
  const domain = "http://localhost:4000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("title");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${domain}/api/courses`;
        if (category) {
          url = `${domain}/api/courses/category/${category}?sort=${search}&order=desc`; // Fetch by category if a category is set
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data.courses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, [category, search]); // Only re-fetch when 'category' or 'search' changes

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSortChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="serice">
        <div className="tops">
          <h2 className="serich">Service</h2>
          <div className='sortdev'>
            <span>Sort : </span>
            <div className="select">
              <select name="sort" id="sort" onChange={handleSortChange}>
                <option value="title">Courses name</option>
                <option value="price">Price</option>
                <option value="author">Author</option>
              </select>
            </div>
          </div>
        </div>

        <ul className="sericelist">
          <li className={category === "" ? 'activee' : ''} onClick={() => handleCategoryChange("")}>ALL</li>
          <li className={category === "web development" ? 'activee' : ''} onClick={() => handleCategoryChange("web development")}>Web Development</li>
          <li className={category === "Data science" ? 'activee' : ''} onClick={() => handleCategoryChange("Data science")}>Data Science</li>
          <li className={category === "machine learning" ? 'activee' : ''} onClick={() => handleCategoryChange("machine learning")}>Machine Learning</li>
        </ul>

        <div className="middels">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((course) => (
              <div className="card" key={course._id}>
                <img
                  src={`${domain}/api/courses/coursesimg/${course.imgcourse}`}
                  alt={course.title}
                  className='sericimg'
                  height={"200px"}
                />
                <Link to={`/clesson/${course._id}`}>
                  <div className="back">
                    <span><FaRegPlayCircle className='span' /></span>
                  </div>
                </Link>
                <h2>{course.title}</h2>
                <p>
                  <FaFileCode /> 25 lessons <CgAlarm /> 4 Hours
                </p>
                <span className="price">${course.price}</span>
              </div>
            ))
          )}
        </div>

        <div className="bots">
          <h2>Get all courses for $99</h2>
          <button className='purs'>
            Purchase <span><MdShoppingCart /></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Serice;
