import { useState, useContext } from "react";
import { useVerifiedContext } from "../Context/VerifiedContext";

function useLogout() {

    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useVerifiedContext();

    async function logOut() {
        
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
            });
            
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

export default useLogout;

