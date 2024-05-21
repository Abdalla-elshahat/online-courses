import  './login.css'
import { MdDone } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaKey } from "react-icons/fa";
function Login(){
    return(
        <>
        <div className="loginn">
        <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="" className='image' width={"50px"} height={"50px"} />
            <div className="card">
                <div className="assepts">
                    <span><MdDone/></span>An email with password reset instructions has been sent to your email address, if it exists on our system.
                    </div>
                    <span className="conectgoogle"><span><FcGoogle/></span>Continu with google</span>
                    <span className="or">OR</span>
                    <div className="bllogin">
                        <label htmlFor="Email">EMAIL ADDRESS:</label>
                        <div className="cooo">
                            <span><MdOutlineLocalPostOffice/></span>
                            <input type="email" placeholder='Abdalla@gmail.com' id='Email'/>
                        </div>
                        <label htmlFor="pass">password:</label>
                        <div className="cooo">
                            <span><FaKey/></span>
                            <input type="password" placeholder='your pass' id='pass' minLength={6} maxLength={10}/>
                        </div>
                     <div className="loginbtn">Login</div>
                     <div className="checkee">
                        <input type="checkbox" id='ck'/>
                        <span className='rem'>Remember me for 30 days</span>
                     </div>
                     <div className="ta7t">
                        <span className="forget">Forgot password?</span>
                        <span className="signup">Don't have an account? <span>Sign up</span></span>
                     </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Login;