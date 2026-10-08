import { useState } from "react";
import "./updatepass.css";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
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
    
    const strength = passwordStrength(newpass);
    const mismatch = confirmpass.length > 0 && newpass !== confirmpass;

    return (
        <div className="updatepass">
            <ToastContainer />
            <form className="up-card" onSubmit={Updatpass}>
                <div className="up-icon"><FaLock /></div>
                <h2>Update your password</h2>
                <p className="up-sub">Enter your current password, then choose a new one (at least 8 characters).</p>

                <PasswordField
                    id="opass"
                    label="Current password"
                    value={oldpass}
                    onChange={setoldpass}
                    show={showoldPassword}
                    toggle={() => setShowoldPassword(!showoldPassword)}
                    autoComplete="current-password"
                />
                <PasswordField
                    id="npass"
                    label="New password"
                    value={newpass}
                    onChange={setnewpass}
                    show={shownewPassword}
                    toggle={() => setShownewPassword(!shownewPassword)}
                    autoComplete="new-password"
                />
                {newpass && (
                    <div className={`up-strength s${strength.score}`}>
                        <div className="bars"><span /><span /><span /><span /></div>
                        <small>{strength.label}</small>
                    </div>
                )}
                <PasswordField
                    id="copass"
                    label="Confirm new password"
                    value={confirmpass}
                    onChange={setconfirmpass}
                    show={showconfirmPassword}
                    toggle={() => setShowconfirmPassword(!showconfirmPassword)}
                    autoComplete="new-password"
                    invalid={mismatch}
                />
                {mismatch && <small className="up-error">Passwords do not match.</small>}

                <button type="submit" className="up-btn">Update password</button>
            </form>
        </div>
    );
}

function PasswordField({ id, label, value, onChange, show, toggle, autoComplete, invalid }) {
    return (
        <div className="up-field">
            <label htmlFor={id}>{label}</label>
            <div className={`up-input${invalid ? " invalid" : ""}`}>
                <input
                    type={show ? "text" : "password"}
                    id={id}
                    placeholder="••••••••"
                    minLength={8}
                    maxLength={72}
                    value={value}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button type="button" className="eye" onClick={toggle} aria-label={show ? "Hide password" : "Show password"}>
                    {show ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
        </div>
    );
}

function passwordStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return { score, label: ["Too weak", "Weak", "Fair", "Good", "Strong"][score] };
}

export default Updatpass;
