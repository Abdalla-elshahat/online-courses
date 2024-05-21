import './serice.css'
import { FaFileCode } from "react-icons/fa";
import { CgAlarm } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Serice(){
    let [cont,setcont]=useState([]);
    useEffect(()=>{
    },[])
    console.log(cont)
    return(
        <>
        <div className="serice">
            <div className="tops">
                <h2 className="serich">Serice</h2>
                <div className='sortdev'><span>Sort : </span> 
                <div className="select">
                <select name="sort" id="sort">
                    <option value="corsesname">Courses name</option>
                    <option value="price">Price</option>
                    <option value="Author">Author</option>
                    </select> </div>
                </div>
                    </div>
                    <ul className="sericelist">
                        <li className='activee'>ALL</li>
                        <li>Marketing</li>
                        <li>Back-End</li>
                        <li>Design</li>
                    </ul>
                    <div className="middels">
                    <div className="card">
                    <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                    <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                      <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>    
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                        <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                            <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>    
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                        <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                            <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>    
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                        <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                            <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>    
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                        <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                            <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>    
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" className='sericimg'/>
                        <Link to={"/clesson"}> <div className="back"><span><FaRegPlayCircle className='span'/></span></div></Link>
                            <h2>React-Back to Basics</h2>
                           <p><FaFileCode/> 25 lessons <CgAlarm/> 4 Hours</p>
                        <span className="price">50$</span>
                        </div>       
                    </div>
                    <div className="bots">
                        <h2>Get all courses for $99</h2>
                        <button className='purs'>Purchase <span><MdShoppingCart/></span></button>
                    </div>
        </div>
        </>
    )
}
export default Serice;