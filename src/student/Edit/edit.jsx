import './edit.css';
import { FaCheckCircle, FaExclamationTriangle, FaFacebook, FaTimesCircle } from "react-icons/fa";
import { FaImage, FaTimes } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineDone } from "react-icons/md";
import Select from 'react-select';
import {programmingSkills} from "../../UI/forms/data.ts"
import Cookies from "js-cookie"; 
function Edit() {
  const domain = "http://localhost:4000";
  const token = Cookies.get("token");
  const nav = useNavigate();
  const [name, setName] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null); // Store the file itself
  const [preview, setPreview] = useState(null); // Display the preview image
  const [role, setRole] = useState("");
  const [skills, setskills] = useState([]);
  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    Github: "",
    Linkedin: "",
  });
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
        setName(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    } else {
      setTimeout(() => {
        nav("/sinup");
      }, 0);
    }
  };

  const handleChange = (platform, value) => {
    setSocialMedia((prev) => ({ ...prev, [platform]: value }));
  };
  const Updatedata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", `${firstname} ${lastname}`);
    formData.append("job", job);
    formData.append("socialmedia", JSON.stringify(socialMedia));
    formData.append("skills",JSON.stringify(skills));
    formData.append("country", country);
    formData.append("description", description);
    if (avatar) formData.append("avatar", avatar); // Append the file
    try {
      const response = await fetch(`${domain}/api/users/update_data`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(
          <span>
            <FaCheckCircle style={{ marginRight: "8px", color: "green" }} />
            Profile updated successfully!
          </span>
        );
        setTimeout(() => {
          nav("/profile");
        }, 1000); 
      } else {
        const errorData = await response.json();
        toast.error(
          <span>
            <FaExclamationTriangle style={{ marginRight: "8px", color: "red" }} />
            {errorData.message || "Failed to update profile. Please try again."}
          </span>
        );
      }
    } catch (error) {
      toast.error(
        <span>
          <FaTimesCircle style={{ marginRight: "8px", color: "red" }} />
          An error occurred. Please try again.
        </span>
      );
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setAvatar(null);
    setPreview(null);
  };

  const handleSkillsChange = (selectedOptions) => {
    const updatedSkills = selectedOptions.map(option => ({
      value: option.value||"",
      label: option.label||"",
      image: option.image||"",
    }));
    setskills(updatedSkills);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    if (name) {
      setJob(name.job || "");
      setCountry(name.country || "");
      setDescription(name.description || "");
      setAvatar(name.avatar || null);
      setPreview(`${domain}/uplouds/${name.avatar}`);
      setRole(name.role || "user");
      const parts = String(name.username).split(" ");
      setFirstname(parts[0] || "");
      setLastname(parts[1] || "");

      let socialMediaData = {};
      if (name.socialmedia && typeof name.socialmedia === "string" && name.socialmedia.trim()) {
        try {
          socialMediaData = JSON.parse(name.socialmedia||"");
        } catch (error) {
          console.error("Error parsing social media data:", error);
        }
      }
      setSocialMedia({
        facebook: socialMediaData.facebook || "",
        twitter: socialMediaData.twitter || "",
        instagram: socialMediaData.instagram || "",
        Github: socialMediaData.Github || "",
        Linkedin: socialMediaData.Linkedin || "",
      });
      if (name.skills) {
        try {
          if (true) {
            const parsedSkills = JSON.parse(name.skills).map((skill) => ({
              value: skill.value || "",
              label: skill.label || "",
              image: skill.image || "",
            }));
            setskills(parsedSkills);
          } else {
            setskills([]);
          }
        } catch (error) {
          console.error("Error parsing skills:", error);
          setskills([]);
        }
      } else {
        setskills([]);
      }

    }
  }, [name]);
  return (
    <>
      <div className="edit">
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
        <h2 className='editacount'>Edit Account</h2>
        <form onSubmit={Updatedata}>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Basic information</h2>
    <p>Edit your account details and settings.</p>
</div>
<div className="right">
    <div className="f">
        <div className="blok blokfok">
            <label htmlFor="fname">First name</label>
            <input type="text" id='fname' placeholder='Your first name' value={firstname}  onChange={(e)=>setFirstname(e.target.value)} required/>
        </div>
        <div className="blok blockfok">
            <label htmlFor="sname">last name</label>
            <input type="text" id='sname' placeholder='Your second name' value={lastname}  onChange={(e)=>setLastname(e.target.value)} required/>
        </div>
    </div>
    <div className="s">
    <div className="blok">
            <label htmlFor="jop">Jop Title</label>
           <input type='text'  id="jop" placeholder='jop title...' value={job}  onChange={(e)=>setJob(e.target.value)} required/>
        </div>
    </div>
    <div className="s">
      <div className="blok">
      <label htmlFor="skills">Skills</label>
      <Select
        isMulti
        id="skills"
        name="skills"
        options={programmingSkills}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSkillsChange}
      />
        </div>
        <div>
        <h2>Selected Skills:</h2>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.image} alt={skill.label} style={{ width: "24px", height: "24px", marginRight: "8px" }} />
              {skill.label}
            </div>
          ))
        ) : (
          <p>No skills selected.</p>
        )}
      </div>
    </div>
    <div className="s">
    <div className="blok">
            <label htmlFor="bio">Bio/discription</label>
           <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Bio/discription...' value={description}  onChange={(e)=>setDescription(e.target.value)} minLength={15} required></textarea>
        </div>
    </div>
    <div className="th thcountry">
        <label htmlFor="country">country : </label>
        <select name="country" id="country" value={country ||"EGyPT"}  onChange={(e)=>setCountry(e.target.value)}>
            <option value={"usa"}>USA</option>
            <option value={"KSA"} >KSA</option>
            <option value={"EGYPT"} selected>EGYPT</option>
            <option value={"Gana"}>GANA</option>
            <option value={"Germany"}>Germany</option>
            <option value={"Freanch"}>Freanch</option>
        </select>
        <p className="avalibale">The country is not visible to other users.</p>
        <div className="sub">
            <span><Link to={"/updatepass"}>Updatpass</Link></span>
        </div>
    </div>
