import { useState } from "react";
import "../Edit/edit.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { domain } from "../../utels/constents/const";
function Updatpass() {
    const token = Cookies.get("token");
    const nav = useNavigate();
    const [oldpass, setoldpass] = useState("");
    const [newpass, setnewpass] = useState("");
    const [confirmpass, setconfirmpass] = useState("");
    const [showoldPassword, setShowoldPassword] = useState(false);
    const [shownewPassword, setShownewPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const Updatpass = async (e) => {
        e.preventDefault();
        if (!oldpass || !newpass || !confirmpass) {
            toast.error("All password fields are required.", {
                icon: <FaExclamationCircle color="red" />,
            });
            return;
        }
        if (newpass !== confirmpass) {
            toast.error("New password and confirm password do not match.", {
                icon: <FaExclamationCircle color="red" />,
            });
            return;
        }
        try {
            const response = await fetch(`${domain}/api/users/update_pass`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    old_pass: oldpass,
                    new_pass: newpass,
                    confirm_pass: confirmpass,
                }),
            });
            if (response.ok) {
                toast.success("Password updated successfully.", {
                    icon: <FaCheckCircle color="green" />,
                });
                setTimeout(()=>{
                    nav("/login")
                },1000)
               
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Password update failed.", {
                    icon: <FaExclamationCircle color="red" />,
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.", {
                icon: <FaExclamationCircle color="red" />,
            });
            console.error("Error during password update:", error);
        }
    };
    
    return (
        <>
            <ToastContainer />
            <div className="edit">
                <div className="basicinfo">
                    <form onSubmit={Updatpass}>
                        <div className="left">
                            <h2 className="pin">Update Your Password</h2>
                            <p>Change your password.</p>
                        </div>
                        <div className="right">
                            <div className="f f2">
                                <div className="blok">
                                    <label htmlFor="opass">OLD PASSWORD</label>
                                    <span className="pass">
                                        <input
                                            type={showoldPassword ? "text" : "password"}
                                            id="opass"
                                            placeholder="OLD PASSWORD"
                                            value={oldpass}
                                            onChange={(e) => setoldpass(e.target.value)}
                                        />
                                        <span
                                            className="eye"
                                            onClick={() => setShowoldPassword(!showoldPassword)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {showoldPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </span>
                                </div>
                                <div className="blok">
                                    <label htmlFor="npass">NEW PASSWORD</label>
                                    <span className="pass">
                                        <input
                                            type={shownewPassword ? "text" : "password"}
                                            id="npass"
                                            placeholder="NEW PASSWORD"
                                            minLength={8}
                                            maxLength={10}
                                            value={newpass}
                                            onChange={(e) => setnewpass(e.target.value)}
                                        />
                                        <span
                                            className="eye"
                                            onClick={() => setShownewPassword(!shownewPassword)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {shownewPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </span>
                                </div>
                                <div className="blok">
                                    <label htmlFor="copass">CONFIRM PASSWORD</label>
                                    <span className="pass">
                                        <input
                                            type={showconfirmPassword ? "text" : "password"}
                                            id="copass"
                                            placeholder="CONFIRM PASSWORD"
                                            minLength={8}
                                            maxLength={10}
                                            value={confirmpass}
                                            onChange={(e) => setconfirmpass(e.target.value)}
                                        />
                                        <span
                                            className="eye"
                                            onClick={() =>
                                                setShowconfirmPassword(!showconfirmPassword)
                                            }
                                            style={{ cursor: "pointer" }}
                                        >
                                            {showconfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </span>
                                </div>
                                <div className="blok">
                                    <input
                                        type="submit"
                                        value={"Update Pass only"}
                                        className="Updatpass"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Updatpass;
