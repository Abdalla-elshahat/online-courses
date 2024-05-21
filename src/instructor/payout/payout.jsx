import { useState } from 'react';
import './payout.css'
function Pay(){
    const [check,setcheck]=useState(false)
    return(
        <>
           <div className="serice courses billing pay">
        <div className="tops">
        <h2 className="serich">Payout</h2>
                    </div>
                <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Payout Account</h2>
    <p>Where we will send you the money.</p>
</div>
<div className="rightpay">
    <img src="https://lema.frontted.com/assets/images/logos/paypal.svg" alt="" />
<p className="contact">contact@frontted.com</p>
<span className='change'>Change</span>
</div>
            </div>
            <div className="basicinfo">
<div className="left">
    <h2 className='pin'>Account</h2>
    <p>Set your account type & details.</p>
</div>
<div className="right">
    <div className="marfsh">
        <p>ACCOUNT TYPE</p>
        <div className="cont">
        <span className="personal active" onClick={()=>{
             setcheck(true);
        if(check){document.querySelector('.personal').classList.add("active");
        document.querySelector('.compeny').classList.remove("active") }
        }}>Personal</span>
        <span className="compeny" onClick={()=>{
            setcheck(false);
        if(check){document.querySelector('.personal').classList.remove("active");
        document.querySelector('.compeny').classList.add("active") }
        }}>Compeny</span> 
        </div>
    </div>
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
            <label htmlFor="bio">Address</label>
           <textarea name="bio" id="bio" cols="30" rows="10" placeholder='enter in voice address...'></textarea>
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
           <span className='up'>Update</span>
        </div>
    </div>
</div>
            </div>
                </div>
        </>
    )
}
export default Pay;