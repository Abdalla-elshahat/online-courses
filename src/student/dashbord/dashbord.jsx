import "./dashbord.css";
import { TbExclamationMark } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { GiMonkey } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"; 
function Dash() {
     const domain = "http://localhost:4000";
        const token = Cookies.get("token");
    function change(e) {
    let x = document.querySelectorAll("li");
    x.forEach((ee) => {
      ee.classList.remove("active");
    });
    e.target.className = "active";
  }
  const [data,setdata]=useState([])
  const [loading,setloading]=useState([]);
  const [state, setstate] = useState([{ name: "all" },{ name: "purshes" },{ name: "emails" },{ name: "quate" },]);
  const [filteredKey, setFilteredKey] = useState("all");
  const [obj, setobj] = useState([
{ Type: "purshes", title: "malak", date: "4 ago", icon: <GiMonkey /> },
{ Type: "purshes", title: "da", date: "4 ago", icon: <GiMonkey /> },
{ Type: "purshes", title: "maka", date: "4 ago", icon: <GiMonkey /> },
{ Type: "purshes", title: "kla", date: "4 ago", icon: <GiMonkey /> },
{ Type: "emails",title: "mrgfce",date: "4 ago",icon: <FaAcquisitionsIncorporated />,},
{ Type: "quate", title: "marfr", date: "4 ago", icon: <FaDiscord /> },
]);
const [originalData, setOriginalData] = useState([
    { Type: "purshes", title: "malak", date: "4 ago", icon: <GiMonkey /> },
    { Type: "purshes", title: "da", date: "4 ago", icon: <GiMonkey /> },
    { Type: "purshes", title: "maka", date: "4 ago", icon: <GiMonkey /> },
    { Type: "purshes", title: "kla", date: "4 ago", icon: <GiMonkey /> },
    {Type: "emails",title: "mrgfce",date: "4 ago",icon: <FaAcquisitionsIncorporated />},
    { Type: "quate", title: "marfr", date: "4 ago", icon: <FaDiscord /> },
  ]);
  useEffect(() => {
    if (filteredKey === "all") {
      setobj(originalData);
    } else {
      setobj(originalData.filter((it) => it.Type === filteredKey));
    }
    console.log(process.env.Domain)
  }, [filteredKey, originalData]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${domain}/api/courses?limit=4`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setdata(result.data.courses);
      setloading(false);
      // console.log(result.data.courses)
    } catch (error) {
      console.error('Error fetching data:', error);
      setloading(false);
    }
  };
  useEffect(() => {
    if(token){
      fetchData();
    }
  }, []);
  return (
    <>
      <div className="dash">
        <div className="content">
          <div className="studentdashbord">
            <p>Student Dashboard</p>
            <div className="buton">
              <Link to={"/edit"} className="edita">
                {" "}
                <button className="edit">
                  Edit{" "}
                  <span>
                    <MdModeEditOutline />
                  </span>
                </button>{" "}
              </Link>
              <Link to={"/profile"} className="viewa">
                {" "}
                <button className="view">
                  View Profile{" "}
                  <span>
                    <CgProfile />
                  </span>
                </button>{" "}
              </Link>
            </div>
          </div>
          <div className="upgrade">
            <div className="left">
              <TbExclamationMark className="icon" />
              <p className="upgradeh2">
                You have <span>5 days left </span>on our subscription
              </p>
            </div>
            <div className="right">
              <buton className="upgradebtn">Upgrade</buton>
            </div>
          </div>
          <div className="feature">
            <h2 className="featured">Featured Courses</h2>
            <div className="topc">
            {data&&data.map((e) => {
  const currentDate = new Date();
  const targetDate = new Date(e.createdAt); // e.createdAt is the date you want to use
  const timeDiff = currentDate - targetDate; // Difference in milliseconds
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days

  return (
    <div className="card" key={e.id}>
      <div className="bakico b1">
        <img src={`${domain}/uplouds/${e.imgcourse}`} alt="course" width={"50px"} height={"50px"}/>
      </div>
      <h2 className="cardh2"><Link to={`/view/${e._id}`} style={{"color":"black"}}>{e.title}</Link></h2>
      <p className="cardp">{e.description.substring(0,30)+"..."}</p>
      <div className="carbottom">
        <span className="dayleft">{daysLeft} days left</span>
        <span className="pricec">${e.price}</span>
      </div>
    </div>
  );
})}
            </div>
            <div className="bottomc">
              <div className="leftbottomc">
                <div className="lefttopbottomc">
                  <div className="inprogressc">
                    <div className="topprogress">
                      <div className="topprogressl">
                        <h1>In Progress</h1>
                        <p>Recent Courses</p>
                      </div>
                      <div className="topprogressr">
                        <Link to={"/cours"}>
                          <button className="Brows"> Brows All</button>
                        </Link>
                      </div>
                    </div>
                    <div className="progressbottom">
                      <div className="block">
                        <div className="left">
                          <img
                            src="https://lema.frontted.com/assets/images/logos/javascript.svg"
                            alt=""
                            className="js"
                          />
                          <div className="bob">
                            <p>ES6 Foundations</p>
                            <span className="con">
                              <span className="one"></span>
                            </span>
                          </div>
                          <span className="presnt">80%</span>
                        </div>
                        <div className="right">
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <img
                            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=35&h=35"
                            alt=""
                          />
                          <div className="bob">
                            <p>Basics of Social Media</p>
                            <span className="con">
                              <span className="two"></span>
                            </span>
                          </div>
                          <span className="presnt">60%</span>
                        </div>
                        <div className="right">
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <img
                            src="https://lema.frontted.com/assets/images/logos/vuejs.svg"
                            alt=""
                          />
                          <div className="bob">
                            <p>Learn Vue.js Fundamentals</p>
                            <span className="con">
                              <span className="three"></span>
                            </span>
                          </div>
                          <span className="presnt">25%</span>
                        </div>
                        <div className="right">
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <img
                            src="https://lema.frontted.com/assets/images/logos/angular.svg"
                            alt=""
                          />
                          <div className="bob h">
                            <p>Angular in Steps</p>
                            <span className="con h">
                              <span className="four"></span>
                            </span>
                          </div>
                          <span className="presnt">100%</span>
                        </div>
                        <div className="right">
                          <BsThreeDotsVertical />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leftbbottomic">
                  <div className="topprogress">
                    <div className="topprogressl">
                      <h1>My Quiz</h1>
                      <p>Score</p>
                    </div>
                    <div className="topprogressr">
                      <button className="Brows">view All</button>
                    </div>
                  </div>
                  <div className="pbottomprogress">
                    <div className="progressbottom">
                      <div className="block">
                        <div className="left">
                          <span className="calender">
                            <SlCalender />
                          </span>
                          <div className="bob2">
                            <p>Level 1 Htmle</p>
                            <span className="c2">
                              <FaLaptopCode /> Basics of Html
                            </span>
                          </div>
                        </div>
                        <div className="right2">
                          <span className="gr  gr1">Good</span>
                          <span className="n1"> 5.8</span>
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <span className="calender">
                            <SlCalender />
                          </span>
                          <div className="bob2">
                            <p>Level 2 Angular</p>
                            <span className="c2">
                              <FaLaptopCode /> Angular in steps
                            </span>
                          </div>
                        </div>
                        <div className="right2">
                          <span className="gr gr2">Graete</span>
                          <span className="n2"> 9.8</span>
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <span className="calender">
                            <SlCalender />
                          </span>
                          <div className="bob2">
                            <p>Graduation</p>
                            <span className="c2">
                              <FaLaptopCode /> Bootstrap Foundation{" "}
                            </span>
                          </div>
                        </div>
                        <div className="right2">
                          <span className="gr gr3">faild</span>
                          <span className="n3"> 2.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightbottomc">
                <div className="rt">
                  <div className="rtt">
                    <img
                      src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=800&h=250"
                      alt=""
                    />
                  </div>
                  <div className="rtb">
                    <div className="rtbl">
                      <div className="bob2">
                        <p>Social media</p>
                        <span className="c2">
                          <FaLaptopCode />
                          Social medeia
                        </span>
                      </div>
                    </div>
                    <div className="rtbr">
                      <button className="resum">
                        Resum <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rb">
                  <div className="recent">
                    <h3>Resent Activity</h3>
                    <p className="date">
                      <span>13/03/2018</span> to <span>20/03/2018</span>
                    </p>
                  </div>
                  <div className="all">
                    {state.map((ob, index) => {
                      return (
                        <div key={index}>
                          <ul>
                            <li
                              onClick={(e) => {
                                change(e);
                                setFilteredKey(ob.name);
                              }}
                            >
                              {ob.name}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bodyR">
                    {obj.map((e, index) => {
                      return (
                        <div className="blog" key={index}>
                          <div className="left">
                            <div className="monky">{e.icon}</div>
                            <div className="info">
                              <span className="T">
                                <img
                                  src="	https://lema.frontted.com/assets/images/256_rsz_1andy-lee-642320-unsplash.jpg"
                                  alt=""
                                />
                                <p>{e.title}</p>
                              </span>
                              <span className="F">{e.date}</span>
                            </div>
                          </div>
                          <div className="right">
                            {" "}
                            <div className="blogprice">
                              $537 <FaArrowRight className="icos" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <span className="viewall">View ALL(54)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dash;
