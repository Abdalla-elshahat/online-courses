import './profile.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { PiShieldStarFill } from "react-icons/pi";
import { BsLink45Deg } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { SlCalender } from 'react-icons/sl';
import { IoMdLaptop } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"; 
import { domain } from '../../utels/constents/const';
function Profile(){
    const token = Cookies.get("token");
    const nav=useNavigate();
    const [userData, setUserData] = useState(null);
    const [favData, setfavData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
    const fetchUserData = async () => {
        if (token) {
          try {
            const response = await fetch(`${domain}/api/users/alldata`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            });
            const data = await response.json();
            setUserData(data);
            console.log(data)
          } catch (error) {
            console.error("Failed to fetch user data:", error);
          }
        }
        else{
            setTimeout(()=>{
            nav("/sinup")
            },0)
        }
      };
      const fetchfavouritcourse = async () => {
        if (token) {
          try {
            const response = await fetch(`${domain}/api/courses/all/favorites`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            });
            const data = await response.json();
            setfavData(data.data);
          } catch (error) {
            console.error("Failed to fetch user data:", error);
          }
        }
      };
      useEffect(() => {
        fetchUserData();
      }, []);
      const parsedSkills = userData?.skills?.[0] ? JSON.parse(userData.skills[0]) : [];
      useEffect(()=>{
        fetchfavouritcourse();
      },[favData])
    
      if (!userData) {
        return <div>Loading...</div>;
      }
    return(
        <>
        <div className="profilee">
            <h2 className='profileacount'>Your profile</h2>
            <p className='LEMA'>{userData.email}</p>
           <div className="pros">
            <div className="left">
<div className="card">
    <div className="informa">
    <img src={`${domain}/uplouds/${userData.avatar}`} alt="User Avatar" className="profile-avatar"    onClick={togglePopup}/>
    {isPopupOpen && (
                  <div className="popup">
                    <div className="popup-content">
                      <img
                        src={`${domain}/uplouds/${userData.avatar}`}
                        alt="User Avatar"
                        className="popup-image"
                      />
                      <button className="close-btn" onClick={togglePopup}>X</button>
                    </div>
                  </div>
                )}
    <div className='datauser'>
    <h1>{userData.username}</h1>
<p className='ander'>title:<span>{userData.job}</span></p>
<p className='country'>from:<span>{userData.country}</span></p>
<p className='country'>Role:<span>{userData.role}</span></p>
    <div className="icos">
  {JSON.parse(userData.socialmedia).facebook && (
    <a 
      href={JSON.parse(userData.socialmedia).facebook} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
    >
      <FaFacebook className="icon f" /> {JSON.parse(userData.socialmedia).facebook}
    </a>
  )}
  {JSON.parse(userData.socialmedia).twitter && (
    <a 
      href={JSON.parse(userData.socialmedia).twitter} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
    >
      <FaTwitter className="icon t" /> {JSON.parse(userData.socialmedia).twitter}
    </a>
  )}
  {JSON.parse(userData.socialmedia).instagram && (
    <a 
      href={JSON.parse(userData.socialmedia).instagram} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
    >
      <FaInstagram className="icon i" /> {JSON.parse(userData.socialmedia).instagram}
    </a>
  )}
  {JSON.parse(userData.socialmedia).Github && (
    <a 
      href={JSON.parse(userData.socialmedia).Github} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
    >
      <FaGithub className="icon g" /> {JSON.parse(userData.socialmedia).Github}
    </a>
  )}
  {JSON.parse(userData.socialmedia).Linkedin && (
    <a 
      href={JSON.parse(userData.socialmedia).Linkedin} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link"
    >
      <FaLinkedin className="icon l" /> {JSON.parse(userData.socialmedia).Linkedin}
    </a>
  )}
       </div>
    </div>
        <div className="achive">
            <h2>Achievements</h2>
        </div>
        <div className="colors">
            <div className="oneb" >Senior Develober</div>
            <PiShieldStarFill  className='one'/>
            <div className="twob">100 lessons learned</div>
            <PiShieldStarFill className='two'/>
            <div className="threeb"> First couse compeleted</div>
            <PiShieldStarFill className='three'/>
            <div className="fourb">1 serise compeleted</div>
            <PiShieldStarFill className='four'/>
            <div className="fiveb">Vip pass</div>
            <PiShieldStarFill className='five'/>
        </div>
        <div className="skills">
            <h2>Skills</h2>
        </div>
                             <div className="progressbottom">
                             {parsedSkills.length > 0 ? (
        parsedSkills.map((skill, index) => (
          <div className="block" key={index}>
          <div className="left blokpr">
            <img src={skill.image} alt={skill.label}  style={{ width: "50px",height: "50px", marginRight: "8px" }} />
            <div className="bob">
              <p>{skill.label}</p>
              <span className="con">
                <span className={`progress-bar progress-${index + 1}`}></span>
              </span>
            </div>
            <span className="presnt">{skill.progress}</span>
          </div>
        </div>
        ))
      ) : (
        <p>No skills found.</p>
      )}
                        </div>
    </div>
    </div>
    </div> 
            <div className="rightpro">
<div className="toppro">
                        <div className="card">
                            <div className="bakico b1"><SlCalender/></div>
                            <div className="clop">
                            <p className='cardp'>{(userData.role==="manger"||"admin")?"Courses Added":"Courses Taken"}</p>
                            <h2 className="cardh2">{(userData.posts).length}</h2>
                            </div>
                        </div>
                        <div className="card">
                        <div className="bakico b2"><IoMdLaptop/></div>
                            <div className="clop">
                            <p className='cardp'>{(userData.role==="manger"||"admin")?"Quiz Added":"Quiz Taken"}</p> 
                            <h2 className="cardh2">{(userData.role==="manger"||"admin")?(userData.quiz).length:(userData.quiztaken).length}</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="bakico b3"><GoPersonFill/> </div>
                            <div className="clop">
                            <p className='cardp'><Link className='cardp' to={"/followers"}>followers</Link> </p>
                            <h2 className="cardh2">{(userData.followers).length}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="meddilpro">
    <div className="card">
        <img src={`${domain}/uplouds/${userData.avatar}`} alt="" />
        <div className="contenet">
            <h2 className="sherr">{userData.username}</h2>
            <p>{userData.description}</p>
            <a href={userData.email} rel='#'>{userData.email}🔥</a>
            <div className="react">
<span className="like"><AiTwotoneLike className='lk'/> 36</span>
<span className="love"><FaRegHeart className='lo'/>  545</span>
            </div>
        </div>
    </div>
</div>
<div className="bottompro">
<div className="card">
        <img src={`${domain}/uplouds/${userData.avatar}`} alt="" />
        <div className="contenet">
            <h2 className="sherr">{userData.username} <span>4 days ago</span></h2>
            <p>Rails 5 Bootstrap 4 Boilerplate Admin Dashboard on  <a href={userData.email} rel='#'>{userData.email}😉</a></p>
            <div className="cardin">
                <img src={`${domain}/uplouds/${userData.avatar}`} alt="" />
                <h2>Admin Dashboard Template</h2>
                <span>Made with Rails 5 and Bootstrap 4</span>
                <span className='link'><BsLink45Deg/></span>
                <span>frontted.com</span>
            </div>
            <div className="react">
<span className="like"><AiTwotoneLike className='lk'/> 36</span>
<span className="love"><FaRegHeart className='lo'/>  545</span>
            </div>
        </div>
    </div>
</div>
</div>
            </div>
            <div className="favorite-courses">
          <h2 className="section-title">Your Favorite Courses</h2>
          <div className="course-list">
            {favData.length > 0 ? (
              favData.map(course => (
                <div key={course.id} className="course-card">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-author">By: {course.author}</p>
                  <p className="course-description">{course.description}</p>
                  <p className="course-price">Price: ${course.price}</p>
                  <p className={`course-status ${course.status}`}>{course.status}</p>
                </div>
              ))
            ) : (
              <p className="no-courses">You have no favorite courses yet.</p>
            )}
          </div>
        </div>
            </div>
          
        </>
    )
}
export default Profile;