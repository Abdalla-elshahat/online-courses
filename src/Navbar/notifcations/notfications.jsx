import "./notify.css";
import { useEffect, useState } from "react";
import { domain } from "../../utels/constents/const";

import {
  getNotifications,
  handleFollowRequestApi,
} from "../../api/notificationApi";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const { data } = await getNotifications();

      setNotifications(data.requests || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFollowRequest = async (requesterId, action) => {
    try {
      await handleFollowRequestApi(requesterId, action);

      setNotifications((prev) =>
        prev.filter((item) => item._id !== requesterId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="notifications">
      <div className="top">
        <h3>Notifications</h3>

        {notifications.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => setNotifications([])}
          >
            Clear All
          </button>
        )}
      </div>

      <div className="bottom">
        {loading ? (
          <p>Loading...</p>
        ) : notifications.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          notifications.map((notif) => (
            <div className="notification-card" key={notif._id}>
              <img
                src={`${domain}/uplouds/${notif.avatar}`}
                alt={notif.username}
              />

              <div className="notification-content">
                <h4>{notif.username}</h4>

                <div className="actions">
                  <button
                    className="accept-btn"
                    onClick={() =>
                      handleFollowRequest(notif._id, "accept")
                    }
                  >
                    Accept
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      handleFollowRequest(notif._id, "reject")
                    }
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;