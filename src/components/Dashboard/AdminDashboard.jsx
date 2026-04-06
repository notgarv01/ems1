import React from "react";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    /* 1. bg-app-bg: Uses the dynamic variable from index.css
       2. text-text-main: Ensures text switches between Slate 900 and White
       3. transition-colors: Smooth fade effect for the theme switch
    */
    <div className="min-h-screen w-full bg-app-bg text-text-main px-3 transition-colors duration-300">
      
      {/* Navigation & User Info */}
      <Header changeUser={props.changeUser} data={props.data} />

      <main className="mt-7 flex flex-col gap-8">
        {/* Form to add new tasks */}
        <CreateTask />

        {/* List of all existing tasks */}
        <AllTask />
      </main>
    </div>
  );
};

export default AdminDashboard;