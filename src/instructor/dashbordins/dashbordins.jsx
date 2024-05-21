import './dashbordins.css'
import { TbExclamationMark } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { FaVolleyballBall } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from 'react-icons/sl';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { GiMonkey } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Dashbord(){
    return(
        <>
         <div className="dash dashins">
            <div className="content">
                <div className="studentdashbord">
                    <p>Instructor Dashboard</p>
                <div className="buton">
                    <button className="view">Go To courses <span> <FaArrowRight/></span></button>
                </div>
                </div>
                <div className="feature">
                    <div className="topc">
                        <div className="card">
                            <div className="infodains">
                                <h2 className="in">Current Month</h2>
                                <h1 className="bigins">$12,920</h1>
                                <p className="srate">31.5 <FaArrowDown/></p>
                            </div>
                            <div className="bakico b1"><SlCalender/></div>
                        </div>
                        <div className="card">
                            <div className="infodains">
                                <h2 className="in">Current Month</h2>
                                <h1 className="bigins">$12,920</h1>
                                <p className="srate">31.5 <FaArrowDown/></p>
                            </div>
                            <div className="bakico b1"><SlCalender/></div>
                        </div>
                        <div className="card">
                            <div className="infodains">
                                <h2 className="in">Current Month</h2>
                                <h1 className="bigins">$12,920</h1>
                                <p className="srate">31.5 <FaArrowDown/></p>
                            </div>
                            <div className="bakico b1"><SlCalender/></div>
                        </div>
                    </div>
               <div className="bottomc">
                <div className="rightinsdashbottom">
                  <div className="card">
                    <div className="topdashins">
                        <span className="eng">Earnings</span>
                        <span className="dateins">01/03/2020 to 20/03/2020</span>
                    </div>
                    <div className="bottomdashins">
                        <div className="mony">
                            <span>$30K</span>
                            <span>$20K</span>
                            <span>$20K</span>
                            <span>$0K</span>
                        </div>
                        <div className="pres">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                            <span>Jul</span>
                            <span>Aug</span>
                            <span>sep</span>
                            <span>oct</span>
                            <span>Nov</span>
                            <span>Des</span>
                        </div>
                    </div>
                    </div>  
                </div>
                <div className="leftbottomc">
                    <div className="lefttopbottomc">
                    <div className="inprogressc">
                        <div className="topprogress">
                        <div className="topprogressl">
                        <h1>In Progress</h1>
                            <p>Recent Courses</p>
                        </div>
                        <div className="topprogressr">
                       <button className='Brows'>Brows All</button>
                        </div>
                        </div>
                        <div className="progressbottom">
                            <div className="block">
                                <div className="left">
                                    <img src="https://lema.frontted.com/assets/images/logos/javascript.svg" alt="" className='js'/>
                                    <div className="bob">
                                        <p>ES6 Foundations</p>
                                        <span className='con'><span className='one'></span></span></div>
                                        <span className='presnt'>80%</span>
                                </div>
                                <div className="right"><BsThreeDotsVertical/></div>
                            </div>
                            <div className="block">
                                <div className="left">
                                    <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=35&h=35" alt="" />
                                    <div className="bob">
                                        <p>Basics of Social Media</p>
                                        <span className='con'><span className='two'></span></span></div>
                                        <span className='presnt'>60%</span>
                                </div>
                                <div className="right"><BsThreeDotsVertical/></div>
                            </div>
                            <div className="block">
                                <div className="left">
                                    <img src="https://lema.frontted.com/assets/images/logos/vuejs.svg" alt="" />
                                    <div className="bob">
                                        <p>Learn Vue.js Fundamentals</p>
                                        <span className='con'><span className='three'></span></span></div>
                                        <span className='presnt'>25%</span>
                                </div>
                                <div className="right"><BsThreeDotsVertical/></div>
                            </div>
                            <div className="block">
                                <div className="left">
                                    <img src="https://lema.frontted.com/assets/images/logos/angular.svg" alt="" />
                                    <div className="bob h">
                                        <p>Angular in Steps</p>
                                        <span className='con h'><span className='four'></span></span></div>
                                        <span className='presnt'>100%</span>
                                </div>
                                <div className="right"><BsThreeDotsVertical/></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
               </div>
                </div>
            </div>
        </>
    )
}
export default Dashbord;