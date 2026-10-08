import Cookies from "js-cookie";
import { domain } from "../utels/constents/const";

const BASE_URL = domain;

// the API authenticates with the Bearer token, not cookies
const send = async (path, method, body) => {
    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    let data = {};
    try {
        data = await res.json();
    } catch {}
    if (!res.ok) {
        throw new Error(data.message || `Request failed (${res.status})`);
    }
    return data;
};

// pending follow requests sent to the current user: [{ _id, username, avatar }]
export const getNotifications = async () =>
    (await send("/api/users/received-notifications", "GET")).requests || [];

// action: "accept" | "reject"
export const handleFollowRequestApi = (requesterId, action) =>
    send("/api/users/handlefollowrequest", "PATCH", { requester_id: requesterId, action });

export const removeFollowApi = (followId) =>
    send("/api/users/removefollow", "PATCH", { follow_id: followId });
