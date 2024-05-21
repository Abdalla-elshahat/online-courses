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
import { useState } from 'react';
function Navbar(){
    const[dark,setdark]=useState(false);
    const[darkn,setdarkn]=useState(false);
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
      <div className="iconss">
      <BsAlarm className='alarm' onClick={()=>{document.querySelector(".alarmsetting").classList.toggle("tt")}}/>
      <div className="alarmsetting">
   <div className="top">
    <p className='notf'>notifications_menu</p>
    <p className='clearall'>clear all</p>
   </div>
   <div className="bottom">
    <div className="blog">
    <img src="https://lema.frontted.com/assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="" />
    <span className='notfname'>peter parker <span>left a comment on</span></span>
    </div>
    <div className="blog">
    <img src="https://lema.frontted.com/assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="" />
    <span className='notfname'>peter parker <span>left a comment on</span></span>
    </div>
    <div className="blog">
    <img src="https://lema.frontted.com/assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="" />
    <span className='notfname'>peter parker <span>left a comment on</span></span>
    </div>
   </div>
</div>
<SlCalender className='calender'/>
      </div>
      <div className="profile" onClick={()=>{document.querySelector(".profileedit").classList.toggle("lock")}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tu5dzNZpapb4I6IYxDncLrXkR3U051AHDjQ6bQCmjQ&s" alt=""  width={"40px"} height={"40px"}/>
      <span className="proname">Adrian</span>
      <MdArrowDropDown/>
      </div>
      <div className="profileedit">
        <div className="to">
            <span><img src="https://lema.frontted.com/assets/images/frontted-logo-blue.svg" alt="" /></span>
            <span className='inf'>
                <h3>Adrian D.</h3>
                <p>Student</p>
                </span>
        </div>
        <div className="bot">
            <span><Link to={"/edit"}><CgProfile/> EditeAcount</Link></span>
            <span><IoSettingsOutline/> Setting</span>
            <span><Link to={"login"}><CiLogin/> Logout</Link></span>
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
                    <span><label class="switch"><input type="checkbox" class="vv" onChange={(e)=>{dir(e)}}/><span class="slider round"></span></label></span>
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

        {/* {    document.body.addEventListener("click", (e) => {
        let profileedit = document.querySelector(".profileedit");
        let profile= document.querySelector(".profile");
        if (e.target!==profile) {
            profileedit.classList.remove("lock");
        }
    })} */}
        </>
    )
}
export default Navbar;