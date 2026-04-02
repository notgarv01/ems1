import React from "react";

const FailedTask = (props) => {
  return (
    <div className="flex-shrink-0 h-full w-[85vw] md:w-[320px] flex flex-col group">
      {/* Column Header */}
      <div className="mb-6 pb-3 border-b-2 border-red-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-red-400">
            Dropped / Failed
          </h3>
          <p className="text-[10px] text-slate-600 font-medium mt-1 uppercase">Issues Found</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group p-7 h-full flex flex-col justify-between bg-[#110a0a] border border-red-900/10 rounded-[2rem] hover:border-red-500/30 transition-all duration-500 shadow-2xl">
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-red-500/10 text-red-400 border-red-500/20 capitalize">
              {props.data.category}
            </span>
            <span className="text-[10px] text-slate-600 font-mono font-bold tracking-tighter">{props.data.taskDate}</span>
          </div>
          
          <h2 className="capitalize text-lg font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors line-clamp-1">
            {props.data.taskTitle}
          </h2>
          <p className="first-letter:uppercase text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 h-11.5">
            {props.data.taskDescription}
          </p>

          <button className="w-full py-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
            Retry Task ↺
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;