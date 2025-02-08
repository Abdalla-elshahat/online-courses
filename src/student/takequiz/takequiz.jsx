import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import "./takequiz.css";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { domain } from "../../utels/constents/const";
function Takequiz() {
  const { quizid } = useParams();
  const nav=useNavigate();
  const token = Cookies.get("token");
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersState, setAnswersState] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    const fetchQuiz = async () => {
    if (quiz) {
     await setTimeLeft(quiz.timeLimit * 60); // تحويل الدقائق إلى ثوانٍ
    }
  }
  fetchQuiz ();
  }, [quiz]);
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0&&quiz) {
      submitAnswers();
    }
  }, [timeLeft]);

  const fetchQuizByquizid = async () => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/quiz/quizzes/${quizid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch quiz");
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  // ✅ جلب بيانات الكويز
  useEffect(() => {
    fetchQuizByquizid();
  }, [quizid]);

  // ✅ إرسال الإجابات عند آخر سؤال
  const submitAnswers = async () => {
    if (token) {
      try {
        const response = await fetch(`${domain}/api/quiz/quizzes/${quizid}/answers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            answers: Object.entries(answersState).map(([questionId, answer]) => ({
              questionId,
              answer,
            })),
          }),
        });

        if (!response.ok) throw new Error("Failed to submit answers");
       else{
 toast.success("Course updated successfully!", {
        icon: <FaCheckCircle color="green" />,
        });
        setTimeout(()=>{
          nav(`/score/${quizid}`)
        },1000)
       }
      } catch (error) {
        console.error("Submission Error:", error);
      }
    }
  };

  // ✅ تخزين الإجابات
  const handleAnswerSelection = (questionId, answer) => {
    setAnswersState((prev) => ({ ...prev, [questionId]: answer }));
  };

  if (loading) return <p>Loading...</p>;
  if (!quiz) return <p>No quiz found.</p>;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  return (
    <div className="serice courses takequiz">
         <ToastContainer/>
      <div className="tops">
        <div className="quizloc">
          <h2 className="serich">{quiz.title}</h2>
          <span>
          <p>
              <IoMdTime />
              <span style={{ color: timeLeft <= 10 ? "red" : "black", fontWeight: "bold", animation: timeLeft <= 10 ? "blink 1s infinite" : "none" }}>
                {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
              </span>
            </p>
          <p><FaGraduationCap /> {quiz.author}</p>
          </span>
        </div>
        <span className="Goto">
          <Link to={`/view/${quiz.courseId}`}>Back to Course <FaArrowRight /></Link>
        </span>
      </div>

      <div className="upgrade upgradequiz">
        <div className="left">
          <TbExclamationMark className="icon" />
          <p className="upgradeh2">
            You have <span>5 days left</span> on our subscription
          </p>
        </div>
      </div>

      <div className="safl">
        <div className="card">
          <div className="t">
            <p>
              <span>#{currentQuestionIndex + 1}</span> {currentQuestion.text}
            </p>
          </div>
          <form>
            <div className="m">
              {currentQuestion.answers.map((answer) => (
                <div className="blo" key={answer._id}>
                  <input
                    type="radio"
                    id={answer._id}
                    name={`q${currentQuestion._id}`}
                    checked={answersState[currentQuestion._id] === answer.text}
                    onChange={() => handleAnswerSelection(currentQuestion._id, answer.text)}
                  />
                  <label htmlFor={answer._id}>{answer.text}</label>
                </div>
              ))}
            </div>
            <div className="b">
              {currentQuestionIndex > 0 && (
                <button type="button" className="Goto" onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                  Previous
                </button>
              )}
              {isLastQuestion ? (
                <button type="button" className="Goto" onClick={submitAnswers}>
                  Submit <FaArrowRight />
                </button>
              ) : (
                <button type="button" className="Goto" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
                  Next <FaArrowRight />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Takequiz;
