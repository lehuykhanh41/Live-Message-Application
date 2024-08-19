import { useState } from "react";
import useConversation from "../ZustandState/useConversation";
import { useCurrUserContext } from "../Context/CurrUserContext";

function useSendChat() {
    const [loading, setLoading] = useState(false);
    const {currentTab, messages, setMessages, selectedConversation} = useConversation();

    async function sendMessage(inputs) {
        setLoading(true);

        try {
            
            let res, data = null;

            if (currentTab == 0) {
                res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({message: inputs}),
                });
                
                data = await res.json();
            } else if (currentTab == 1) {
                res = await fetch(`/api/message/sendGroup/${selectedConversation._id}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({message: inputs}),
                });
            }
            
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