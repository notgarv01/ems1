import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../localStorage/localStorage'

export const AuthContext = createContext()
const AuthProvider = (props) => {
  const [userData, setuserData] = useState(null)
  useEffect(() => {
    // localStorage.clear() 
    setLocalStorage()
    const {employees,admin}=getLocalStorage()
    setuserData({employees,admin})
    
    
    
  }, [])
  
  // console.log(userData);
  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider