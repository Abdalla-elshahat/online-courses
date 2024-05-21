import './signup.css'
import { MdDone } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
function Sinup(){
    return(
        <>
                <div className="loginn">
        <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="" className='image' width={"50px"} height={"50px"} />
            <div className="card">
                    <span className="conectgoogle"><span><FcGoogle/></span>Continu with google</span>
                    <span className="or">OR</span>
                    <div className="bllogin">
                    <label htmlFor="Email">Name:</label>
                        <div className="cooo">
                            <span><IoMdPerson/></span>
                            <input type="text" placeholder='Your Name...' id='Email'/>
                        </div>
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
                     <div className="checkee">
                        <input type="checkbox" id='ck'/>
                        <span className='rem'>I accept <span>Terms and Conditions</span></span>
                     </div>
                     <div className="loginbtn createbtn">Create Account</div>
                     <div className="ta7t">
                        <span className="signup">Have an account ? <span> Login</span></span>
                     </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Sinup;