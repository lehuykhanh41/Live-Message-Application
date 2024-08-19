import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useGetConversation() {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);
    const [singleConversation, setSingleConversation] = useState([]);
    const [groupConversation, setGroupConversation] = useState([]);

    useEffect(()=> {
        
        // Get All users.
        async function getAllUsers() {
            
            setLoading(true);
            try {
                const res = await fetch("/api/users", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                } else {
                    setConversation(data);
                }
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
            }
        }
        getAllUsers();

        async function getSingleConversation() {
            
            setLoading(true);
            try {
                const res = await fetch("/api/conversation/single", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                } else {
                    setSingleConversation(data);
                }
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
            }
        }
        getSingleConversation();

        async function getGroupConversation() {
            
            setLoading(true);
            try {
                const res = await fetch("/api/conversation/group", {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                } else {
                    setGroupConversation(data);
                }
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
            }
        }
        getGroupConversation();
    }, []);
    

    return {loading, conversation, singleConversation, groupConversation};
}

export default useGetConversation;