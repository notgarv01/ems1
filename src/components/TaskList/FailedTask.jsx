import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const FailedTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  const RetryTask = () => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.firstName === props.user.firstName) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx === props.index) {
            return { 
              ...task, 
              active: true, 
              newTask: false, 
              completed: false, 
              failed: false 
            };
          }
          return task;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: (emp.taskCounts.active || 0) + 1,
            failed: (emp.taskCounts.failed || 0) - 1,
          },
        };
      }
      return emp;
    });

    const finalUpdatedData = { ...userData, employees: updatedEmployees };
    setUserData(finalUpdatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="flex-shrink-0 h-full w-[85vw] md:w-[320px] flex flex-col group transition-colors duration-300">
      
      {/* Column Header */}
      <div className="mb-6 pb-3 border-b-2 border-red-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 dark:text-red-400">
            Dropped / Failed
          </h3>
          <p className="text-[10px] text-text-sub font-medium mt-1 uppercase opacity-60">Issues Found</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group p-7 h-full flex flex-col justify-between bg-card-bg border border-border-subtle rounded-[2rem] hover:border-red-500/30 transition-all duration-500 shadow-xl dark:shadow-none">
          
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 capitalize">
              {props.data.category}
            </span>
            <span className="text-[10px] text-text-sub font-mono font-bold tracking-tighter opacity-70">
              {props.data.taskDate}
            </span>
          </div>
          
          <h2 className="capitalize text-lg font-black text-text-main mb-3 leading-tight group-hover:text-red-500 transition-colors line-clamp-1">
            {props.data.taskTitle}
          </h2>
          
          <p className="first-letter:uppercase text-text-sub text-sm leading-relaxed mb-6 line-clamp-3 h-11.5 overflow-y-auto custom-scrollbar">
            {props.data.taskDescription}
          </p>

          <button 
            onClick={RetryTask} 
            className="w-full py-3 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Retry Task ↺
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;