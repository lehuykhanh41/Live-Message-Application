import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import useConversation from '../ZustandState/useConversation';

function useListenerMessage() {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{
    socket.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage].flat(3));
    });

    return () => socket.off("newMessages");
  }, [socket, messages])
}

export default useListenerMessage;