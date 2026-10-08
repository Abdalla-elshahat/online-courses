import Cookies from "js-cookie";
import { domain } from "../utels/constents/const";

export const logoutUser = async () => {
    // send the token so the server can revoke it
    const token = Cookies.get("token");
    const response = await fetch(`${domain}/api/users/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    if (!response.ok) {
        throw new Error("Logout failed");
    }
    // clear token on client
    Cookies.remove("token");

    return response.json();
};

export const getUserData = async () => {
    const token = Cookies.get("token");

    const response = await fetch(`${domain}/api/users/alldata`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    return response.json();
};