import { domain } from "../utels/constents/const";

const BASE_URL = domain;

export const getNotifications = async () => {
    const res = await fetch(`${BASE_URL}/api/users/received-notifications`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch notifications");
    }

    return res.json();
};

export const handleFollowRequestApi = async (requesterId, action) => {
    const res = await fetch(`${BASE_URL}/api/users/handlefollowrequest`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            requester_id: requesterId,
            action,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to handle follow request");
    }

    return res.json();
};

export const removeFollowApi = async (followId) => {
    const res = await fetch(`${BASE_URL}/api/users/removefollow`, {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            follow_id: followId,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to remove follow");
    }

    return res.json();
};