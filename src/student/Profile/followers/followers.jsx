import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./followers.css";
import { BsThreeDots } from "react-icons/bs";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; 
function FollowersList  ()  {
    const domain = "http://localhost:4000";
  const token = Cookies.get("token");
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState("");
  const [activeMenu, setActiveMenu] = useState(null); // القائمة النشطة
   const [search, setSearch] = useState("");
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // تبديل القائمة
  };
  const fetchFollowers = async () => {
    try {
      const response = await fetch(`${domain}/api/users/followers`, {
        method: "GET",
        headers: {
          Authorization:`Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch followers");
      }

      const data = await response.json();
      setFollowers(data);
      console.log(data)
    } catch (err) {
      setError(err.message);
    }
  };
  const removeFollow = (followId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
  
    swalWithBootstrapButtons.fire({
        title: "هل تريد سحب الدعوه",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "سحب",
        cancelButtonText: "الغاء",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire({
              title: "تم السحب!",
              text: "تم سحب المتابعة بنجاح.",
              icon: "success",
            })
            .then(() => {
              // Call the API to remove follow
              const removeFollowAPI = async (followId) => {
                try {
                  const response = await fetch(`${domain}/api/users/removefollow`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ follow_id: followId }),
                  });
  
                  if (response.ok) {
                    setFollowers((prevUsers) =>
                      prevUsers.map((user) =>
                        user._id === followId ? { ...user, followStatus: "none" } : user
                      )
                    );
                    setActiveMenu(null)
                  } else {
                    console.error("Failed to remove follow");
                  }
                } catch (error) {
                  console.error("Error removing follow:", error);
                }
              };
  
              removeFollowAPI(followId);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "تم الإلغاء",
            text: "لم يتم سحب المتابعة.",
            icon: "error",
          });
        }
      });
  };
  const filteredUsers = followers.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    fetchFollowers();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
     <div className="followers-list">
      <h2>Followers</h2>
      <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar" />
      {followers.length === 0 ? (
        <p>No followers found</p>
      ) : (
        filteredUsers.map((follower,index) => (
          <div className="follower-card" key={follower._id}>
            <div className="info">
              <span>
              <img src={`${domain}/uplouds/${follower.avatar}`} alt="" className="avatar"  />
              </span>
          <span className="info2">
         <Link to={`/profilefollow/${follower._id}`}><h3>{follower.username} { (follower.role==="manger"||follower.role==="admin")&&<sup><IoCheckmarkDoneCircle color="green" /></sup>}</h3></Link>
          <p>{follower.jop}</p>
          <p>{(follower.description).substring(0,30)+"..."}</p>
          </span>
            </div>
           
                 <span className="colonicons" onClick={() => toggleMenu(index)}>
                 <BsThreeDots/>
                        </span>
                        {activeMenu === index && (
                          <div className="menu">
                            
                            <p onClick={() => removeFollow(follower._id)} className="delete"><MdDelete/> UnFollow</p>
                          
                          </div>
                        )}
          </div>
        ))
      )}
    </div>
  );
};

export default FollowersList;