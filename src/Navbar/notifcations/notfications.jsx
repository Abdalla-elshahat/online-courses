import "./notify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imageUrl, onImageError } from "../../utels/image";

// follow requests sent to the current user; the Navbar loads them (and keeps the bell badge in sync)
function Notifications({ requests, loading, error, onAction }) {
  const [busyId, setBusyId] = useState(null);
  const [actionError, setActionError] = useState("");

  const handleFollowRequest = async (requesterId, action) => {
    setBusyId(requesterId);
    setActionError("");
    try {
      await onAction(requesterId, action);
    } catch (err) {
      setActionError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="notifications">
      <div className="top">
        <h3>Notifications</h3>
        {requests.length > 0 && <span className="notif-count">{requests.length} new</span>}
      </div>

      <div className="bottom">
        {actionError && <p className="notif-error">{actionError}</p>}
        {loading && requests.length === 0 ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="notif-error">{error}</p>
        ) : requests.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          requests.map((notif) => (
            <div className="notification-card" key={notif._id}>
              <img
                onError={onImageError} src={imageUrl(notif.avatar)}
                alt={notif.username}
              />

              <div className="notification-content">
                <h4>
                  <Link to={`/profilefollow/${notif._id}`}>{notif.username}</Link>
                </h4>
                <p className="notif-text">wants to follow you</p>

                <div className="actions">
                  <button
                    className="accept-btn"
                    disabled={busyId === notif._id}
                    onClick={() => handleFollowRequest(notif._id, "accept")}
                  >
                    Accept
                  </button>

                  <button
                    className="reject-btn"
                    disabled={busyId === notif._id}
                    onClick={() => handleFollowRequest(notif._id, "reject")}
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
