import './form.css'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FaUnderline } from "react-icons/fa";
import { MdAddLink } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbListNumbers } from "react-icons/tb";
import { PiTextItalicBold } from "react-icons/pi";
import { FaBold } from "react-icons/fa";
import { useState } from 'react';
import React from 'react';
import Select from 'react-select';
import { colourOptions } from './data.ts';
function Formui(){
    const [img, setimg] = useState([]); 
    const [size, setsize] = useState(false);
    const [bold, setbold] = useState(false);
    const [ite, setite] = useState(false);
    const [underline, setunderline] = useState(false);
    const [link, setlink] = useState(false);
    const [num,setnum]=useState(false);
    const [dot, setdot] = useState(false);
    function autoResize(textarea) {
        let tex=document.querySelector("textarea")
        tex.style.scrollHeight="auto"
            tex.style.height = tex.scrollHeight + "px"; 
      }
      function handleimg(e){
const files=e.target.files;
const newImages = [...img];
for (let i = 0; i < files.length; i++) {
    newImages.push(files[i]);
  }
  setimg(newImages);
      }
      const handleRemoveImage = (index) => {
        const newImages = [...img];
        newImages.splice(index, 1);
        setimg(newImages);
      };

    return(
        <>
         <div className="edit forms">
            <h2 className='editacount'>Forms</h2>
            <div className="basicinfo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Default Forms</h2>
    <p>Stack supports all of Bootstrap's default form styling in addition to a handful of new input types and features. Pleasea <a href="">read the official documentation </a> for a full list of options from Bootstrap's core library.</p>
</div>
<div className="right">
    <div className="f fform">
        <div className="blok">
            <label htmlFor="email">Your email</label>
            <input type="text" id='email' placeholder='Your Email'/>
        </div>
        <div className="blok">
            <label htmlFor="pass">Your password</label>
            <input type="text" id='pass' placeholder='Your password'/>
        </div>
        <input type="submit" id="submit" value={"submit"}/>
    </div>
</div>
</form>
            </div>
            <div className="basicinfo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Form Validation</h2>
    <p>Provide valuable, actionable feedback to your users with HTML5 form validation. Indicate invalid and valid form fields with .is-invalid and .is-valid classes.</p>
</div>
<div className="right">
    <div className="f">
        <div className="blok">
            <label htmlFor="firstname">first_name</label>
            <span className='firstname'>
            <input type="text" id='firstname' placeholder='First Name...'/>
            <AiOutlineExclamationCircle className='nfy'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="lastname">last_name</label>
            <span className='firstname'>
            <input type="text" id='lastname' placeholder='Last Name...'/>
            <AiOutlineExclamationCircle className='nfy'/>
            </span>
        </div>
    </div>
    <div className="f">
        <div className="blok">
            <label htmlFor="city">City</label>
            <span className='firstname'>
            <input type="text" id='city' placeholder='City...'/>
            <AiOutlineExclamationCircle className='nfy'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="state">State</label>
            <span className='firstname'>
            <input type="text" id='state' placeholder='State...'/>
            <AiOutlineExclamationCircle className='nfy'/>
            </span>
        </div>
    </div>
    <span className='check'>
    <input type="checkbox" id='check'/>
    <label htmlFor="check">Agree to terms and conditions</label>
    </span>
    <input type="submit" name="" id="submit" value={"submit"}/>
    </div>
                </form>
    </div>
    <div className="basicinfo uuuo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Search</h2>
    <p>A dedicated form group alternative for search forms that always keeps the submit button as part of the form control.</p>
</div>
<div className="right">
    <div className="fi">
        <div className="blok le">
            <label htmlFor="regular">Regular</label>
            <span className='regular nx'>
            <input type="text" id='regular' placeholder='search icon...'/>
            <IoMdSearch className='nfy'/>
            </span>
        </div>
        <div className="blok re">
            <label htmlFor="flash">Flash</label>
            <span className='flash nx'>
            <input type="text" id='flash' placeholder='Serch icon...'/>
            <IoMdSearch className='nfy'/>
            </span>
        </div>
    </div>
        <div className="blok">
            <label htmlFor="larg">Larg</label>
            <span className='larg nx'>
            <input type="text" id='larg' placeholder='Serch icon...'/>
            <IoMdSearch className='nfy'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="round">Round</label>
            <span className='round nx'>
            <input type="text" id='round' placeholder='Serch icon...'/>
            <IoMdSearch className='nfy'/>
            </span>
        </div>
    </div>
                </form>
    </div>
    <div className="basicinfo uuuo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Merge Group</h2>
    <p>A slightly modified version of the default input groups that always keeps icons as a part of the form control. Also works with validation.</p>
</div>
<div className="right">
        <div className="blok">
            <span className='nx'>
            <IoIosEyeOff className='nfy'/>
            <input type="text" id='prebend' placeholder='input group append...'/>
            </span>
        </div>
        <div className="blok">
            <span className=' nx'>
            <input type="text" id='prebend' placeholder='input group append...'/>
            <IoIosLock className='nfy'/>
            </span>
        </div>
        <div className="blok">
            <span className=' nx green'>
            <IoIosEyeOff className='nfy'/>
            <input type="text" id='prebend' placeholder='input group append...'/>
            <MdDone className='nfy'/>
            </span>
        </div>
        <div className="blok">
            <span className=' nx red'>
            <input type="text" id='prebend' placeholder='input group append...'/>
            <AiOutlineExclamationCircle className='nfy'/>
            <IoIosLock className='nfy'/>
            </span>
        </div>
    </div>
                </form>
    </div>
    <div className="basicinfo uuuo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Rounded</h2>
    <p>Form control with rounded corners with the <span>.form-control-rounded </span>modifier.</p>
</div>
<div className="right">
        <div className="blok blokround">
        <label htmlFor="rounded">Rounded</label>
            <span className='round nx'>
            <input type="text" id='rounded' placeholder='rounded from...'/>
            </span>
        </div>
      
    </div>
    </form>
    </div>
    <div className="basicinfo uuuo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Flush</h2>
    <p>Remove paddings and borders from a form control with the<span>.form-control-rounded </span>modifier.</p>
</div>
<div className="right">
        <div className="blok">
        <label htmlFor="flush">Flush</label>
            <span className='flush nx'>
            <input type="text" id='flush' placeholder='Flush from control...'/>
            </span>
        </div>
      
    </div>
                </form>
    </div>
    <div className="basicinfo">
                <form action="">
                <div className="left">
    <h2 className='pin'>Toggle</h2>
    <p>Replaces a standard checkbox input with a toggle button.</p>
</div>
<div className="right">
<p>SUBSCRIBE TO NEWSLETTER</p>
        <div className="blok jjj">
        <p>Yes</p>
        <span>
<label class="switch">
  <input type="checkbox" className='vv'/>
  <span class="slider round"></span>
</label></span>
        </div>
      
    </div>
                </form>
    </div>
    <div className="basicinfo uuuo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Date Picker</h2>
    <p>A simple yet powerful datepicker powered by Flatpickr. Please read the <a href="#">official plugin documentation</a> for a full list of options.</p>
</div>
<div className="right">
        <div className="blok">
        <label htmlFor="date">Date</label>
            <span className="nx">
            <input type="date" id='date' placeholder='16/11/2002'/>
            </span>
        </div>
        <div className="blok">
        <label htmlFor="rangee">RANGE</label>
            <span className="nx">
            <input type="date" id='rangee' placeholder='5,oct,1999'/>
            </span>
       
    </div>
</div>
</form>
    </div>
    <div className="basicinfo uuuo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Input Masking</h2>
    <p>Mask your form controls depending on the context with the jQuery Mask plugin. Please read the <a href=""> official plugin documentation</a> for a full list of options.</p>
</div>
<div className="right">
        <div className="blok">
            <label htmlFor="number">number</label>
            <span className='nx'>
            <input type="number" id='number' placeholder='number:12,275'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="phone">Phone</label>
            <span className="nx">
            <input type="number" id='phone' placeholder='Phone:(000)000-000)'/>
            </span>
        </div>
        <div className="blok">
            <label htmlFor="Date">Date</label>
            <span className="nx">
            <input type="number" id='Date' placeholder='date:00/00/0000'/>
            </span>
        </div>
</div>
</form>
    </div>
    <div className="basicinfo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Rich Text Editor</h2>
    <p>Powerful WYSIWYG text editor powered by Quill. Please read the official plugin documentation for a full list of options.</p>
</div>
<div className="right">
   <p>DEFAULT</p>
   <div className="card cardform">
    <div className="carto">
        <span>
            <select name="h" id="head" onChange={(e)=>{
                let x=document.querySelector("#form");
                if(e.target.value==="h1"){
                x.style.fontSize="40px"
                }
                else if(e.target.value==="h2"){
                    x.style.fontSize="30px"
                }
                else if(e.target.value==="h3"){
                    x.style.fontSize="20px"
                }
                else{
                    x.style.fontSize="15px"
                }
            }}>
                <option value="h1" className='h1'>Heading1</option>
                <option value="h2" className="h2">Heading2</option>
                <option value="h3" className='h3'>Heading3</option>
                <option value="normal" defaultChecked>Normal</option>
            </select>
        </span>
        <span className='bold' value="bold" onClick={()=>{setbold(!bold);
            let x=document.querySelector("#form"); 
            bold?x.style.fontWeight="bold":x.style.fontWeight="normal"}}><FaBold/></span>

        <span className='italic' value="italic" onClick={()=>{setite(!ite);
            let x=document.querySelector("#form"); 
            ite?x.style.fontStyle="italic":x.style.fontStyle="normal"}}><PiTextItalicBold/></span>

        <span className='underline' value="underline" onClick={()=>{setunderline(!underline);
            let x=document.querySelector("#form"); 
            underline?x.style.textDecoration="underline":x.style.textDecoration="none"}}><FaUnderline/></span>

        <label htmlFor="link" className='link'><MdAddLink/></label>
        <input type='file' id='link'/>

        <span className='rnagedot'  onClick={()=>{setdot(!dot);
            let x=document.querySelector("#form");
             dot?x.style.fontStyle="italic":x.style.textDecoration="underline";
        }}><IoListOutline/></span>

        <span className='listnum'><TbListNumbers/></span>
    </div>
    <div className="carbottom">
        <textarea id="form" placeholder='Enter' onInput={()=>autoResize(this)}></textarea>
    </div>
   </div>
</div>
</form>
    </div>
    <div className="basicinfo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Drag & Drop File Uploads</h2>
    <p>Drag and drop file uploads with image previews powered by Dropzone.js. Please read the <a href="">official plugin documentation</a>  for a full list of options.</p>
</div>
<div className="right">
    <label htmlFor="fileforms" className='fileforms'><FaCloudUploadAlt/> <p>Upload your CV</p></label>
    <input type="file" name='img' id='fileforms' onChange={(e)=>handleimg(e)}/>
       {
        img.map((e,index)=>{
            return(
                <span className='taml'>
                <div className="l"> 
                <img src={URL.createObjectURL(e)} width={"50px"} height={"50px"} alt="" />
                <div className="inrf">
                    <span className='name'>{(e.name).slice(0,5)}</span>
                    <span className='size'>{((e.size)/1024).toFixed(2)} KB</span>
                </div>
                </div>
                <div className="r" onClick={()=>handleRemoveImage(index)}>X</div>
            </span>

            )
        })
       }
 
</div>
</form>
    </div>
    <div className="basicinfo uuuo">
            <form action="POST">
<div className="left">
    <h2 className='pin'>Select</h2>
    <p>Customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options powered by Select2. Please read the <a href="">official plugin documentation </a>for a full list of options..</p>
</div>
<div className="right">
        <div className="blok">
            <label htmlFor="Basic">Basic</label>
            <select name="Basic" id="Basic">
                <option value="first">First position</option>
                <option value="first">First position</option>
                <option value="first">First position</option>
                <option value="first">First position</option>
            </select>
        </div>
        <div className="blok">
            <label htmlFor="avatar">Avatar</label>
            <select name="avatar" id="Avatar" className='nx'>
                <option value="adrian">adrian</option>
                <option value="adrian">adrian</option>
                <option value="adrian">adrian</option>
            </select>
        </div>
        <div className="blok">
            <label htmlFor="select03"></label>
        <select id="select03" data-toggle="select" multiple="" class="nx">
                                            <option selected="">CSS</option>
                                            <option selected="">HTML</option>
                                            <option>JavaScript</option>
                                            <option>Bootstrap</option>
                                        </select>
        </div>
        <div className="blok">
        <select id="select04" data-toggle="select" multiple="" class="form-control form-control-lg nx">
                                            <option>CSS</option>
                                            <option>HTML</option>
                                            <option selected="">JavaScript</option>
                                            <option>Bootstrap</option>
                                        </select>
        </div>
        <div className="blok">
            <label htmlFor="select05">Small</label>
            <select class="form-select" multiple aria-label="Multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
        <div className="blok">
        <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
        </div>
</div>
</form>
    </div>
    </div>
    </>
    )
}
export default Formui;