import { useState, useContext } from "react";
import { useVerifiedContext } from "../Context/VerifiedContext";

const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useVerifiedContext();

    async function logOut() {
        
        setLoading(true)
        try {
            const res = await fatch("http://localhost:7000/api/auth/logout", {
                method: "POST",
                header: {"Content-Type": "application/json"},
            })
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("currUser");
            setCurrUser(null);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }
    
    return {loading, logOut};
}

