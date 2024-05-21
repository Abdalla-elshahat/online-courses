import './edit.css'
import { IoIosEyeOff } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
function Edit(){
return(
    <>
    <div className="edit">
            <h2 className='editacount'>Edit Account</h2>
            <form action="POST">
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Basic information</h2>
    <p>Edit your account details and settings.</p>
</div>
<div className="right">
    <div className="f">
        <div className="blok blokfok">
            <label htmlFor="fname">First name</label>
            <input type="text" id='fname' placeholder='Your first name'/>
        </div>
        <div className="blok blockfok">
            <label htmlFor="sname">last name</label>
            <input type="text" id='sname' placeholder='Your second name'/>
        </div>
    </div>
    <div className="s">
    <div className="blok">
            <label htmlFor="bio">Bio/discription</label>
           <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Bio/discription...'></textarea>
        </div>
    </div>
    <div className="th thcountry">
        <label htmlFor="country">country : </label>
        <select name="country" id="country">
            <option value={"usa"}>USA</option>
            <option value={"KSA"} >KSA</option>
            <option value={"EGYPT"} selected>EGYPT</option>
            <option value={"Gana"}>GANA</option>
            <option value={"Germany"}>Germany</option>
            <option value={"Freanch"}>Freanch</option>
        </select>
        <p className="avalibale">The country is not visible to other users.</p>
        <div className="sub">
            <h2 className='subh'>SUBSCRIBE TO NEWSLETTER</h2>
         {/* "?" */}
        </div>
    </div>
</div>
            </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Update Your Password</h2>
    <p>Change your password.</p>
</div>
<div className="right">
    <div className="f f2">
        <div className="blok">
            <label htmlFor="opass">OLD PASSWORD</label>
            <span className='pass'>
            <input type="password" id='opass' placeholder='OLD PASSWORD'/>
            <IoIosEyeOff className='eye'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="npass">NEW PASSWORD</label>
            <span className='pass'>
            <input type="password" id='npass' placeholder='NEW PASSWORD' minLength={8} maxLength={10}  />
            <IoIosEyeOff className='eye'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="copass">CONFIRM PASSWORD</label>
            <span className="pass">
            <input type="password" id='copass' placeholder='CONFIRM PASSWORD'  minLength={8} maxLength={10}/>
            <IoIosEyeOff className='eye'/>
            </span>
        </div>
    </div>
    </div>
    </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Profile Settings</h2>
    <p>Update your public profile with relevant and meaningful information.</p>
</div>
<div className="right">
    <div className="f3">
        <p className="avatar">Avatar</p>
        <div className="upload">
        <label htmlFor="file"><FaImage/></label>
        <input type="file" id='file'/>
        <button htmlFor="file">Upload file</button>
        </div>
    </div>
    <div className="s">
    <div className="blok">
            <label htmlFor="bio">description</label>
           <textarea name="bio" id="bio" cols="30" rows="10" placeholder='discription'></textarea>
        </div>
    </div>
    <div className="th">
        <div className="social">
<span className='face'>
        <FaFacebook/>
         <input type="text" placeholder='Facebook...' className='bb' /></span>
        </div>
        <div className="social">
<span className='twi'>
        <FaTwitter/>
        <input type="text"  placeholder='Twitter...'  className='bb'/>
        </span>
        </div>
        <div className="social">
<span className='insta'>
        <FaInstagram/>
        <input type="text"  placeholder='Instagram...'  className='bb'/>
        </span>
        </div>
        <h2 className='pinn'>AVAILABLE FOR FREELANCE?</h2>
        <div className="on">
        <input type="checkbox" name="check2" id="check22" />
        <label htmlFor="check22">Yes, show me as available for freelance!</label>
        </div>
    </div>


</div>
            </div>
            <input type="submit" value={"Save"} className='Save'/>
            </form>
        </div>
    </>
)
}
export default Edit;