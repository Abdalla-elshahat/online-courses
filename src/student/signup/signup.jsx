import './signup.css'
import Cookies from "js-cookie"; 
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'
import GoogleSignUp from '../../googlesignup';
import { toast } from 'react-toastify';

function Sinup(){
const domain = "http://localhost:4000";
const token = Cookies.get("token");
    const nav=useNavigate();
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [loading,setloading]=useState(false)
    const [showPassword, setShowPassword] = useState(false);
        if(token){
            setTimeout(()=>{
                nav("/profile")
            },0)
        }
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          setloading(true);
          const response = await fetch(`${domain}/api/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // تحديد نوع المحتوى
            },
            body: JSON.stringify({
              username: name,
              email: email,
              password: password,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
             toast.success("Signup successful", {icon: <FaCheckCircle color="green" />,});
            Cookies.set('token', data.user.token);
            setloading(false);
            setTimeout(()=>{
              nav("/edit")
            },1000)
          } else {
            const errorData = await response.json();
             toast.error(`Error during signup:${errorData}`, {
                      icon: <FaExclamationCircle color="red" />,
                  });
          }
        } catch (error) {
          console.error("Error during signup:", error);
        }
      };
    return(
        <>
        <div className="loginn">
        <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="" className='image' width={"50px"} height={"50px"} />
        <form onSubmit={handleSignup}>
        <div className="card">
                    <div className='conectgoogle'><GoogleSignUp/></div>
                    <span className="or">OR</span>
                    <div className="bllogin">
                    <label htmlFor="Email">Name:</label>
                        <div className="cooo">
                            <span><IoMdPerson/></span>
                            <input type="text" placeholder='Your Name...' id='name' value={name} onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <label htmlFor="Email">EMAIL ADDRESS:</label>
                        <div className="cooo">
                            <span><MdOutlineLocalPostOffice/></span>
                            <input type="email" placeholder='Abdalla@gmail.com' id='email' value={email}  onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <label htmlFor="pass">password:</label>
                        <div className="cooo">
                            <span><FaKey/></span>
                            <input type={showPassword?'text':'password'}  placeholder='your pass' id='pass' minLength={6} maxLength={10}  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                            <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {showPassword ? <FaEye />:<FaEyeSlash />}
                                </span>
                        </div>
                     <div className="checkee">
                        <input type="checkbox" id='ck'/>
                        <span className='rem'>I accept <span>Terms and Conditions</span></span>
                     </div>
                     <button className="loginbtn createbtn" type="submit">{loading?<LoadingIcons.Bars />:"Create Account"}</button>
                     <div className="ta7t">
                        <span className="signup">Have an account ? <span><Link to={"/login"}>Login</Link></span></span>
                     </div>
                    </div>
            </div>
        </form>
        </div>
        </>
    )
}
export default Sinup;