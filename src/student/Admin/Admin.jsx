import './Admin.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Admin(){
useEffect(()=>{
Aos.init({ duration:2000});
},[])
return(
    <>
    <div className="admin">
        <div className="top">
            <div className="overlay">
     <h2 data-aos="fade-up">Everything you need to LEARN</h2>
     <p  data-aos="fade-up">Get your first Job as a UI/UX Designer</p>
     <div className="btns" data-aos="fade-down">
        <span className='blesson'>Browse Lessons</span>
        <span className="subscribe">Subscribe</span>
     </div>
            </div>
        </div>
        <div className="recentadmin">
            <h1>Recent Courses</h1>
        <div className="serice courses">
                 <div className="middels">
                    <div className="card cardcors">
                        <div className="topcors">
                        <img src="https://lema.frontted.com/assets/images/logos/react.svg" alt="logo"/>
                        <h2 className='corsh'>React</h2>
                        <p>Learn the basic</p>
                        </div>
                        <div className="bottomcors">
                            <div className="taqem">
                            <IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoStarHalfSharp/> <span>3.7</span>
                            </div>
                            <span>(391 ratings)</span>
                            <div className="buy">
                                <span>$50</span>
                                <button className='buycors'><MdAddShoppingCart/></button>
                            </div>
                        </div>
                        </div>    
                        <div className="card cardcors">
                        <div className="topcors">
                        <img src="https://lema.frontted.com/assets/images/logos/vuejs.svg" alt="logo"/>
                        <h2 className='corsh'>Vue.js</h2>
                        <p>Quik Tips</p>
                        </div>
                        <div className="bottomcors">
                            <div className="taqem">
                            <IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoStarHalfSharp/> <span>3.7</span>
                            </div>
                            <span>(391 ratings)</span>
                            <div className="buy">
                                <span>$50</span>
                                <button className='buycors'><MdAddShoppingCart/></button>
                            </div>
                        </div>
                        </div>    
                        <div className="card cardcors">
                        <div className="topcors">
                        <img src="https://lema.frontted.com/assets/images/logos/angular.svg" alt="logo"/>
                        <h2 className='corsh'>Angular</h2>
                        <p>Back to Basics</p>
                        </div>
                        <div className="bottomcors">
                            <div className="taqem">
                            <IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoStarHalfSharp/> <span>3.7</span>
                            </div>
                            <span>(391 ratings)</span>
                            <div className="buy">
                                <span>$50</span>
                                <button className='buycors'><MdAddShoppingCart/></button>
                            </div>
                        </div>
                        </div> 
                    </div>
        </div>
        <div className="feature">
            <h1 className='featureh'>Features & Highlights</h1>
            <p>What makes LEMA an awesome template</p>
            <div className="bigan">
                <div className="blokan">
                    <span className="left" data-aos="fade-right"> 
                    <span className='info '>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    <span className='iconan'><IoMdStar/></span>
                    </span>
                    <span className="right" data-aos="fade-left">
                    <span className='iconan'><IoMdStar/></span>
                    <span className='info'>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    </span>
                </div>
                <div className="blokan">
                    <span className="left" data-aos="fade-right"> 
                    <span className='info '>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    <span className='iconan'><IoMdStar/></span>
                    </span>
                    <span className="right" data-aos="fade-left">
                    <span className='iconan'><IoMdStar/></span>
                    <span className='info'>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    </span>
                </div>
                <div className="blokan">
                    <span className="left" data-aos="fade-right"> 
                    <span className='info '>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    <span className='iconan'><IoMdStar/></span>
                    </span>
                    <span className="right" data-aos="fade-left">
                    <span className='iconan'><IoMdStar/></span>
                    <span className='info'>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    </span>
                </div>
                <div className="blokan">
                    <span className="left" data-aos="fade-right"> 
                    <span className='info '>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    <span className='iconan'><IoMdStar/></span>
                    </span>
                    <span className="right" data-aos="fade-left">
                    <span className='iconan'><IoMdStar/></span>
                    <span className='info'>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    </span>
                </div>
                <div className="blokan">
                    <span className="left" data-aos="fade-right"> 
                    <span className='info '>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    <span className='iconan'><IoMdStar/></span>
                    </span>
                    <span className="right" data-aos="fade-left">
                    <span className='iconan'><IoMdStar/></span>
                    <span className='info'>
                        <h3>Twitter Bootstrap 4.4.1</h3>
                        <p>Built on top of the latest BS framework</p>
                    </span>
                    </span>
                </div>
                <div className="blokan">
                    <span className='view' data-aos="fade-up">View All</span>
                </div>
            </div>
        </div>
        <div className="foot">
            <h1>Sign up and get new UI releases</h1>
            <p>No spam. Only releases, updates and discounts</p>
            <div className="cont">
                <input type="email" placeholder="Enter your email" className="email" />
                <span className='subscribe' data-aos="flip-left">SUBSCRIBE</span>
            </div>
        </div>
        </div>
    </div>

    </>
)
}
export default Admin;