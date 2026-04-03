import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-app-bg text-text-main px-6 md:px-10 overflow-y-auto font-sans selection:bg-red-500/30 transition-colors duration-300">
      
      {/* Header Area */}
      <Header changeUser={props.changeUser} data={props.data} />

      {/* Stats Grid */}
      <div className="mt-6">
        <TaskListNumbers data={props.data}/>
      </div>

      {/* Task List Area */}
      <div className="mt-10">
        <TaskList data={props.data} />
      </div>

      
    </div>
  );
};

export default EmployeeDashboard;