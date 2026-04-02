import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // console.log(props.data);
  
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-slate-200 px-6 md:px-10 overflw-y-hidden font-sans selection:bg-red-500/30">
      {/* Header Area */}
      <Header changeUser={props.changeUser} data={props.data} />

      {/* Stats Grid - Refined with subtle gradients and inner borders */}
      <TaskListNumbers data={props.data}/>

      {/* Task List - Clean Vertical Stack */}
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
