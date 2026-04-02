import React from "react";
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#050505] p-10">
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