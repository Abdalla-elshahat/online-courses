import './Navbar.css';
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { BsAlarm } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoSettingsOutline, IoMenuOutline, IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { useEffect, useState } from 'react';
import Notifactions from './notifcations/notfications';
import Cookies from "js-cookie";
import { domain } from '../utels/constents/const';
import { logoutUser, getUserData } from '../api/userApi';
import { imageUrl, onImageError } from "../utels/image";

function Navbar() {
    const token = Cookies.get("token");
    const [user, setUser] = useState({});
    const [showLayout, setShowLayout] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [sidebarDark, setSidebarDark] = useState(false);
    const [navbarDark, setNavbarDark] = useState(false);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        }
        Cookies.remove("token");
        window.location.href = "/login";
    };

    useEffect(() => {
        if (!token) return;
        getUserData().then(setUser).catch(console.error);
    }, [token]);

    // close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".profile-wrapper")) setShowProfile(false);
            if (!e.target.closest(".notif-wrapper")) setShowNotifications(false);
            if (!e.target.closest(".layout-wrapper")) setShowLayout(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => { document.body.dir = rtl ? "rtl" : "ltr"; }, [rtl]);
    useEffect(() => { document.body.classList.toggle("sidebar-dark", sidebarDark); }, [sidebarDark]);
    useEffect(() => { document.body.classList.toggle("navbar-dark", navbarDark); }, [navbarDark]);

    const toggleSidebar = () => document.body.classList.toggle("sidebar-open");

    return (
        <>
            <header className="nav">
                <div className="contener">
                    <div className="left">
                        <button className='sidbarsmall' onClick={toggleSidebar} aria-label="Toggle menu">
                            <IoMenuOutline />
                        </button>
                        <Link to="/" className="logo">
                            <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="LEMA" className='image' />
                            <span className="textlogo">LEMA</span>
                        </Link>
                        <div className="layout-wrapper">
                            <button className="swith" onClick={() => setShowLayout(!showLayout)}>
                                <TfiLayoutMediaOverlay />
                                <span>Switch Layout</span>
                            </button>
                            {showLayout && (
                                <div className="dropdown-card opt">
                                    <Link to="/Admin" onClick={() => setShowLayout(false)}>Admin</Link>
                                    <span>Fullwidth</span>
                                    <span>Fixed</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="right">
                        <div className='search'>
                            <IoMdSearch />
                            <input type="search" placeholder="Search courses..." aria-label="Search" />
                        </div>
                        {token ? (
                            <>
                                <div className="notif-wrapper">
                                    <button className="icon-btn" onClick={() => setShowNotifications(!showNotifications)} aria-label="Notifications">
                                        <BsAlarm />
                                    </button>
                                    {showNotifications && (
                                        <div className="dropdown-card alarmsetting">
                                            <Notifactions />
                                        </div>
                                    )}
                                </div>
                                <div className="profile-wrapper">
                                    <button className="profile" onClick={() => setShowProfile(!showProfile)}>
                                        <img onError={onImageError} src={imageUrl(user?.avatar)} alt="" />
                                        <span className="proname">{user?.username}</span>
                                        <MdArrowDropDown />
                                    </button>
                                    {showProfile && (
                                        <div className="dropdown-card profileedit">
                                            <div className="pe-head">
                                                <img onError={onImageError} src={imageUrl(user?.avatar)} alt="" />
                                                <div>
                                                    <h3>{user?.username}</h3>
                                                    <p>{user?.role === "user" ? "Student" : "Manager"}</p>
                                                </div>
                                            </div>
                                            <Link to="/edit" onClick={() => setShowProfile(false)}><CgProfile /> Edit Account</Link>
                                            <button onClick={() => { setShowSettings(true); setShowProfile(false); }}><IoSettingsOutline /> Settings</button>
                                            <button className="danger" onClick={handleLogout}><CiLogin /> Logout</button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="buttonsnav">
                                <Link to="/login" className='logins'>Login</Link>
                                <Link to="/sinup" className='signup'>Sign up</Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="sidebar-backdrop" onClick={toggleSidebar} />

            <div className="settingi">
                {showSettings && (
                    <div className="bordsetting">
                        <div className="bs-head">
                            <strong>Customize</strong>
                            <button className="icon-btn" onClick={() => setShowSettings(false)} aria-label="Close"><IoClose /></button>
                        </div>
                        <div className="bs-row">
                            <span>RTL direction</span>
                            <label className="switch">
                                <input type="checkbox" checked={rtl} onChange={(e) => setRtl(e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="bs-row">
                            <span>Dark sidebar</span>
                            <label className="switch">
                                <input type="checkbox" checked={sidebarDark} onChange={(e) => setSidebarDark(e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="bs-row">
                            <span>Dark navbar</span>
                            <label className="switch">
                                <input type="checkbox" checked={navbarDark} onChange={(e) => setNavbarDark(e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                )}
                <button className="settingicon" onClick={() => setShowSettings(!showSettings)} aria-label="Settings">
                    <IoSettingsOutline />
                </button>
            </div>
        </>
    );
}
export default Navbar;
