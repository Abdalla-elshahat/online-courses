import './login.css';
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaKey, FaEye, FaEyeSlash, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons';
import GoogleSignIn from '../../googlesign';
import Cookies from "js-cookie"; 
import { toast, ToastContainer } from 'react-toastify';
function Login() {
    const nav=useNavigate();
    const domain = "http://localhost:4000";
    const token = Cookies.get("token");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    if(token){
        setTimeout(()=>{
            nav("/profile")
        },1000)
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${domain}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                Cookies.set('token', data.token);
                   toast.success("Login successfully!", {icon: <FaCheckCircle color="green" />});
                        setTimeout(()=>{
                            nav("/profile")
                        },2000)
            } else {
                const errorData = await response.json();
                console.error('Error during login:', errorData);
                       toast.error("Login failed! Please try again.", {icon: <FaExclamationCircle color="red" />,});
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("An error occurred. Please try again.", {icon: <FaExclamationCircle color="red" />}); 
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
        <ToastContainer />
            <div className="loginn">
                <img
                    src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png"
                    alt=""
                    className="image"
                    width={"50px"}
                    height={"50px"}
                />
                <form onSubmit={handleLogin}>
                    <div className="card">
                        <div className='conectgoogle'><GoogleSignIn/></div>
                        <span className="or">OR</span>
                        <div className="bllogin">
                            <label htmlFor="Email">EMAIL ADDRESS:</label>
                            <div className="cooo">
                                <span><MdOutlineLocalPostOffice /></span>
                                <input
                                    type="email"
                                    placeholder="Abdalla@gmail.com"
                                    id="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <label htmlFor="pass">PASSWORD:</label>
                            <div className="cooo">
                                <span><FaKey /></span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Your Password"
                                    id="pass"
                                    minLength={6}
                                    maxLength={10}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {showPassword ?  <FaEye />:<FaEyeSlash />}
                                </span>
                            </div>
                            <div className="checkee">
                                <input type="checkbox" id="ck" />
                                <span className="rem">Remember me for 30 days</span>
                            </div>
                            <button className="loginbtn" type="submit">
                                {loading ? <LoadingIcons.Bars /> : "Login"}
                            </button>
                            <div className="ta7t">
                                <span className="forget">Forgot password?</span>
                                <span className="signup">
                                    Don't have an account?{" "}
                                    <span><Link to={"/sinup"}>Sign up</Link></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
