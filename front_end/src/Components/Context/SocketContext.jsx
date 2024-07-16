import {useState, useEffect, useContext, createContext} from 'react'
import { useVerifiedContext } from './VerifiedContext';
import io from 'socket.io-client';

// This is the USE methods.
const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

// This is the Component.
export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(null);
    const {currUser} = useVerifiedContext();

    useEffect(()=>{
        // Io and front connect to back end.
        if (currUser) {
            const socket = io("http://localhost:7000", {
                query: {
                    userId: currUser._id,
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnline(users);
            })

            return () => {return socket.close()}

        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [currUser]);

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}