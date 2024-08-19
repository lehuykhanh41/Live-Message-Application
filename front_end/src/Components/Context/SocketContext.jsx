import {useState, useEffect, useContext, createContext} from 'react'
import { useCurrUserContext } from './CurrUserContext';
import io from 'socket.io-client';

const SocketContext = createContext();

// Inititate the useContext function.
export const useSocketContext = () => {
    return useContext(SocketContext);
};

// Create the Context Provider.
export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(null); // See which users are online.

    const {currUser} = useCurrUserContext(); 

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