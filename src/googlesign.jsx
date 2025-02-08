import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { domain } from "./utels/constents/const";
function GoogleSignIn() {
   const nav=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("temporarypassword");
    const handlelogin = async (e) => {
      e.preventDefault(); // Prevent page reload
      try {
        const response = await fetch(`${domain}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json(); // Handle successful signup
          console.log("login successful:", data);
        } else {
          const errorData = await response.json();
          console.error("Error during login:", errorData);
          nav("/")
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
      // Initialize the Google Sign-In process
      window.google.accounts.id.initialize({
        client_id:
          "237774589324-lsb5f7vcap7nj851kr3f2109d3c4je5a.apps.googleusercontent.com", // Replace with your client ID
        context: "signin",
        ux_mode: "popup",
        callback: loginCallback,
        auto_prompt: false,
      });

      // Render the Google Sign-In button
      window.google.accounts.id.renderButton(
        document.getElementById("signin-button"), // The element to render the button into
        {
          type: "standard",
          shape: "rectangular",
          theme: "filled_blue",
          text: "signin_with",
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

  const loginCallback = async(response) => {
    const decoded = await jwtDecode(response.credential);
    console.log(decoded);
    setEmail(decoded.email);
    setPassword("temporarypassword");
    handlelogin({
      preventDefault: () => {}, // Mock preventDefault for the form
    });
  };
//   const handleLogout = () => {
//  window.google.accounts.id.disableAutoSelect();
//   };
  return (
    <div>
      <div id="signin-button"></div>
    </div>
  );
}

export default GoogleSignIn;