</div>
            </div>
            <div className="basicinfo">
  <div className="left">
    <h2 className="pin">Subscription Plans</h2>
    <p>Choose a plan that fits your needs.</p>
  </div>
  <div className="right plans-container">
    <div className="plan">
      <h3 className="plan-title">User</h3>
      <p className="plan-description">For regular users.</p>
      <ul className="plan-features">
        <li><MdOutlineDone color='blue'/> Basic access</li>
        <li><MdOutlineDone color='blue'/> Limited features</li>
        <li><MdOutlineDone color='blue'/> Free forever</li>
      </ul>
      <span className="plan-button" value={"user"} onClick={(e)=>setRole(e.target.value)}>Free</span>
    </div>

    <div className="plan">
      <h3 className="plan-title">Manager</h3>
      <p className="plan-description">For managers.</p>
      <ul className="plan-features">
        <li><MdOutlineDone color='blue'/> Advanced access</li>
        <li><MdOutlineDone color='blue'/> Team collaboration tools</li>
        <li><MdOutlineDone color='blue'/> Priority support</li>
        <li><MdOutlineDone color='blue'/> Add courses</li>
      </ul>
      <span className="plan-button"value={"manger"} onClick={(e)=>setRole(e.target.value)}><Link to={"/billing"}>10$ Per/month</Link></span>
    </div>

    <div className="plan">
      <h3 className="plan-title">Admin</h3>
      <p className="plan-description">For large organizations.</p>
      <ul className="plan-features">
        <li><MdOutlineDone color='blue'/> All features unlocked</li>
        <li><MdOutlineDone color='blue'/> Custom solutions</li>
        <li><MdOutlineDone color='blue'/> Dedicated account manager</li>
      </ul>
      <span className="plan-button" value={"admin"} onClick={(e)=>setRole(e.target.value)}><Link to={"/billing"}>15$ Per/month</Link></span>
    </div>
  </div>
</div>

            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Profile Settings</h2>
    <p>Update your public profile with relevant and meaningful information.</p>
</div>
<div className="right">
    <div className="f3">
        <p className="avatar">Avatar</p>
        <div className="upload-container">
            <div className="upload">
                <label htmlFor="file">
                    <FaImage  className='avatar-img'/>
                </label>
                <input type="file" id="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }}/>
            </div>
            {preview && (
                <div className="preview-container">
                    <img src={preview} alt="Avatar Preview" className="avatar-preview" />
                    <button className="remove-btn" onClick={handleRemoveImage}>
                        <FaTimes />
                    </button>
                </div>
            )}
        </div>
    </div>
    <div className="s">
    </div>
    <div className="th">
        <div className="social">
<span className='face'>
        <FaFacebook/>
         <input type="text" placeholder='Facebook...' className='bb'   value={socialMedia.facebook} onChange={(e) => handleChange("facebook", e.target.value)} /></span>
        </div>
        <div className="social">
<span className='twi'>
        <FaTwitter/>
        <input type="text"  placeholder='Twitter...'  className='bb' value={socialMedia.twitter} onChange={(e) => handleChange("twitter", e.target.value)}/>
        </span>
        </div>
        <div className="social">
<span className='insta'>
        <FaInstagram/>
        <input type="text"  placeholder='Instagram...'  className='bb'value={socialMedia.instagram} onChange={(e) => handleChange("instagram", e.target.value)}/>
        </span>
        </div>
        <div className="social">
<span className='Github'>
        <FaGithub/>
        <input type="text"  placeholder='Github...'  className='bb'value={socialMedia.Github} onChange={(e) => handleChange("Github", e.target.value)}/>
        </span>
        </div>
        <div className="social">
<span className='Linkedin'>
        <FaLinkedin/>
        <input type="text"  placeholder='Linkedin...'  className='bb'value={socialMedia.Linkedin} onChange={(e) => handleChange("Linkedin", e.target.value)} required/>
        </span>
        </div>

        <h2 className='pinn'>AVAILABLE FOR FREELANCE?</h2>
        <div className="on">
        <input type="checkbox" name="check2" id="check22"  />
        <label htmlFor="check22">Yes, show me as available for freelance!</label>
        </div>
    </div>
</div>
            </div>
            <input type="submit" value={"Save"} className='Save'/>
            </form>
      </div>
    </>
  );
}

export default Edit;