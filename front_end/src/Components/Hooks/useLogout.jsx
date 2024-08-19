import { useState, useContext } from "react";
import { useCurrUserContext } from "../Context/CurrUserContext";
import useLanding from "../ZustandState/useLanding";

function useLogout() {

    const [loading, setLoading] = useState(false);
    const {setCurrUser} = useCurrUserContext();
    const {setLanding} = useLanding(); // Is on the landing page or not?

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
            setLanding(true);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    
    return {loading, logOut};
}

export default useLogout;

