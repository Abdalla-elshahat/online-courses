import Cookies from "js-cookie"; 
import "./notify.css"
import React, { useState, useEffect } from "react";
function Notifications() {
     const domain = "http://localhost:4000";
        const token = Cookies.get("token");
  const [notifications, setNotifications] = useState([]);
  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${domain}/api/users/received-notifications`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setNotifications(data.requests);
      console.log(data.requests)
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // قبول أو رفض طلب متابعة
  const handleFollowRequest = async (requesterId, action) => {
    try {
      const response = await fetch(`${domain}/api/users/handlefollowrequest`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ requester_id: requesterId, action }),
      });

      if (response.ok) {
        setNotifications((prev) =>
          prev.filter((notif) => notif._id !== requesterId)
        );
        console.log(`Follow request ${action}ed successfully`);
      } else {
        console.error("Failed to handle follow request");
      }
    } catch (error) {
      console.error("Error handling follow request:", error);
    }
  };

  // إزالة متابعة
  const removeFollow = async (followId) => {
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
        console.log("Unfollowed successfully");
        fetchNotifications(); // تحديث الإشعارات بعد الإزالة
      } else {
        console.error("Failed to remove follow");
      }
    } catch (error) {
      console.error("Error removing follow:", error);
    }
  };

  // مسح جميع الإشعارات
  const clearAllNotifications = () => {
    setNotifications([]);
    console.log("All notifications cleared");
  };

  useEffect(() => {
    if(token){
      fetchNotifications();
    }
  }, []);

  return (
    <div className="notifications">
      <div className="top">
        <p className="notf">Notifications</p>
        <p className="clearall" onClick={clearAllNotifications}>
          Clear All
        </p>
      </div>
      <div className="bottom">
        {notifications&&notifications.map((notif) => (
          <div className="blog" key={notif.id}>
            <img src={`${domain}/uplouds/${notif.avatar}`} alt="User Avatar" />
            <div>
              <span className="notfname">
                {notif.username}{" "}
              </span>
              <div className="actions">
                {notif&& (
                  <>
                    <button
                      className="accept-btn"
                      onClick={() => handleFollowRequest(notif._id, "accept")}
                    >
                      Accept
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleFollowRequest(notif._id, "reject")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {!notifications&& <p>No notifications available</p>}
      </div>
    </div>
  );
}

export default Notifications;
