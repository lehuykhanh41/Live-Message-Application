import React, { useState, useEffect } from 'react';
import useConversation from '../ZustandState/useConversation';
import { toast } from 'react-toastify';
import useGetConversation from './useGetConversation';

function useGetMessage() {
    const [loading, setLoading] = useState(false)
    const {selectedConversation, setMessages} = useConversation();
    const {singleConversation} = useGetConversation();

    async function getMessageBasedOnUser() {

        setLoading(true);
        try {
            let privateConversation = null;
            // If the selected conversation is a private conversation
            if (selectedConversation.username) {
                privateConversation = singleConversation.find((item)=>{return item.participants.includes(selectedConversation._id)});
            }

            let data = null;

            if (privateConversation) {
                const res = await fetch(`/api/message/${privateConversation._id}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });

                data = await res.json().then((response)=>{return response});
            } else {
                const res = await fetch(`/api/message/${selectedConversation._id}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                });
                data = await res.json().then((response)=>{return response});
            }

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