import React from 'react'
import { createContext, useContext, useState } from 'react';

export const CurrUserContext = createContext();

export const useCurrUserContext = () => {
  return useContext(CurrUserContext);
}

export const CurrUserContextProvider = ({children}) => {

  const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("currUser")) || null);

  return <CurrUserContext.Provider value={{currUser, setCurrUser}}>

    {children}

  </CurrUserContext.Provider>
}