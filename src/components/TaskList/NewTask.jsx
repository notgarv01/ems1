import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext);

  const AcceptTask = () => {
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
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask - 1,
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
      <div className="mb-6 pb-3 border-b-2 border-indigo-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
            New Requests
          </h3>
          <p className="text-[10px] text-text-sub font-medium mt-1 uppercase opacity-60">Incoming</p>
        </div>
      </div>

      {/* Task Card */}
      <div className="flex flex-col gap-5">
        <div className="group p-7 h-full flex flex-col justify-between bg-card-bg border border-border-subtle rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500 shadow-xl dark:shadow-none">
          
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20">
              {props.data.category}
            </span>
            <span className="text-[10px] text-text-sub font-mono font-bold tracking-tighter opacity-70">
              {props.data.taskDate}
            </span>
          </div>
          
          <h2 className="capitalize text-lg font-black text-text-main mb-3 leading-tight group-hover:text-indigo-500 transition-colors">
            {props.data.taskTitle}
          </h2>
          
          <p className="first-letter:uppercase text-text-sub text-sm leading-relaxed mb-6 line-clamp-3 h-11.5 overflow-y-auto custom-scrollbar">
            {props.data.taskDescription}
          </p>

          {/* Button: Adaptive Color */}
          <button 
            onClick={AcceptTask} 
            className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Accept Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;