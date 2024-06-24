import React from 'react'
import { createContext, useContext, useState } from 'react';

export const VerifiedContext = createContext();

export const useVerifiedContext = () => {
  return useContext(VerifiedContext);
}

export const VerifiedContextProvider = ({children}) => {

  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("currUser")) || null);

  return <VerifiedContext.Provider value={{currUser, setCurrUser}}>

    {children}

  </VerifiedContext.Provider>
}