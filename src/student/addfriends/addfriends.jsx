import React, { useState, useEffect, useRef } from "react";
import { FaUserPlus, FaUserTimes, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import "./addfriends.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
function AddFriends() {
  const token = Cookies.get("token");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const audioRef = useRef();
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  // جلب جميع المستخدمين
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${domain}/api/users/non-followers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const updatedUsers = data.map((user) => ({
        ...user,
        followStatus: "none", // الحالة المبدئية (غير متابع)
      }));
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // إرسال طلب متابعة
  const sendFollowRequest = async (followId) => {
    try {
      const response = await fetch(`${domain}/api/users/sendfollow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ follow_id: followId }),
      });

      if (response.ok) {
        // playAudio(); 
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === followId ? { ...user, followStatus: "pending" } : user
          )
        );
      } else {
        console.error("Failed to send follow request");
      }
    } catch (error) {
      console.error("Error sending follow request:", error);
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
                    // playAudio(); 
                    setUsers((prevUsers) =>
                      prevUsers.map((user) =>
                        user._id === followId ? { ...user, followStatus: "none" } : user
                      )
                    );
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
  const removeUserFromList = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="add-friends">
      <h2>Users List</h2>
      {/* <audio ref={audioRef} src="./mixkit-correct-answer-tone-2870.wav" /> */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="users">
        {filteredUsers.map((user) => (
          <div key={user._id} className="user-card">
            <button
              onClick={() => removeUserFromList(user._id)}
              className="remove-from-list-btn"
            >
              <FaTrash />
            </button>
            <div className="user-info">
              <img
               src={`${domain}/uplouds/${user.avatar}`} 
                alt={user.username}
                className="user-avatar"
              />
              <p className="user-name">{user.username} { (user.role==="manger"||user.role==="admin")&&<sup><IoCheckmarkDoneCircle color="green" /></sup>}</p>
              <p className="user-description">
                {user.description
                  ? String(user.description).substring(0, 30) + "..."
                  : "--"}
              </p>
              {user.followStatus === "none" && (
                <button onClick={() => sendFollowRequest(user._id)} className="follow-btn"> <FaUserPlus /> Add</button>
              )}
              {user.followStatus === "pending" && (
                <button onClick={() => removeFollow(user._id)} className="removee-btn"> <FaUserTimes /> Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddFriends;
