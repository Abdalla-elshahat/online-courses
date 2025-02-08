import './sidebar.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate} from 'react-router-dom';
import { PiExamFill } from "react-icons/pi";
import { LuAirplay } from "react-icons/lu";
import { FaCheckCircle, FaExclamationTriangle, FaRegFolderOpen } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { LuFileCode2 } from "react-icons/lu";
import { FaPaypal } from "react-icons/fa";
import { FaExpeditedssl } from "react-icons/fa";
import { FaIcons } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { FaMouse } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { FaCalculator } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { RiGlassesFill } from "react-icons/ri";
import { RxBoxModel } from "react-icons/rx";
import { BsCalendar2Range } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaTable } from "react-icons/fa";
import { CgTapSingle } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Cookies from "js-cookie"; 
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import { domain } from '../utels/constents/const';
function Sidebar(){
      const token = Cookies.get("token");
        const nav = useNavigate();
        const[data,setdata]=useState([]);
        const handlegetdata=async()=>{
            try {
                const response = await fetch(`${domain}/api/users/alldata`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setdata(data)
                } else {
                    const errorData = await response.json();
                    console.error('Error during login:', errorData);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again.');
            }
        }
    async function Logout() {
      const token = Cookies.get("token");
      if (!token) {
        console.warn("No token found in cookies.");
        nav("/login"); // Redirect if the token is already absent
        return;
      }
      try {
          console.log("Logout successful");
          Cookies.remove("token");
          nav("/login");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    }
    // const DeleteAcc = () => {
    //     if (token) {
    //       Swal.fire({
    //         title: "Are you sure?",
    //         text: "Do you really want to delete your account?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonText: "Yes, delete it!",
    //         cancelButtonText: "Cancel",
    //       }).then(async (result) => {
    //         if (result.isConfirmed) {
    //           try {
    //             const res = await fetch(`${domain}/api/users/delete_data`, {
    //               method: "DELETE",
    //               headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`,
    //               },
    //             });
    //             if (res.ok) {
    //               toast.success("Account deleted successfully!");
    //               Cookies.remove("token");
    //               nav("/signup");
    //             } else {
    //               toast.error("Failed to delete account.");
    //             }
    //           } catch (error) {
    //             console.error("Error deleting account:", error);
    //             toast.error("An error occurred. Please try again.");
    //           }
    //         }
    //       });
    //     }
    //   };
    useEffect(()=>{
            handlegetdata();
  },[data])
    return(
        <>
        <div className="sidebar">
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
        {token&&(
             <div className="acount">
             <img src={`${domain}/uplouds/${data.avatar}`} alt="" />
             <div className="atext">
                 <h3>{data.username}</h3>
                 <p>{data.role}</p>
             </div>
             <BsThreeDotsVertical className='colon'/>
             </div>
        )}
            <div className="body">
            <span className="student">STUDENT</span>
<div className="box">
<MdAssignment className='icon'/>
<span><Link to="/">Dashbord</Link></span>
</div>
{token?(
    <>
    <div className="box">
<MdOutlineVideoSettings className='icon'/>
<span><Link to={"/serice"}> Serice</Link></span>
</div>
<div className="box">
<BsPersonCircle className='icon'/>
<span><Link to={"/profile"}>Profile</Link></span>
</div>
<div className="box">
<FaExpeditedssl className='icon'/>
<span><Link to={"/edit"}>Edite Account</Link></span>
</div>
<div className="box">
<IoMdPersonAdd className='icon'/>
<span><Link to={"/Addfriends"}>Addfriends</Link></span>
</div>
<div className="box">
<LuAirplay className='icon'/>
<span><Link to={"cours"}>Course</Link></span>
</div>
<div className="box">
<LuFileCode2 className='icon'/>
<span><Link to={'clesson'}>courses lesson</Link></span>
</div>
<div className="box">
<FaRegFolderOpen className='icon'/>
<span><Link to={"takecors"}>Takecours</Link></span>
</div>
<div className="box">
<FaSackDollar className='icon'/>
<span><Link to={"billing"}>Billing</Link></span>
</div>
<div className="box">
<CiLogout className='icon'/>
<span onClick={Logout}>Logout</span>
</div>
</>
):(
    <>
  <div className="box">
<CiLogin className='icon'/>
<span><Link to={"login"}>Login</Link></span>
</div>
<div className="box">
<IoMdPersonAdd className='icon'/>
<span><Link to={"sinup"}>Sinup</Link></span>
</div>  
    </>
)}
{/* <div className="box deleteacc" >
<RiDeleteBin2Fill  className='icon'/>
<span >Delete ACC</span>
</div> */}
   {data.role === ("manger"||"Admin")&&(
        <>
        <span className="instructour">Instructor</span>
        <div className="box">
<RiGlassesFill className='icon'/>
<span><Link to={"dashbord"}>Dashboard</Link></span>
</div>
<div className="box">
<IoLibrary className='icon'/>
<span><Link to={"mycorses"}>Mycorses</Link></span>
</div>
<div className="box">
<PiExamFill className='icon'/>
<span><Link to={"myquiz"}>my Quiz</Link></span>
</div>
<div className="box">
<FaEdit className='icon'/>
<span><Link>Edite Courses</Link></span>
</div>
<div className="box">
<LuClipboardEdit className='icon'/>
<span><Link to={"editlesson"}>Edite Lesson</Link></span>
</div>
<div className="box">
<MdAssignment className='icon'/>
<span>Create Quize</span>
</div>
<div className="box">
<FaCalculator className='icon'/>
<span><Link to={"erning"}>Earnings</Link></span>
</div>
<div className="box">
<FaUserGraduate className='icon'/>
<span><Link to={"profileins"}>Profile</Link></span>
</div>
<div className="box">
<FaPaypal className='icon'/>
<span><Link to={"pay"}>Payout</Link></span>
</div>
        </>
  ) }
<span className="ui">UI componenet</span>
<div className="box">
<FaMouse className='icon'/>
<span><Link to={"button"}>Button</Link></span>
</div>
<div className="box">
<RxBoxModel className='icon'/>
<span><Link to={"model"}>Model</Link></span>
</div>
<div className="box">
<BsFillFileEarmarkPersonFill className='icon'/>
<span><Link to={"avatar"}>Avatar</Link></span>
<span className='new'>NEW</span>
</div>
<div className="box">
<FaChartPie className='icon'/>
<span><Link to={"chart"}>Charts</Link></span>
<span className='pro'>Pro</span>
</div>
<div className="box">
<FaWpforms className='icon'/>
<span><Link to={"formui"}>Form</Link></span>
</div>
<div className="box">
<BsCalendar2Range className='icon'/>
<span><Link to={"range"}>Range slider</Link></span>
</div>
<div className="box">
<BsCalendar2DateFill className='icon'/>
<span><Link to={"time"}>Time & Date</Link></span>
</div>
<div className="box">
<FaTable className='icon'/>
<span><Link to={"table"}>Table</Link></span>
</div>
<div className="box">
<CgTapSingle className='icon'/>
<span><Link to={"taps"}>Taps</Link></span>
</div>
<div className="box">
<FaIcons className='icon'/>
<span><Link to={"icons"}>Icons</Link></span>
</div>
<div className="box">
<FaLocationDot className='icon'/>
<span><Link to={"vector"}>Vector</Link></span>
</div>
</div>
<div className="footr">
<div className="top">
<p className="progress">PROGRESS</p>
<span className='pre'>60%</span>
</div>
    <span className='bigcolor'>
    <span ></span>
    </span>
            </div>
            </div> 
        </>
    )
}
export default Sidebar;