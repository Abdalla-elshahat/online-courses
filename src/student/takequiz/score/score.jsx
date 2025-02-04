import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./score.css";
import Cookies from "js-cookie";
function Score() {
  const domain = "http://localhost:4000";
  const token = Cookies.get("token");
  const { quizid } = useParams();
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchScore = async () => {
    try {
      const response = await fetch(`${domain}/api/quiz/quizzes/${quizid}/score`,{
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              },
      });
      const data = await response.json();
      if (response.ok) {
        setScoreData(data);
      }
    } catch (error) {
      console.error("Error fetching score:", error);
    } finally {
      setLoading(false);
    }
  }; 
  useEffect(() => {
    fetchScore();
  }, [quizid]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!scoreData) {
    return <div className="error">Failed to fetch score.</div>;
  }

  return (
    <div className="score-container">
  <div className="score">
      <h2>Quiz Score</h2>
      <p>Score: {scoreData.score}/{scoreData.totalquestion}</p>
    </div>
        </div>

  );
}

export default Score;
