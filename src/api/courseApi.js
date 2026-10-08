import Cookies from "js-cookie";
import { domain } from "../utels/constents/const";
import { uploadWithProgress } from "../utels/upload";

const authHeaders = () => ({ Authorization: `Bearer ${Cookies.get("token")}` });

// GET/DELETE helper: resolves to the parsed body, throws with the server message on failure
const request = async (path, method = "GET") => {
  const response = await fetch(`${domain}${path}`, { method, headers: authHeaders() });
  let data = null;
  try {
    data = await response.json();
  } catch {}
  if (!response.ok) throw new Error(data?.message || `Request failed (${response.status})`);
  return data;
};

export const getCourse = async (courseId) => (await request(`/api/courses/${courseId}`)).data.course;

export const getLessons = async (courseId) =>
  (await request(`/api/courses/${courseId}/lessons`)).data.lessons;

export const getLesson = async (courseId, lessonId) =>
  (await request(`/api/courses/${courseId}/lessons/${lessonId}`)).data.lesson;

export const deleteLesson = (courseId, lessonId) =>
  request(`/api/courses/${courseId}/lessons/${lessonId}`, "DELETE");

// FormData with title / description / isFree / order / video; resolves to { ok, status, data }
export const saveLesson = (courseId, lessonId, formData, onProgress) =>
  uploadWithProgress(
    `${domain}/api/courses/${courseId}/lessons${lessonId ? `/${lessonId}` : ""}`,
    lessonId ? "PATCH" : "POST",
    Cookies.get("token"),
    formData,
    onProgress
  );

// course quizzes; the API answers 404 when there are none
export const getCourseQuizzes = async (courseId) => {
  try {
    return (await request(`/api/quiz/quizzes/course/${courseId}`)).data;
  } catch {
    return [];
  }
};

// courses a user (instructor) added, with lesson count and average rating
export const getUserCourses = async (userId) =>
  (await request(`/api/courses/by-user/${userId}`)).data.courses;

export const getInstructorDashboard = async () =>
  (await request("/api/courses/instructor/dashboard")).data;
