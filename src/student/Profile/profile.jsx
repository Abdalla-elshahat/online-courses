import './profile.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiShieldStarFill } from "react-icons/pi";
import { BsLink45Deg } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { SlCalender } from 'react-icons/sl';
import { IoMdLaptop } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
function Profile(){
    return(
        <>
        <div className="profilee">
            <h2 className='profileacount'>Your profile</h2>
            <p className='LEMA'>LEMA Student</p>
           <div className="pros">
            <div className="left">
<div className="card">
    <div className="informa">
<img src="https://lema.frontted.com/assets/images/256_luke-porter-261779-unsplash.jpg" alt="" />
<p className='ander'>Short bio about this student is comming soon.</p>
    <div className="icos">
        <span className='f'><FaFacebook /></span>
       <span className='t'><FaTwitter/></span>
       <span className='i'><FaInstagram /></span>
       </div>
        <div className="achive">
            <h2>Achievements</h2>
        </div>
        <div className="colors">
            <div className="oneb" >Senior Develober</div>
            <PiShieldStarFill  className='one'/>
            <div className="twob">100 lessons learned</div>
            <PiShieldStarFill className='two'/>
            <div className="threeb"> First couse compeleted</div>
            <PiShieldStarFill className='three'/>
            <div className="fourb">1 serise compeleted</div>
            <PiShieldStarFill className='four'/>
            <div className="fiveb">Vip pass</div>
            <PiShieldStarFill className='five'/>
        </div>
        <div className="skills">
            <h2>Skills</h2>
        </div>
        {/* <div className="tany">
            <div className="blog">
                <span>css</span>
                <span className='bg'><span></span></span>
                <span>39%</span>
            </div>
            <div className="blog">
                <span>Javascript</span>
                <span className='bg'><span></span></span>
                <span>76%</span>
            </div>
            <div className="blog">
                <span>RUBY ON RAILS</span>
                <span className='bg'><span></span></span>
                <span>28%</span>
            </div>
            <div className="blog">
                <span>VUEJS</span>
                <span className='bg'><span></span></span>
                <span>50%</span>
            </div> */}
                             <div className="progressbottom">
                            <div className="block">
                                <div className="left blokpr">
                                    <img src="https://lema.frontted.com/assets/images/logos/javascript.svg" alt="" className='js jsp'/>
                                    <div className="bob">
                                        <p>ES6 Foundations</p>
                                        <span className='con'><span className='one'></span></span></div>
                                        <span className='presnt'>80%</span>
                                </div>
                            </div>
                            <div className="block">
                                <div className="left blokpr">
                                    <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=35&h=35"className='nop' alt="" />
                                    <div className="bob">
                                        <p>Basics of Social Media</p>
                                        <span className='con'><span className='two'></span></span></div>
                                        <span className='presnt'>60%</span>
                                </div>
                            </div>
                            <div className="block">
                                <div className="left blokpr">
                                    <img src="https://lema.frontted.com/assets/images/logos/vuejs.svg" alt="" className='vaup' />
                                    <div className="bob">
                                        <p>Learn Vue.js Fundamentals</p>
                                        <span className='con'><span className='three'></span></span></div>
                                        <span className='presnt'>25%</span>
                                </div>
                            </div>
                            <div className="block">
                                <div className="left blokpr">
                                    <img src="https://lema.frontted.com/assets/images/logos/angular.svg" className='anagelrp' alt="" />
                                    <div className="bob h">
                                        <p>Angular in Steps</p>
                                        <span className='con h'><span className='four'></span></span></div>
                                        <span className='presnt'>100%</span>
                                </div>
                            </div>
                        </div>
    </div>
    </div>
    </div> 
            <div className="rightpro">
<div className="toppro">
                        <div className="card">
                            <div className="bakico b1"><SlCalender/></div>
                            <div className="clop">
                            <p className='cardp'>Courses Taken</p>
                            <h2 className="cardh2">14</h2>
                            </div>
                        </div>
                        <div className="card">
                        <div className="bakico b2"><IoMdLaptop/></div>
                            <div className="clop">
                            <p className='cardp'>Quizzes Taken</p> 
                            <h2 className="cardh2">6</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="bakico b3"><GoPersonFill/> </div>
                            <div className="clop">
                            <p className='cardp'>Overall Score</p>
                            <h2 className="cardh2">592</h2>
                            </div>
                        </div>
                    </div>
                    <div className="meddilpro">
    <div className="card">
        <img src="https://lema.frontted.com/assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="" />
        <div className="contenet">
            <h2 className="sherr">Sherri J. Cardenas <span>3 days ago</span></h2>
            <p>Thanks for contributing to the release of FREE Admin Vision - PRO Admin Dashboard Theme</p>
            <a href="#">https://www.frontted.com 🔥</a>
            <div className="react">
<span className="like"><AiTwotoneLike className='lk'/> 36</span>
<span className="love"><FaRegHeart className='lo'/>  545</span>
            </div>
        </div>
    </div>
</div>
<div className="bottompro">
<div className="card">
        <img src="https://lema.frontted.com/assets/images/256_daniel-gaffey-1060698-unsplash.jpg" alt="" />
        <div className="contenet">
            <h2 className="sherr">Jenell D. Matney <span>4 days ago</span></h2>
            <p>Rails 5 Bootstrap 4 Boilerplate Admin Dashboard on <a href="#"> https://t.co/Wh7jE0yz4t 😉</a></p>
            <div className="cardin">
                <img src="https://lema.frontted.com/assets/images/course_lms.jpg" alt="" />
                <h2>Admin Dashboard Template</h2>
                <span>Made with Rails 5 and Bootstrap 4</span>
                <span className='link'><BsLink45Deg/></span>
                <span>frontted.com</span>
            </div>
            <div className="react">
<span className="like"><AiTwotoneLike className='lk'/> 36</span>
<span className="love"><FaRegHeart className='lo'/>  545</span>
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
export default Profile;