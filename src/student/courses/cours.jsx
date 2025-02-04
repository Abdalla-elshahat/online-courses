import './cours.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft, FaHeartCircleCheck } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaArrowRight} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"; 
function Cours() {
       const domain = "http://localhost:4000";
          const token = Cookies.get("token");
    const nav=useNavigate();
    const [courses, setCourses] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(0);
    const [limit,setlimit] = useState(6);
    const [loading, setLoading] = useState(false); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("All");
    const [favCourses, setFavCourses] = useState([]);
    const [sort, setsort] = useState("title");
    const [order, setorder] = useState("asc");
    if(!token){
        nav("/sinup");
    }
    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${domain}/api/courses?limit=${limit}&page=${currentPage}&sort=${sort}&order=${order}&category=${category}`, {
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
            setCourses(data.data.courses);
            setTotalPages(data.data.pagination?.totalPages || 0);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };
    const toggleFavorite = async (c_id) => {
        setLoading(true);
        try {
            const isFavorited = favCourses.includes(c_id);
            const url = isFavorited ? `${domain}/api/courses/delete/favorites` : `${domain}/api/courses/add/favorites`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ "courseId": c_id })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
      const data = await response.json();
            if (data.status === 200) {
                setFavCourses(prevState => {
                    if (isFavorited) {
                        return prevState.filter(id => id !== c_id);
                    } else {
                        return [...prevState, c_id];
                    }
                });
            } else {
                console.error("Failed to update favorite:", data.message);
            }} catch (error) {
            console.error("Error toggling favorite:", error);
        } finally {
            setLoading(false);
        }
    };
    const fetsearchname = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${domain}/api/courses/search?q=${searchTerm}`, {
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
            setCourses(data.data.courses);
            console.log(data)
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        setCurrentPage(1);
        if (e.target.value) {
            fetsearchname(); // استدعاء البحث عند إدخال نص
        } else {
            fetchCourses(); // إعادة تحميل كل الكورسات عند مسح البحث
        }
    };
    const handleCategoryChange = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
        setCurrentPage(1);
    };
    const handleStatusChange = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
        setCurrentPage(1);
    };
    const handlelimitChange = (e) => {
        e.preventDefault();
        setlimit(parseInt(e.target.value));
        setCurrentPage(1);
    };
    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };
    const handleView = (courseId) => {
        nav(`/view/${courseId}`);
        console.log("View course:", courseId);
      };
      useEffect(() => {
        fetchCourses();
    }, [currentPage, category, status,limit]); 
    useEffect(() => {
       toggleFavorite();
    }, [favCourses]);
    return (
        <>
            <div className="serice courses">
                <div className="tops">
                    <h2 className="serich">Courses</h2>
                </div>
                <div className="inputall">
                    <span className="input1">
                        <input type="text" placeholder="Search courses" value={searchTerm} onChange={(e)=>handleSearch(e)} />
                        <IoSearchSharp />
                    </span>
                    <div className="inputs">
                        <div className="input2">
                            <label htmlFor="input2" className="labla">Category</label>
                            <select name="input2" id="input2" onChange={handleCategoryChange}>
                                <option value="">All Categories</option>
                                <option value="web development">web development</option>
                                <option value="data science">data science</option>
                                <option value="machine learning">machine learning</option>
                                <option value="mobileApp">mobileApp</option> 
                            </select>
                        </div>
                        <div className="input3">
                            <label htmlFor="input3" className="labla">Status</label>
                            <select name="input3" id="input3" onChange={handleStatusChange}>
                                <option value="active">active</option>
                                <option value="inactive">inactive</option>
                                <option value="archived">archived</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="middels">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        courses.map((course, index) => (
                            <div className="card cardcors" key={index}>
                                <div className="topcors">
                                    <img src={`${domain}/uplouds/${course.imgcourse}`} alt="logo" />
                
                                    <p>{course.description.substring(0,30)+"..."}</p>
                                </div>
                                <div className="bottomcors">
                                    <div className="taqem">
                                    <h2 className="corsh" onClick={()=>handleView(course._id)}>title: {course.title}</h2>
                                        <span className='top'>
                                        {/* <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoStarHalfSharp /> <span>{course.rating}</span> */}
                                        {
                                              favCourses.includes(course._id)? 
                                              <FaHeartCircleCheck className='hdone' onClick={() => toggleFavorite(course._id)} /> 
                                              : <FaHeartCirclePlus className='hplus' onClick={() => toggleFavorite(course._id)} />
                                        }
                                        </span>
                                    </div>
                                    <span className='author'>author : <span>{course.author}</span></span>
                                    <div className="buy">
                                        <span>${course.price}</span>
                                        <button className="buycors"><MdAddShoppingCart /></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="botcorses">
                    <div className="l">
                        <label htmlFor="view">View</label>
                        <select name="view" id="view" onChange={(e)=>handlelimitChange(e)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select>
                    </div>
                    <div className="pagination">
                    <button
                        className="pagination-arrow"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 1}
                    >
                        <FaArrowLeft />
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        className="pagination-arrow"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === totalPages}
                    >
                        <FaArrowRight />
                    </button>
                </div>
                </div>
            </div>
        </>
    );
}

export default Cours;
