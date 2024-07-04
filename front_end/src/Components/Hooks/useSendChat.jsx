import { useState } from "react";
import useConversation from "../ZustandState/useConversation";
import { useVerifiedContext } from "../Context/VerifiedContext";

function useSendChat() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    async function sendMessage(inputs) {
        setLoading(true);

        try {
            
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: inputs}),
            });
            
            const data = await res.json();
            
            if (data.error) {
                throw new Error(data.error);
            } else {
                if (messages) {
                    setMessages([...messages, data].flat(3));  
                } else {
                    setMessages([data]);
                }
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return {loading, sendMessage}
}

export default useSendChat;