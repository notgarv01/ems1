import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../localStorage/localStorage'

export const AuthContext = createContext()

const AuthProvider = (props) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    // 1. Check karo ki kya koi user pehle se logged in hai?
    const loggedInUser = localStorage.getItem('loggedInUser');

    // 2. AGAR Logout ho chuka hai (loggedInUser nahi mil raha), 
    // toh Refresh karte hi puraana data saaf karke naya set karo.
    if (!loggedInUser) {
      localStorage.clear(); 
      setLocalStorage();
      // console.log("Logout detected: System Resetting...");
    }

    // 3. Ab data load karo
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
    
  }, []); // Refresh par ye check hamesha chalega

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;