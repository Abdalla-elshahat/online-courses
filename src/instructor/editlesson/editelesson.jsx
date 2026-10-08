import './editlesson.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaTimes, FaVideo } from "react-icons/fa";
import { getCourse, getLesson, saveLesson } from "../../api/courseApi";
import { videoUrl } from "../../utels/image";

// /editlesson/:courseId           -> add a lesson
// /editlesson/:courseId/:lessonId -> edit it (new video is optional)
function Editelesson() {
    const { courseId, lessonId } = useParams();
    const nav = useNavigate();
    const isEdit = Boolean(lessonId);
    const [course, setCourse] = useState(null);
    const [form, setForm] = useState({ title: "", description: "", isFree: false, order: "" });
    const [video, setVideo] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [savedVideo, setSavedVideo] = useState(null);
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getCourse(courseId).then(setCourse).catch((err) => setError(err.message));
        if (isEdit) {
            getLesson(courseId, lessonId)
                .then((lesson) => {
                    setForm({
                        title: lesson.title,
                        description: lesson.description || "",
                        isFree: lesson.isFree,
                        order: lesson.order,
                    });
                    setSavedVideo(videoUrl(lesson.video));
                    setVideoPreview(videoUrl(lesson.video));
                })
                .catch((err) => setError(err.message));
        }
    }, [courseId, lessonId, isEdit]);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideo(file);
            setVideoPreview(URL.createObjectURL(file));
        }
        e.target.value = ""; // allow picking the same file again after removing it
    };

    const handleRemoveVideo = () => {
        setVideo(null);
        setVideoPreview(savedVideo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title.trim()) return setError("Lesson title is required");
        if (!isEdit && !video) return setError("Please choose the lesson video");
        setError("");

        const data = new FormData();
        data.append("title", form.title);
        data.append("description", form.description);
        data.append("isFree", form.isFree);
        if (isEdit && form.order) data.append("order", form.order);
        if (video) data.append("video", video);

        try {
            setProgress(0);
            const response = await saveLesson(courseId, lessonId, data, setProgress);
            if (response.ok) {
                toast.success(isEdit ? "Lesson updated" : "Lesson added", { icon: <FaCheckCircle color="green" /> });
                setTimeout(() => nav(`/editcorses/${courseId}`), 800);
            } else {
                setError(response.data?.message || "Could not save the lesson");
            }
        } catch (err) {
            setError("Network error while uploading the lesson");
        } finally {
            setProgress(null);
        }
    };

    const uploading = progress !== null;

    return (
        <>
            <ToastContainer />
            <div className="dash editcorses editlesson">
                <div className="content">
                    <div className="studentdashbord">
                        <p>{isEdit ? "Edit Lesson" : "New Lesson"}{course ? ` · ${course.title}` : ""}</p>
                        <span className="back" onClick={() => nav(`/editcorses/${courseId}`)}>
                            <FaArrowLeft /> Back to course
                        </span>
                    </div>
                    <form className="bottomc" onSubmit={handleSubmit}>
                        <div className="card cardleft">
                            <div className="bake">
                                <div className="blok">
                                    <label htmlFor="title">Title *</label>
                                    <input type="text" id="title" name="title" maxLength={200} placeholder="Lesson title" value={form.title} onChange={handleChange} required />
                                </div>
                                <div className="blok">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" rows="8" maxLength={5000} placeholder="What will students learn in this lesson?" value={form.description} onChange={handleChange} />
                                </div>
                                {isEdit && (
                                    <div className="blok">
                                        <label htmlFor="order">Position in course</label>
                                        <input type="number" id="order" name="order" min="1" step="1" value={form.order} onChange={handleChange} />
                                    </div>
                                )}
                                <label className="checkline">
                                    <input type="checkbox" name="isFree" checked={form.isFree} onChange={handleChange} />
                                    Free preview (students can watch it before buying)
                                </label>
                            </div>
                            {error && <p className="lesson-error"><FaExclamationCircle /> {error}</p>}
                            <span className="save">
                                <input type="submit" value={uploading ? "Uploading..." : isEdit ? "Save Changes" : "Add Lesson"} disabled={uploading} />
                            </span>
                        </div>
                        <div className="card">
                            <div className="toeditcors">
                                <span>
                                    <h2>Lesson Video {isEdit ? "" : "*"}</h2>
                                    <p>MP4, WEBM, OGG or MOV · max 500 MB</p>
                                </span>
                            </div>
                            <div className="bottomcltt">
                                {videoPreview ? (
                                    <div className="lesson-video">
                                        <video src={videoPreview} controls preload="metadata" />
                                        {video && (
                                            <button type="button" className="remove-btn" onClick={handleRemoveVideo} title="Remove">
                                                <FaTimes />
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div className="lesson-video empty"><FaVideo /> No video selected</div>
                                )}
                                <div className="aab">
                                    <div className="upload">
                                        <label htmlFor="lessonvideo" className="tot totlesson"><FaVideo /></label>
                                        <span className="filename">{video ? video.name : isEdit ? "Replace video (optional)" : "Choose the lesson video"}</span>
                                        <input type="file" id="lessonvideo" accept="video/mp4,video/webm,video/ogg,video/quicktime" onChange={handleVideoChange} style={{ display: "none" }} />
                                        <button type="button" onClick={() => document.getElementById("lessonvideo").click()}>Choose file</button>
                                    </div>
                                </div>
                                {uploading && (
                                    <div className="upload-progress">
                                        <div className="upload-progress-bar" style={{ width: `${progress}%` }} />
                                        <span>{progress < 100 ? `Uploading ${progress}%` : "Processing..."}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Editelesson;
