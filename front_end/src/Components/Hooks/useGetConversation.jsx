import { useEffect, useState } from "react";

function useGetConversation() {
    const [loading, setLoading] = useState(false);
    const [Conversation, setConversation] = useState([]);

    useEffect(()=> {
        async function getConversation() {
            setLoading(true);
            try {
                const res = fetch("./api/users");
                const data = (await res).json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setConversation(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
    });

    return {loading, Conversation};
}

export default useGetConversation;