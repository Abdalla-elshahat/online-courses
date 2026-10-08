import React, { useState, useEffect } from "react";
import { FaUserPlus, FaUserTimes, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import "./addfriends.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Cookies from "js-cookie"; 
import { domain } from "../../utels/constents/const";
import { imageUrl, onImageError } from "../../utels/image";
function AddFriends() {
  const token = Cookies.get("token");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState(null); // user whose follow button is waiting for the server

  const setFollowStatus = (userId, followStatus) =>
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user._id === userId ? { ...user, followStatus } : user))
    );

  const notify = (icon, title) =>
    Swal.fire({ toast: true, position: "top-end", icon, title, showConfirmButton: false, timer: 2500 });

  // جلب جميع المستخدمين (the server says whether a request is already pending)
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${domain}/api/users/non-followers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to load users");
      const data = await response.json();
      setUsers(data.map((user) => ({ ...user, followStatus: user.followStatus || "none" })));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // POST /sendfollow or PATCH /removefollow; resolves to { ok, message }
  const callFollowApi = async (path, method, followId) => {
    const response = await fetch(`${domain}/api/users/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ follow_id: followId }),
    });
    let data = {};
    try {
      data = await response.json();
    } catch {}
    return { ok: response.ok, message: data.message || "" };
  };

  // إرسال طلب متابعة
  const sendFollowRequest = async (followId) => {
    setBusyId(followId);
    try {
      const { ok, message } = await callFollowApi("sendfollow", "POST", followId);
      if (ok || /already sent/i.test(message)) {
        setFollowStatus(followId, "pending");
        notify("success", "تم إرسال طلب المتابعة");
      } else if (/already following/i.test(message)) {
        removeUserFromList(followId); // already a follower: does not belong in this list
        notify("info", "أنت تتابع هذا المستخدم بالفعل");
      } else {
        notify("error", message || "فشل إرسال طلب المتابعة");
      }
    } catch (error) {
      console.error("Error sending follow request:", error);
      notify("error", "خطأ في الاتصال بالسيرفر");
    } finally {
      setBusyId(null);
    }
  };

  // سحب طلب المتابعة بعد التأكيد
  const removeFollow = async (followId) => {
    const result = await Swal.fire({
      title: "هل تريد سحب الدعوه",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "سحب",
      cancelButtonText: "الغاء",
      confirmButtonColor: "#ef4444",
      reverseButtons: true,
    });
    if (!result.isConfirmed) return;

    setBusyId(followId);
    try {
      const { ok, message } = await callFollowApi("removefollow", "PATCH", followId);
      if (ok || /not following|no follow relationship/i.test(message)) {
        setFollowStatus(followId, "none");
        notify("success", "تم سحب طلب المتابعة");
      } else {
        notify("error", message || "فشل سحب طلب المتابعة");
      }
    } catch (error) {
      console.error("Error removing follow:", error);
      notify("error", "خطأ في الاتصال بالسيرفر");
    } finally {
      setBusyId(null);
    }
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
               onError={onImageError} src={imageUrl(user.avatar)} 
                alt={user.username}
                className="user-avatar"
              />
              <p className="user-name">{user.username} { (user.role==="manger"||user.role==="admin")&&<sup><IoCheckmarkDoneCircle color="green" /></sup>}</p>
              <p className="user-description">
                {user.description
                  ? String(user.description).substring(0, 30) + "..."
                  : "--"}
              </p>
              {user.followStatus === "pending" ? (
                <button onClick={() => removeFollow(user._id)} className="removee-btn" disabled={busyId === user._id}>
                  <FaUserTimes /> {busyId === user._id ? "..." : "Cancel request"}
                </button>
              ) : (
                <button onClick={() => sendFollowRequest(user._id)} className="follow-btn" disabled={busyId === user._id}>
                  <FaUserPlus /> {busyId === user._id ? "..." : "Follow"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddFriends;
