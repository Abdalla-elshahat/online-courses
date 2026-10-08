import './profileins.css'
import { useEffect, useState } from 'react';
import Cookies from "js-cookie"; 
import { domain } from '../../utels/constents/const';
import { imageUrl, onImageError } from "../../utels/image";
import InstructorCourses from './instructorCourses';
function Profileins(){
    const token = Cookies.get("token");
    const [userData, setUserData] = useState(null);
    const fetchUserData = async () => {
            if (token) {
              try {
                const response = await fetch(`${domain}/api/users/alldata`, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                  },
                });
                const data = await response.json();
                setUserData(data);
              } catch (error) {
                console.error("Failed to fetch user data:", error);
              }
            }
          };
                useEffect(() => {
                  fetchUserData();
                }, []);
    return(
        <>
         {
            userData && (
                <div className="serice courses profileins">
                <div className="fok">
                    <img onError={onImageError} src={imageUrl(userData.avatar)}  alt="" />
                    <div className="in">
                        <h2 className='name'>{userData.username}</h2>
                        <p>{userData.description}</p>
                    </div>
                </div>
                <div className="tops">
                <h2 className="serich profileinsh2">{userData.username}</h2>
                    </div>
                <InstructorCourses userId={userData._id} title="My Courses" emptyText="You have not added a course yet." />
        </div>
            )
         }  
        </>
    )
}
export default Profileins;