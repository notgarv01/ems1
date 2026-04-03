import React from "react";

const TaskListNumbers = (props) => {
  return (
    <div>
      <div className="mt-5 mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* New Task Card */}
          <div className="relative overflow-hidden p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-blue-400/5 backdrop-blur-sm group">
            <div className="absolute top-0 left-0 w-full h-px bg-white/10 dark:block hidden"></div>
            {/* Light: text-slate-950 (Almost Black) | Dark: text-white */}
            <h2 className="text-4xl font-black text-slate-950 dark:text-white group-hover:scale-110 transition-transform duration-300 inline-block">
              {props.data.taskCounts.newTask}
            </h2>
            <h3 className="text-blue-900 dark:text-text-main font-bold mt-1 uppercase tracking-[0.2em] text-[10px]">
              New Task
            </h3>
          </div>

          {/* Completed Card */}
          <div className="relative overflow-hidden p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600/20 to-emerald-400/5 backdrop-blur-sm group">
            <div className="absolute top-0 left-0 w-full h-px bg-white/10 dark:block hidden"></div>
            <h2 className="text-4xl font-black text-slate-950 dark:text-white group-hover:scale-110 transition-transform duration-300 inline-block">
              {props.data.taskCounts.completed}
            </h2>
            <h3 className="text-emerald-900 dark:text-text-main font-bold mt-1 uppercase tracking-[0.2em] text-[10px]">
              Completed
            </h3>
          </div>

          {/* Active Card */}
          <div className="relative overflow-hidden p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-600/20 to-amber-400/5 backdrop-blur-sm group">
            <div className="absolute top-0 left-0 w-full h-px bg-white/10 dark:block hidden"></div>
            <h2 className="text-4xl font-black text-slate-950 dark:text-white group-hover:scale-110 transition-transform duration-300 inline-block">
              {props.data.taskCounts.active}
            </h2>
            <h3 className="text-amber-900 dark:text-text-main font-bold mt-1 uppercase tracking-[0.2em] text-[10px]">
              Active
            </h3>
          </div>

          {/* Failed Card */}
          <div className="relative overflow-hidden p-6 rounded-2xl border border-red-500/30 bg-linear-to-br from-red-600/20 to-red-400/5 backdrop-blur group">
            <div className="absolute top-0 left-0 w-full h-px bg-white/10 dark:block hidden"></div>
            <h2 className="text-4xl font-black text-slate-950 dark:text-white group-hover:scale-110 transition-transform duration-300 inline-block">
              {props.data.taskCounts.failed}
            </h2>
            <h3 className="text-red-900 dark:text-text-main font-bold mt-1 uppercase tracking-[0.2em] text-[10px]">
              Failed
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TaskListNumbers;