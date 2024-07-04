import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useGetConversation() {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);

    
    useEffect(()=> {
        async function getConversation() {
            
            setLoading(true);
            try {
                const res = await fetch("/api/users", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                const data = res.json();

                if (data.error) {
                    throw new Error(data.error);
                } else {
                    setConversation(result);
                }
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
            }
        }

        getConversation();
    }, []);
    

    return {loading, conversation};
}

export default useGetConversation;