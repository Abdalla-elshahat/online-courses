import "./sidebar.css";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

// icons (grouped)
import { BsThreeDotsVertical, BsPersonCircle } from "react-icons/bs";
import { MdOutlineVideoSettings, MdAssignment } from "react-icons/md";
import { LuAirplay, LuFileCode2 } from "react-icons/lu";
import { FaMapLocationDot, FaRegFolderOpen, FaSackDollar } from "react-icons/fa6";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { FaExpeditedssl } from "react-icons/fa";
import { FaEdit, FaCalculator, FaPaypal } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { RiGlassesFill } from "react-icons/ri";
import { RxBoxModel } from "react-icons/rx";
import { FaMouse, FaWpforms, FaChartPie, FaIcons } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill, BsCalendar2Range, BsCalendar2DateFill } from "react-icons/bs";
import { FaTable } from "react-icons/fa";
import { CgTapSingle } from "react-icons/cg";
import { getUserData, logoutUser } from "../api/userApi";
import { imageUrl, onImageError } from "../utels/image";

function Sidebar() {
    const token = Cookies.get("token");
    const [user, setUser] = useState({});
    const location = useLocation();

    // close the mobile drawer whenever the route changes
    useEffect(() => {
        document.body.classList.remove("sidebar-open");
    }, [location.pathname]);

    const fetchSidebarUserData = async () => {
        if (!token) return;

        try {
            const data = await getUserData();
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchSidebarUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        }
        Cookies.remove("token");
        window.location.href = "/login";
    };

    const role = user?.role?.toLowerCase();
    const isAdmin = role === "admin" || role === "manger";

    return (
        <aside className="sidebar">
            {token && (
                <div className="acount">
                    <img onError={onImageError} src={imageUrl(user?.avatar)} alt="" />
                    <div className="atext">
                        <h3>{user?.username}</h3>
                        <p>{user?.role}</p>
                    </div>
                    <BsThreeDotsVertical className="colon" />
                </div>
            )}

            <div className="sb-body">
                <span className="sb-section">STUDENT</span>

                <Item icon={<MdAssignment />} label="Dashboard" to="/" />

                {token ? (
                    <>
                        <Item icon={<MdOutlineVideoSettings />} label="Services" to="/serice" />
                        <Item icon={<BsPersonCircle />} label="Profile" to="/profile" />
                        <Item icon={<FaExpeditedssl />} label="Edit Account" to="/edit" />
                        <Item icon={<IoMdPersonAdd />} label="Add Friends" to="/Addfriends" />
                        <Item icon={<LuAirplay />} label="Course" to="/cours" />
                        <Item icon={<LuFileCode2 />} label="Course Lessons" to="/clesson" />
                        <Item icon={<FaRegFolderOpen />} label="Take Course" to="/takecors" />
                        <Item icon={<FaSackDollar />} label="Billing" to="/billing" />

                        <button className="box" onClick={logout}>
                            <span className="icon"><CiLogout /></span>
                            <span className="label">Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Item icon={<CiLogin />} label="Login" to="/login" />
                        <Item icon={<IoMdPersonAdd />} label="Sign up" to="/sinup" />
                    </>
                )}

                {isAdmin && (
                    <>
                        <span className="sb-section">Instructor</span>

                        <Item icon={<RiGlassesFill />} label="Dashboard" to="/dashbord" />
                        <Item icon={<IoLibrary />} label="My Courses" to="/mycorses" />
                        <Item icon={<PiExamFill />} label="My Quizzes" to="/myquiz" />
                        {/* <Item icon={<FaEdit />} label="Edit Courses" to="/mycorses" />
                        <Item icon={<FaEdit />} label="Edit Lesson" to="/editlesson" />
                        <Item icon={<MdAssignment />} label="Create Quiz" to="/mycorses" /> */}
                        <Item icon={<FaCalculator />} label="Earnings" to="/erning" />
                        <Item icon={<FaUserGraduate />} label="Profile" to="/profileins" />
                        <Item icon={<FaPaypal />} label="Payout" to="/pay" />
                    </>
                )}

                <span className="sb-section">UI Components</span>

                <Item icon={<FaMouse />} label="Button" to="/button" />
                <Item icon={<RxBoxModel />} label="Model" to="/model" />
                <Item icon={<BsFillFileEarmarkPersonFill />} label="Avatar" to="/avatar" badge="NEW" />
                <Item icon={<FaChartPie />} label="Charts" to="/chart" badge="Pro" />
                <Item icon={<FaWpforms />} label="Form" to="/formui" />
                <Item icon={<BsCalendar2Range />} label="Range slider" to="/range" />
                <Item icon={<BsCalendar2DateFill />} label="Time & Date" to="/time" />
                <Item icon={<FaTable />} label="Table" to="/table" />
                <Item icon={<CgTapSingle />} label="Tabs" to="/taps" />
                <Item icon={<FaIcons />} label="Icons" to="/icons" />
                <Item icon={<FaMapLocationDot />} label="Vector" to="/vector" />
            </div>

            <div className="footr">
                <div className="sb-progress-top">
                    <span>PROGRESS</span>
                    <strong>60%</strong>
                </div>
                <div className="sb-progress"><span style={{ width: "60%" }}></span></div>
            </div>
        </aside>
    );
}

export default Sidebar;

/* reusable component */
function Item({ icon, label, to = "#", badge }) {
    return (
        <NavLink to={to} end={to === "/"} className="box">
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
            {badge && <span className={badge === "NEW" ? "new" : "pro"}>{badge}</span>}
        </NavLink>
    );
}
