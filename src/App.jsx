import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import LandingPage from "./components/auth/LandingPage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const [userData] = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  // Screen state: Default "landing" rahega fresh load par
  const [screen, setscreen] = useState("landing");

  // Check if user is already logged in (Session persistence)
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setuser(parsedData.role);
      setloggedInUserData(parsedData.data);
    }
  }, []);

  // Login Logic
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = userData.admin[0];
      setuser("admin");
      setloggedInUserData(adminData);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData })
      );
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  // Logout Logic: Yahan setscreen("login") kardo taaki landing page na dikhe
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Session clear karo
    setuser(null);                           // Dashboard band karo
    setscreen("login");                      // Seedha login screen par bhejo
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* 1. Dashboards (Jab user login ho) */}
      {user === "employee" && (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}
      
      {user === "admin" && (
        <AdminDashboard changeUser={handleLogout} data={loggedInUserData} />
      )}

      {/* 2. Auth Flow (Jab user logged out ho) */}
      {!user && (
        <>
          {screen === "landing" ? (
            <LandingPage setscreen={setscreen} />
          ) : (
            <Login handleLogin={handleLogin} setscreen={setscreen} />
          )}
        </>
      )}
    </div>
  );
};

export default App;