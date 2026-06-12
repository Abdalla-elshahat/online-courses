import './Navbar.css';
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { BsAlarm } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import Notifactions from './notifcations/notfications';
import Cookies from "js-cookie";
import { domain } from '../utels/constents/const';
import { logoutUser, getUserData } from '../api/userApi';
function Navbar() {
    const token = Cookies.get("token");
    const [user, setUser] = useState({});
    const [showLayout, setShowLayout] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [sidebarDark, setSidebarDark] = useState(false);
    const [navbarDark, setNavbarDark] = useState(false);
    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            await logoutUser();

            Cookies.remove("token");
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
        }
    };
    const handlegetdata = async () => {
        try {
            const userData = await getUserData();
            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".profile-wrapper")) {
                setShowProfile(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        handlegetdata();
    }, [])
    function change(ele) {
        if (ele.style.display === "none") {
            ele.style.display = "block"
        }
        else {
            ele.style.display = "none";
        }
    }
    function dir(e) {
        if (e.target.checked) {
            document.body.style.direction = "rtl";
        }
        else {
            document.body.style.direction = "ltr";
        }
    }
    function colo() {
        let side = document.querySelector(".sidebar");

        if (sidebarDark) {
            side.classList.add("darks");
        } else {
            side.classList.remove("darks");
        }
    }
    function colos() {
        let side = document.querySelector(".nav .contener");
        if (navbarDark) {
            side.classList.add("darkn");
        }
        else {
            side.classList.remove("darkn");
        }
    }
    return (
        <>
            <div className="nav">
                <div className="contener">
                    <div className="left">
                        <div className="logo">
                            <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="" className='image' width={"50px"} height={"50px"} />
                            <span className="textlogo">LEMA</span>
                        </div>
                        <div className="swith" onClick={() => { document.querySelector(".opt").classList.toggle("t") }}>
                            <TfiLayoutMediaOverlay className='swithlogo' />
                            <span className="swithtext">Switch Layout</span>
                        </div>
                        <div className="opt">
                            <p><Link to={"/Admin"}>Admin</Link></p>
                            <p>fullwidth</p>
                            <p>fixed</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="gethelp">
                            <span className='gettext'>Get Help</span>
                        </div>
                        <div className='search'>
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                            <IoMdSearch />
                        </div>
                        {token ? (<>
                            <div className="iconss">
                                <BsAlarm
                                    className="alarm"
                                    onClick={() => setShowNotifications(!showNotifications)}
                                />

                                {showNotifications && (
                                    <div className="alarmsetting">
                                        <Notifactions />
                                    </div>
                                )}
                                {/* <SlCalender className='calender' /> */}
                            </div>
                            <div className="profile-wrapper">
                                <div
                                    className="profile"
                                    onClick={() => setShowProfile(!showProfile)}
                                >
                                    <img
                                        src={`${domain}/uplouds/${user?.avatar}`}
                                        alt={user?.username}
                                        width="40"
                                        height="40"
                                    />

                                    <span className="proname">
                                        {user?.username}
                                    </span>

                                    <MdArrowDropDown />
                                </div>

                                {showProfile && (
                                    <div className="profileedit">
                                        <div className="to">
                                            <span>
                                                <img
                                                    src="https://lema.frontted.com/assets/images/frontted-logo-blue.svg"
                                                    alt=""
                                                />
                                            </span>

                                            <span className="inf">
                                                <h3>{user?.username}</h3>
                                                <p>
                                                    {user?.role === "user"
                                                        ? "Student"
                                                        : "Manager"}
                                                </p>
                                            </span>
                                        </div>

                                        <div className="bot">
                                            <span>
                                                <Link to="/edit">
                                                    <CgProfile />
                                                    Edit Account
                                                </Link>
                                            </span>

                                            <span>
                                                <IoSettingsOutline />
                                                Setting
                                            </span>

                                            <span onClick={handleLogout}>
                                                <CiLogin />
                                                Logout
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>) : (
                            <div className="buttons buttonsnav">
                                <Link to={"/login"} className='logins'>Login</Link>
                                <Link to={"/sinup"} className='signup'>Signup</Link>
                            </div>
                        )

                        }
                        <div className="profileedit">
                            <div className="to">
                                <span><img src="https://lema.frontted.com/assets/images/frontted-logo-blue.svg" alt="" /></span>
                                <span className='inf'>
                                    <h3>{user.username}</h3>
                                    <p>{user.role === "user" ? "Student" : "Manger"}</p>
                                </span>
                            </div>
                            <div className="bot">
                                <span><Link to={"/edit"}><CgProfile /> EditeAcount</Link></span>
                                <span><IoSettingsOutline /> Setting</span>
                                <span onClick={handleLogout}><CiLogin /> Logout</span>
                            </div>
                        </div>
                    </div>
                    <span className='sidbarsmall' onClick={(() => { document.querySelector(".sidebar").classList.toggle("thar") })}><IoMenuOutline /></span>
                </div>
            </div>
            <div className="settingi">
                <div className="bordsetting">
                    <div className="layout">
                        <div className="to">Layout</div>
                        <div className="bott">
                            <span>TEXT DIRECTION</span>
                            <span><label className="switch"><input type="checkbox" className="vv" onChange={(e) => { dir(e) }} /><span className="slider round"></span></label></span>
                        </div>
                    </div>
                    <div className="maindrower">
                        <p className="to" onClick={(e) => { let ele = document.querySelector(".bottdrow"); change(ele); }}>Main Drower</p>
                        <div className="bott bottdrow">
                            <span className='title'>SIDEBAR SKIN</span>
                            <div className="blok">
                                <span className='blo'>
                                    <input type="radio" name='mode' id='light' value={"light"} onChange={(e) => { setSidebarDark(true); colo() }} />
                                    <label htmlFor="light">Light</label>
                                </span>
                                <span className='blo'>
                                    <input type="radio" name='mode' id='dark' value={"dark"} onChange={(e) => { setSidebarDark(false); colo() }} />
                                    <label htmlFor="dark">Dark</label>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="maindnav">
                        <p className="to" onClick={() => { let ele = document.querySelector(".bottnav"); change(ele); }}>Main Navbar</p>
                        <div className="bott bottnav">
                            <span className='title'>Main Navbar</span>
                            <div className="blok">
                                <span className='blo' >
                                    <input type="radio" name='alignd' id='lightt' value={"light"} onChange={(e) => { setNavbarDark(false); colos() }} />
                                    <label htmlFor="lightt">Light</label>
                                </span>
                                <span className='blo' >
                                    <input type="radio" name='alignd' id='darkt' value={"Dark"} onChange={(e) => { setNavbarDark(true); colos() }} />
                                    <label htmlFor="darkt">Dark</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="settingicon" onClick={(e) => {
                    document.querySelector(".bordsetting").classList.toggle("act");
                }}><IoSettingsOutline /></span>
            </div>

        </>
    )
}
export default Navbar;