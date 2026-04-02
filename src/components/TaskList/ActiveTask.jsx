import React from "react";

const ActiveTask = (props) => {
  return (
    <div className="flex-shrink-0 h-full w-[85vw] md:w-[320px] flex flex-col group">
      {/* Column Header */}
      <div className="mb-6 pb-3 border-b-2 border-blue-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-400">
            Active Roadmap
          </h3>
          <p className="text-[10px] text-slate-600 font-medium mt-1 uppercase">In Progress</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group p-7 h-full flex flex-col justify-between bg-[#111111] border border-white/5 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-blue-500/10 text-blue-400 border-blue-500/20 capitalize">
              {props.data.category}
            </span>
            <span className="text-[10px] text-slate-600 font-mono font-bold tracking-tighter">{props.data.taskDate}</span>
          </div>
          
          <h2 className="capitalize text-lg font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors line-clamp-1">
            {props.data.taskTitle}
          </h2>
          <p className="first-letter:uppercase text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 h-11.5">
            {props.data.taskDescription}
          </p>

          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-lg active:scale-95">
              Mark Done
            </button>
            <button className="flex-1 py-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-lg active:scale-95">
              Mark Failed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;