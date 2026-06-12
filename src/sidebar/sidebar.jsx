import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { domain } from "../utels/constents/const";

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
import { logoutUser, getUserData } from "../api/userApi";

function Sidebar() {
    const token = Cookies.get("token");
    const [user, setUser] = useState({});

    const getUserData = async () => {
        if (!token) return;

        try {
            const data = await getUserData(token);
            setUser(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getUserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = async () => {
        await logoutUser()
    };

    const role = user?.role?.toLowerCase();
    const isAdmin = role === "admin" || role === "manger";

    return (
        <div className="sidebar">
            {token && (
                <div className="acount">
                    <img src={`${domain}/uplouds/${user?.avatar}`} alt="" />
                    <div className="atext">
                        <h3>{user?.username}</h3>
                        <p>{user?.role}</p>
                    </div>
                    <BsThreeDotsVertical className="colon" />
                </div>
            )}

            <div className="body">
                <span className="student">STUDENT</span>

                <Item icon={<MdAssignment />} label="Dashbord" to="/" />

                {token ? (
                    <>
                        <Item icon={<MdOutlineVideoSettings />} label="Serice" to="/serice" />
                        <Item icon={<BsPersonCircle />} label="Profile" to="/profile" />
                        <Item icon={<FaExpeditedssl />} label="Edite Account" to="/edit" />
                        <Item icon={<IoMdPersonAdd />} label="Addfriends" to="/Addfriends" />
                        <Item icon={<LuAirplay />} label="Course" to="/cours" />
                        <Item icon={<LuFileCode2 />} label="courses lesson" to="/clesson" />
                        <Item icon={<FaRegFolderOpen />} label="Takecours" to="/takecors" />
                        <Item icon={<FaSackDollar />} label="Billing" to="/billing" />

                        <div className="box" onClick={logout}>
                            <CiLogout className="icon" />
                            <span>Logout</span>
                        </div>
                    </>
                ) : (
                    <>
                        <Item icon={<CiLogin />} label="Login" to="/login" />
                        <Item icon={<IoMdPersonAdd />} label="Sinup" to="/sinup" />
                    </>
                )}

                {isAdmin && (
                    <>
                        <span className="instructour">Instructor</span>

                        <Item icon={<RiGlassesFill />} label="Dashboard" to="/dashbord" />
                        <Item icon={<IoLibrary />} label="Mycorses" to="/mycorses" />
                        <Item icon={<PiExamFill />} label="my Quiz" to="/myquiz" />
                        <Item icon={<FaEdit />} label="Edite Courses" to="#" />
                        <Item label="Edite Lesson" to="/editlesson" />
                        <Item icon={<MdAssignment />} label="Create Quize" />
                        <Item icon={<FaCalculator />} label="Earnings" to="/erning" />
                        <Item icon={<FaUserGraduate />} label="Profile" to="/profileins" />
                        <Item icon={<FaPaypal />} label="Payout" to="/pay" />
                    </>
                )}

                <span className="ui">UI componenet</span>

                <Item icon={<FaMouse />} label="Button" to="/button" />
                <Item icon={<RxBoxModel />} label="Model" to="/model" />
                <Item icon={<BsFillFileEarmarkPersonFill />} label="Avatar" to="/avatar" badge="NEW" />
                <Item icon={<FaChartPie />} label="Charts" to="/chart" badge="Pro" />
                <Item icon={<FaWpforms />} label="Form" to="/formui" />
                <Item icon={<BsCalendar2Range />} label="Range slider" to="/range" />
                <Item icon={<BsCalendar2DateFill />} label="Time & Date" to="/time" />
                <Item icon={<FaTable />} label="Table" to="/table" />
                <Item icon={<CgTapSingle />} label="Taps" to="/taps" />
                <Item icon={<FaIcons />} label="Icons" to="/icons" />
                <Item icon={<FaMapLocationDot />} label="Vector" to="/vector" />
            </div>

            <div className="footr">
                <div className="top">
                    <p className="progress">PROGRESS</p>
                    <span className="pre">60%</span>
                </div>
                <span className="bigcolor">
                    <span></span>
                </span>
            </div>
        </div>
    );
}

export default Sidebar;

/* reusable component */
function Item({ icon, label, to = "#", badge }) {
    return (
        <div className="box">
            <span className="icon">{icon}</span>
            <span>
                <Link to={to}>{label}</Link>
            </span>
            {badge && <span className={badge === "NEW" ? "new" : "pro"}>{badge}</span>}
        </div>
    );
}