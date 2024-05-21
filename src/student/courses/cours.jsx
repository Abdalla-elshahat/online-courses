import './cours.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
function Cours(){
    return(
        <>
        <div className="serice courses">
            <div className="tops">
                <h2 className="serich">Courses</h2>
                <span className='Goto'>Go to Course <FaArrowRight/></span>
                    </div>
                   <div className="inputall">
                  <span className="input1">
                  <input type="text" placeholder='Search courses'/>
                  <IoSearchSharp/>
                  </span>
                  <div className="inputs">
                    <div className="input2"> 
                    <label htmlFor="input2" className='labla'>Catigory</label>
                    <select name="input2" id="input2">
                        <option value="All">All Catigory</option>
                        <option value="Vue.js">Vue.js</option>
                        <option value="Node">Node</option>
                        <option value="Github">Github</option>
                    </select>
                    </div>
                    <div className="input3">
                    <label htmlFor="input3" className='labla'>States</label>
                    <select name="input3" id="input3">
                        <option value="All">All</option>
                        <option value="inprogress">in Progress</option>
                        <option value="Newrelese">New releases</option>
                    </select>
                    </div>
                  </div>
                   </div>
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
                        <div className="card cardcors">
                        <div className="topcors">
                        <img src="https://lema.frontted.com/assets/images/logos/javascript.svg" alt="logo"/>
                        <h2 className='corsh'>Javascript</h2>
                        <p>ES6 and Beyond</p>
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
                        <img src="https://lema.frontted.com/assets/images/logos/node.svg" alt="logo"/>
                        <h2 className='corsh'>Node</h2>
                        <p>ES6 and Beyond</p>
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
                        <img src="https://lema.frontted.com/assets/images/logos/gitlab.png" alt="logo"/>
                        <h2 className='corsh'>Gitlab</h2>
                        <p>Git Workflows</p>
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
                        <p>Typescript and Beyond</p>
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
                    <div className="botcorses">
                        <div className="l">
                        <label htmlFor="view">States</label>
                    <select name="view" id="view">
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                    </select>
                    </div>
                    <div className="r">100 <span><FaArrowRight/></span></div>
                        </div>
        </div>
        </>
    )
}
export default Cours