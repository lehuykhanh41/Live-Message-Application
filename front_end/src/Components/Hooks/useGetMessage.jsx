import React, { useState, useEffect } from 'react';
import useConversation from '../ZustandState/useConversation';
import { toast } from 'react-toastify';

function useGetMessage() {
    const [loading, setLoading] = useState(false)
    const {selectedConversation, setMessages} = useConversation();

    async function getMessageBasedOnUser() {

        setLoading(true);
        try {
            const res = await fetch(`/api/message/${selectedConversation._id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json().then((response)=>{return response});

            if (data.error) {
                setMessages(null);
                throw new Error(data.error);
            } else {
                setMessages(data);
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    return {loading, getMessageBasedOnUser};
}

export default useGetMessage;