import './createquiz.css';
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { ImParagraphJustify } from "react-icons/im";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from "js-cookie"; 
function Createquiz() {
      const domain = "http://localhost:4000";
      const token = Cookies.get("token");
    const { courseId } = useParams();
    const nav = useNavigate();
    const [courseData, setCourseData] = useState([]);
    const [quizData, setQuizData] = useState({title: "",courseId:"", questions: [],category: "web development",timeLimit: 300,isPublished: false});
    const [newQuestion, setNewQuestion] = useState({text: "",difficulty: "easy",
answers: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
        ],
    });

    const fetchCourseById = async (courseId) => {
        if (token) {
            try {
                const response = await fetch(`${domain}/api/courses/${courseId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch course with ID: ${courseId}`);
                }

                const data = await response.json();
                setCourseData(data.data.course);
            } catch (error) {
                console.error(`Error fetching course with ID: ${courseId}`, error);
            }
        }
    };
    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...newQuestion.answers];
        updatedAnswers[index] = { ...updatedAnswers[index], text: value };
        setNewQuestion((prev) => ({ ...prev, answers: updatedAnswers }));
    };

    const handleCorrectChange = (index) => {
        setNewQuestion((prev) => ({
            ...prev,
            answers: prev.answers.map((answer, i) => ({
                ...answer,
                isCorrect: i === index, // تعيين فقط الإجابة المختارة
            })),
        }));
    };

    const handleAddQuestion = () => {
        setQuizData((prev) => ({
            ...prev,
            questions: [...prev.questions, newQuestion],
        }));
        console.log(quizData)
        setNewQuestion({
            text: "",
            difficulty: "easy",
            answers: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
            ],
        });
    };

    const handleSaveQuiz = async () => {
        try {
            const response = await fetch(`${domain}/api/quiz/quizzes/${courseId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    courseID:courseId,
                    title: courseData.title,
                    questions: quizData.questions.map((question) => ({
                        text: question.text,
                        difficulty: question.difficulty,
                        answers: question.answers.map((answer) => ({
                            text: answer.text,
                            isCorrect: answer.isCorrect,
                            })),
                            })),
                            author:courseData.author,
                            category:courseData.category,
                            isPublished: true,
                            timeLimit:quizData.timeLimit
                }),
            });
            if (response.ok) {
               toast.success(
                        <span>
                          <FaCheckCircle style={{ marginRight: "8px", color: "green" }} />
                          Quiz Created successfully!
                        </span>
                      );
                      setTimeout(() => {
                        nav("/mycorses");
                      }, 1000);
                    } else {
                      const errorData = await response.json();
                      toast.error(
                        <span>
                          <FaExclamationTriangle style={{ marginRight: "8px", color: "red" }} />
                          {errorData.message || "Failed to create quiz Please try again."}
                        </span>
                      );
                    }
        } catch (error) {
            console.error("Error creating quiz:", error);
            alert("Failed to create quiz");
        }
        console.log(quizData)
    };
    useEffect(() => {
        fetchCourseById(courseId);
    }, [courseId]); 
    return (
        <>
            <div className="serice courses quiz">
            <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
                <div className="tops">
                    <h2 className="serich">{courseData.title}:: Quiz</h2>
                    <span className='Goto' onClick={() => nav("/mycorses")}>Back to Course <FaArrowRight /></span>
                </div>
                <div className="card cardquiz">
                    <label htmlFor='Question'>New Question:</label>
                    <input
                        type="text"
                        id='Question'
                        value={newQuestion.text}
                        onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                    />
                    {newQuestion.text && (
                        <>
                            <div className="answers">
                                {newQuestion.answers.map((answer, index) => (
                                    <div key={index} className="answer">
                                        <label htmlFor={`Q${index + 1}`}>Q{index + 1}:</label>
                                        <input
    type="text"
    id={`Q${index + 1}`}
    value={newQuestion.answers[index]?.text || ""}
    onChange={(e) => handleAnswerChange(index, e.target.value)}
    required
/>
                                    </div>
                                ))}
                            </div>
                            <div className="correctanswer">
                                <label htmlFor='correct'>Correct Answer:</label>

                                <select
    id='correct'
    value={newQuestion.answers.findIndex(answer => answer.isCorrect) !== -1 ? newQuestion.answers.findIndex(answer => answer.isCorrect) : 0}
    onChange={(e) => handleCorrectChange(Number(e.target.value))}
>
    {newQuestion.answers.map((_, index) => (
        <option key={index} value={index}>
            Q{index + 1}
        </option>
    ))}
</select>
                            </div>
                        </>
                    )}
                    <label htmlFor='Difficulty'>Difficulty:</label>
                    <select
                        id='Difficulty'
                        value={newQuestion.difficulty}
                        onChange={(e) => setNewQuestion({ ...newQuestion, difficulty: e.target.value })}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <span onClick={handleAddQuestion}>
                        <FaPlus /> Create Question
                    </span>
                </div>
                <div className="card">
                    {quizData.questions.map((question, index) => (
                        <div key={index} className="toto">
                            <span className='tograp'>
                                <span><ImParagraphJustify /></span>
                                <p>Q: {question.text}</p>
                            </span>
                            <span className="delet" onClick={() =>
                                setQuizData((prev) => ({
                                    ...prev,
                                    questions: prev.questions.filter((_, i) => i !== index),
                                }))
                            }>
                                Delete
                            </span>
                        </div>
                    ))}
                </div>
                <div className="endquiz">
                <span>
                    <label htmlFor="time">Quiz-Time-bymin</label>
                    <input type="number" id='time' value={quizData.timeLimit} onChange={(e) => setQuizData({ ...quizData, timeLimit: Number(e.target.value) })} />
                </span>
                <button onClick={handleSaveQuiz} className="saveQuizButton">
                    Save Quiz
                </button>
                </div>
            </div>
        </>
    );
}

export default Createquiz;
