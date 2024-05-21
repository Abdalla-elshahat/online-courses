import './mycorses.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
function Mycorses(){
    return(
        <>
           <div className="serice courses mycorses">
            <div className="tops">
                <h2 className="serich">Instructor Courses</h2>
                <span className='Goto'>New Course <FaPlus/></span>
                    </div>
                   <div className="inputall">
                  <span className="input1">
                  <input type="text" placeholder='filter by name'/>
                  <IoSearchSharp/>
                  </span>
                  <div className="inputs">
                    <div className="input2"> 
                    <label htmlFor="input2" className='labla'>Sort</label>
                    <select name="input2" id="input2">
                        <option value="name">Name</option>
                        <option value="creted">Created Date</option>
                        <option value="Earnings">Earnings</option>
                    </select>
                    </div>
                    <div className="input3">
                    <label htmlFor="input3" className='labla'>States</label>
                    <select name="input3" id="input3">
                        <option value="All">All</option>
                        <option value="publish">publish</option>
                        <option value="default">Default</option>
                    </select>
                    </div>
                  </div>
                   </div>
                 <div className="middels">
                    <div className="card">
                        <img src="https://lema.frontted.com/assets/images/logos/vuejs.svg" alt="" />
                        <div className="bob">
                            <div className="fof">
                            <h2>Learn Vue.js</h2>
                            <p>Let’s start with a quick tour of Vue’s data binding features.</p>
                            </div>
                            <div className="bot">
                                <div className="to">
                                    <h2>$1,230/mo</h2>
                                  <p>34 SALES</p>
                                </div>
                                <div className="bo">
                                    <span className='colvue'>VUEJS</span>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <span className='colonicons'><BsThreeDotsVertical/></span>
                        </div>   
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/logos/node.svg" alt="" />
                        <div className="bob">
                            <div className="fof">
                            <h2>Npm & Gulp Advanced Workflow</h2>
                            <p>Learn the basics of Github and become a power Github developer.</p>
                            </div>
                            <div className="bot">
                                <div className="to">
                                    <h2>$421/mo</h2>
                                  <p>12 SALES</p>
                                </div>
                                <div className="bo">
                                    <span className='colnode'>NODE</span>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <span className='colonicons'><BsThreeDotsVertical/></span>
                        </div>   
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/logos/gitlab.png" alt="" />
                        <div className="bob">
                            <div className="fof">
                            <h2>Gitlab for Beginners</h2>
                            <p>Developing static website with fast and advanced gulp setup.</p>
                            </div>
                            <div className="bot">
                                <div className="to">
                                    <h2>$2,191/mo</h2>
                                  <p>50 SALES</p>
                                </div>
                                <div className="bo">
                                    <span className='colfire'>GITLAB</span>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <span className='colonicons'><BsThreeDotsVertical/></span>
                        </div>   
                        <div className="card">
                        <img src="https://lema.frontted.com/assets/images/logos/rails.svg" alt="" />
                        <div className="bob">
                            <div className="fof">
                            <h2>Ruby on Rails Workflows</h2>
                            <p>Let’s start with a quick tour of Vue’s data binding features.</p>
                            </div>
                            <div className="bot">
                                <div className="to">
                                    <h2>$300/mo</h2>
                                  <p>34 SALES</p>
                                </div>
                                <div className="bo">
                                    <span className='colang'>ANGULAR</span>
                                    <span>INTERMEDIATE</span>
                                </div>
                            </div>
                        </div>
                        <span className='colonicons'><BsThreeDotsVertical/></span>
                        </div>   
                    </div>
        </div>
        </>
    )
}
export default Mycorses