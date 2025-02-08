import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { domain } from "./utels/constents/const";
function GoogleSignUp() {
  const nav = useNavigate();
  const [name, setname] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    try {
      const response = await fetch(`${domain}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Handle successful signup
        console.log("Signup successful:", data);
        Cookies.set("token", data.token, { expires: 7 }); // Store token securely
        nav("/");
      } else {
        const errorData = await response.json();
        console.error("Error during signup:", errorData);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  useEffect(() => {
    // Dynamically load the Google Identity Services script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;

    script.onload = () => {
      // Initialize the Google Sign-Up process
      window.google.accounts.id.initialize({
        client_id:
          "237774589324-lsb5f7vcap7nj851kr3f2109d3c4je5a.apps.googleusercontent.com", // Replace with your client ID
        context: "signup",
        ux_mode: "popup",
        callback: signupCallback,
        auto_prompt: false,
      });

      // Render the Google Sign-Up button
      window.google.accounts.id.renderButton(
        document.getElementById("signup-button"), // The element to render the button into
        {
          type: "standard",
          shape: "rectangular",
          theme: "filled_blue",
          text: "signup_with",
          size: "large",
          logo_alignment: "left",
        }
      );
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const signupCallback = async (response) => {
    const decoded = await jwtDecode(response.credential);
    console.log(decoded);
    setname(decoded.name);
    setEmail(decoded.email);
    setPassword("temporarypassword");
    await handleSignup();
    Cookies.set("token", response.credential, { expires: 7 });
    console.log("Token saved in cookies:", Cookies.get("token")); // عرض التوكين المخزن
  };

  return (
    <div>
      <div id="signup-button"></div>
    </div>
  );
}

export default GoogleSignUp;
