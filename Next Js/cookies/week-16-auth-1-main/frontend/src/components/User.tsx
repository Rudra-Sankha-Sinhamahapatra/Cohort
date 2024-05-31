import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

// Define the user data interface
interface UserData {
    userId: string; // Adjust the type based on your actual data
    // Add other fields here if needed
}

export const User = () => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/user`, {
            withCredentials: true,
        })
            .then(res => {
                setUserData(res.data);
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, []);

    return <div>
        You're id is {userData?.userId}
        <br /><br />
        <button onClick={() => {
            axios.post(`${BACKEND_URL}/logout`, {}, {
                withCredentials: true,
            }).then(() => {
                setUserData(null); // Clear user data on logout
            }).catch(err => {
                console.error("Error during logout:", err);
            });
        }}>Logout</button>
    </div>
}
