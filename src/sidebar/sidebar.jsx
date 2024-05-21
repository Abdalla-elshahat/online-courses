import './sidebar.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PiExamFill } from "react-icons/pi";
import { LuAirplay } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";
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
function Sidebar(){
    return(
        <>
        <div className="sidebar">
           <div className="acount">
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
            <div className="atext">
                <h3>Adrian</h3>
                <p>INSTRUCTOR</p>
            </div>
            <BsThreeDotsVertical className='colon'/>
            </div>
            <div className="body">
            <span className="student">STUDENT</span>
<div className="box">
<MdAssignment className='icon'/>
<span><Link to="/">Dashbord</Link></span>
</div>
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
<PiExamFill className='icon'/>
<span><Link to={"takequiz"}>Take Quiz</Link></span>
</div>
<div className="box">
<FaSackDollar className='icon'/>
<span><Link to={"billing"}>Billing</Link></span>
</div>
<div className="box">
<CiLogin className='icon'/>
<span><Link to={"login"}>Login</Link></span>
</div>
<div className="box">
<IoMdPersonAdd className='icon'/>
<span><Link to={"sinup"}>Sinup</Link></span>
</div>
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
<FaEdit className='icon'/>
<span><Link to={"editcorses"}>Edite Courses</Link></span>
</div>
<div className="box">
<LuClipboardEdit className='icon'/>
<span><Link to={"editlesson"}>Edite Lesson</Link></span>
</div>
<div className="box">
<MdAssignment className='icon'/>
<span><Link to={"createquiz"}>Create Quize</Link></span>
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