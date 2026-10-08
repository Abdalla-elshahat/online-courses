import './dashbordins.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { FaUserGraduate, FaChartLine, FaClipboardCheck } from "react-icons/fa6";
import { getInstructorDashboard } from '../../api/courseApi';
import { imageUrl, onImageError } from '../../utels/image';

const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;

function Dashbord(){
    const nav = useNavigate();
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getInstructorDashboard().then(setData).catch((err) => setError(err.message));
    }, []);

    if (error) return <div className="dash dashins"><div className="content"><p className="dash-empty">{error}</p></div></div>;
    if (!data) return <div className="dash dashins"><div className="content"><p className="dash-empty">Loading...</p></div></div>;

    const { stats, courses, recentAttempts } = data;
    const cards = [
        { label: "Courses", value: stats.courses, note: `${stats.publishedCourses} published`, icon: <IoLibrary /> },
        { label: "Lessons", value: stats.lessons, note: "videos uploaded", icon: <MdOndemandVideo /> },
        { label: "Quizzes", value: stats.quizzes, note: "across your courses", icon: <PiExamFill /> },
        { label: "Quiz attempts", value: stats.attempts, note: "submitted by students", icon: <FaClipboardCheck /> },
        { label: "Students", value: stats.students, note: "took at least one quiz", icon: <FaUserGraduate /> },
        { label: "Average score", value: `${stats.averageScore}%`, note: "over all attempts", icon: <FaChartLine /> },
    ];

    return(
        <>
         <div className="dash dashins">
            <div className="content">
                <div className="studentdashbord">
                    <p>Instructor Dashboard</p>
                <div className="buton">
                    <button className="view" onClick={() => nav("/addcourss")}>New Course <span><FaPlus/></span></button>
                    <button className="view" onClick={() => nav("/mycorses")}>Go To courses <span> <FaArrowRight/></span></button>
                </div>
                </div>
                <div className="feature">
                    <div className="topc">
                        {cards.map((card) => (
                            <div className="card" key={card.label}>
                                <div className="infodains">
                                    <h2 className="in">{card.label}</h2>
                                    <h1 className="bigins">{card.value}</h1>
                                    <p className="srate neutral">{card.note}</p>
                                </div>
                                <div className="bakico b1">{card.icon}</div>
                            </div>
                        ))}
                    </div>
               <div className="bottomc">
                <div className="leftbottomc">
                    <div className="lefttopbottomc">
                        <div className="topprogress">
                            <div className="topprogressl">
                                <h1>Your Courses</h1>
                                <p>Lessons, quizzes and average quiz score per course</p>
                            </div>
                            <div className="topprogressr">
                                <button className='Brows' onClick={() => nav("/mycorses")}>Browse All</button>
                            </div>
                        </div>
                        <div className="progressbottom">
                            {courses.length === 0 && (
                                <p className="dash-empty">You have not added a course yet. <span onClick={() => nav("/addcourss")}>Create your first course</span></p>
                            )}
                            {courses.map((course) => (
                                <div className="block" key={course._id}>
                                    <div className="left" onClick={() => nav(`/view/${course._id}`)}>
                                        <img src={imageUrl(course.imgcourse)} onError={onImageError} alt="" className="cover" />
                                        <div className="bob">
                                            <p>{course.title}</p>
                                            <span className="meta">
                                                {plural(course.lessons, "lesson")} · {plural(course.quizzes, "quiz")} · {plural(course.attempts, "attempt")}
                                                {!course.hasIntroVideo && " · no intro video"}
                                            </span>
                                            <span className='con'><span style={{ width: `${course.averageScore}%` }}></span></span>
                                        </div>
                                        <span className='presnt'>{course.attempts ? `${course.averageScore}%` : "—"}</span>
                                    </div>
                                    <div className="right actions">
                                        <button className="Brows" onClick={() => nav(`/editcorses/${course._id}`)}>Lessons</button>
                                        <button className="Brows" onClick={() => nav(`/createquiz/${course._id}`)}>Quiz</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rightinsdashbottom">
                    <div className="lefttopbottomc">
                        <div className="topprogress">
                            <div className="topprogressl">
                                <h1>Recent Quiz Results</h1>
                                <p>Latest attempts by your students</p>
                            </div>
                        </div>
                        <div className="progressbottom">
                            {recentAttempts.length === 0 && <p className="dash-empty">No student has taken a quiz yet.</p>}
                            {recentAttempts.map((attempt) => (
                                <div className="block" key={attempt._id}>
                                    <div className="left">
                                        <img src={imageUrl(attempt.student?.avatar)} onError={onImageError} alt="" className="avatar" />
                                        <div className="bob">
                                            <p>{attempt.student?.username || "Deleted user"}</p>
                                            <span className="meta">{attempt.quiz?.title} · {new Date(attempt.createdAt).toLocaleDateString()}</span>
                                            <span className='con'><span className={attempt.percent >= 50 ? "pass" : "fail"} style={{ width: `${attempt.percent}%` }}></span></span>
                                        </div>
                                        <span className='presnt'>{attempt.score}/{attempt.total}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
               </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Dashbord;
