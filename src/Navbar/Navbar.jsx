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
function Navbar(){
      const domain = "http://localhost:4000";
      const token = Cookies.get("token");
    const[dark,setdark]=useState(false);
    const[darkn,setdarkn]=useState(false);
    const[data,setdata]=useState([]);
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${domain}/api/users/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                alert('Logout successful!');
            } else {
                const errorData = await response.json();
                console.error('Error during login:', errorData);
                alert('Login failed! Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        } finally {
        }
    };
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
                alert('Login failed! Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        } finally {
        }
    }
    useEffect(()=>{
        handlegetdata();
    },[data])
    function change(ele){
        if(ele.style.display==="none"){
            ele.style.display="block" 
           }
           else{
            ele.style.display="none";
           }
    }
    function dir(e){
        if(e.target.checked){
            document.body.style.direction="rtl";
        }
        else{
            document.body.style.direction="ltr";
        }
    }
    function colo(){
        let side=document.querySelector(".sidebar");
if(dark){
side.classList.add("darks");
}
else{
side.classList.remove("darks");
}
    }
    function colos(){
        let side=document.querySelector(".nav .contener");
if(darkn){
side.classList.add("darkn");
}
else{
side.classList.remove("darkn");
}
    }
    return(
        <>
        <div className="nav">
            <div className="contener">
                <div className="left">
                <div className="logo">
                    <img src="https://png.pngtree.com/png-clipart/20230201/original/pngtree-blue-white-logo-design-png-image_8940380.png" alt="" className='image' width={"50px"} height={"50px"} />
                    <span className="textlogo">LEMA</span>
                </div>
                <div className="swith" onClick={()=>{document.querySelector(".opt").classList.toggle("t")}}>
<TfiLayoutMediaOverlay className='swithlogo'/>
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
        <input class="form-control "  type="search" placeholder="Search" aria-label="Search"/>
        <IoMdSearch/>
      </div>
      {token?(<>
        <div className="iconss">
      <BsAlarm className='alarm' onClick={()=>{document.querySelector(".alarmsetting").classList.toggle("tt")}}/>
      <div className="alarmsetting">
        <Notifactions/>
</div>
<SlCalender className='calender'/>
      </div>
      <div className="profile"  onClick={()=>{document.querySelector(".profileedit").classList.toggle("lock")}}>
        <img src={`${domain}/uplouds/${data.avatar}`} alt=""  width={"40px"} height={"40px"}/>
      <span className="proname">{data.username}</span>
      <MdArrowDropDown />
      </div>
      </>):(
        <div className="buttons buttonsnav">
 <Link to={"/login"} className='logins'>Login</Link>
<Link to={"/sinup"}className='signup'>Signup</Link>
        </div>
      )
      
    }
      <div className="profileedit">
        <div className="to">
            <span><img src="https://lema.frontted.com/assets/images/frontted-logo-blue.svg" alt="" /></span>
            <span className='inf'>
                <h3>{data.username}</h3>
                <p>{data.role==="user"?"Student":"Manger"}</p>
                </span>
        </div>
        <div className="bot">
            <span><Link to={"/edit"}><CgProfile/> EditeAcount</Link></span>
            <span><IoSettingsOutline/> Setting</span>
            <span onClick={()=>handleLogout}><CiLogin/> Logout</span>
        </div>
      </div>
                </div>
                <span className='sidbarsmall' onClick={(()=>{document.querySelector(".sidebar").classList.toggle("thar")})}><IoMenuOutline/></span>
            </div>
        </div>
            <div className="settingi">
            <div className="bordsetting">
            <div className="layout">
            <div className="to">Layout</div>
                <div className="bott">
                    <span>TEXT DIRECTION</span>
                    <span><label className="switch"><input type="checkbox" className="vv" onChange={(e)=>{dir(e)}}/><span class="slider round"></span></label></span>
                </div>
            </div>
            <div className="maindrower">
            <p className="to" onClick={(e)=>{let ele= document.querySelector(".bottdrow");change(ele);}}>Main Drower</p>
            <div className="bott bottdrow">
                    <span className='title'>SIDEBAR SKIN</span>
                <div className="blok">
                    <span className='blo'>
                    <input type="radio" name='mode' id='light' value={"light"} onChange={(e)=>{setdark(true);colo()}}/>
                    <label htmlFor="light">Light</label>
                    </span>
                    <span className='blo'>
                        <input type="radio" name='mode' id='dark' value={"dark"}  onChange={(e)=>{setdark(false);colo()}}/>
                        <label htmlFor="dark">Dark</label>
                    </span>
                </div>
            </div>
            </div>
            <div className="maindnav">
            <p className="to" onClick={()=>{let ele= document.querySelector(".bottnav");change(ele);}}>Main Navbar</p>
            <div className="bott bottnav">
            <span className='title'>Main Navbar</span>
            <div className="blok">
                    <span className='blo' >
                    <input type="radio" name='alignd' id='lightt' value={"light"} onChange={(e)=>{setdarkn(false);colos()}}/>
                    <label htmlFor="lightt">Light</label>
                    </span>
                    <span className='blo' >
                    <input type="radio" name='alignd' id='darkt' value={"Dark"}onChange={(e)=>{setdarkn(true);colos()}}/>
                    <label htmlFor="darkt">Dark</label>
                    </span>
                    </div>
            </div>
            </div>
            </div>
            <span className="settingicon" onClick={(e)=>{
                document.querySelector(".bordsetting").classList.toggle("act");
            }}><IoSettingsOutline/></span>
        </div>

        {    document.body.addEventListener("click", (e) => {
        let profileedit = document.querySelector(".profileedit");
        let profile= document.querySelector(".profile");
        if (e.target!==profile) {
            profileedit.classList.remove("lock");
        }
    })}
        </>
    )
}
export default Navbar;