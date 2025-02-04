import './profileins.css'
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Cookies from "js-cookie"; 
function Profileins(){
       const domain = "http://localhost:4000";
          const token = Cookies.get("token");
    const [userData, setUserData] = useState(null);
      const fetchUserData = async () => {
            if (token) {
              try {
                const response = await fetch(`${domain}/api/users/alldata`, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                  },
                });
                const data = await response.json();
                setUserData(data);
              } catch (error) {
                console.error("Failed to fetch user data:", error);
              }
            }
          };
                useEffect(() => {
                  fetchUserData();
                }, []);
    return(
        <>
         {
            userData && (
                <div className="serice courses">
                <div className="fok">
                    <img src={`${domain}/uplouds/${userData.avatar}`}  alt="" />
                    <div className="in">
                        <h2 className='name'>{userData.username}</h2>
                        <p>{userData.description}</p>
                    </div>
                </div>
                <div className="tops">
                <h2 className="serich profileinsh2">{userData.username}</h2>
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
                    </div>
        </div>
            )
         }  
        </>
    )
}
export default Profileins;