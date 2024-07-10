import {useState, useContext, createContext} from 'react'
import { useVerifiedContext } from './VerifiedContext';
import io from 'socket.io-client';

// This is the USE methods.
export const SocketContext = createContext();
export const useSocketContext = () => {
    return useContext(SocketContext);
}

// This is the Component.
export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState(null);
    const {currUser} = useVerifiedContext();

    useEffect(()=>{
        if (currUser) {
            const socket = io("http://localhost:7000");
            setSocket(socket);

            return () => {return socket.close()}
        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, []);

    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext