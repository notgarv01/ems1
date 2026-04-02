import React from "react";

const CompletedTask = (props) => {
  return (
    <div className="flex-shrink-0 h-full w-[85vw] md:w-[320px] flex flex-col group">
      {/* Column Header */}
      <div className="mb-6 pb-3 border-b-2 border-emerald-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
            Completed
          </h3>
          <p className="text-[10px] text-slate-600 font-medium mt-1 uppercase">Finished</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group p-7 h-full flex flex-col justify-between bg-[#111111] border border-white/5 rounded-[2rem] opacity-80 hover:opacity-100 transition-all duration-500 shadow-2xl">
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-500/40 border-emerald-500/10 capitalize">
              {props.data.category}
            </span>
            <span className="text-[10px] text-slate-600 font-mono font-bold tracking-tighter">{props.data.taskDate}</span>
          </div>
          
          <h2 className="capitalize text-lg font-bold text-white mb-3 leading-tight line-clamp-1">
            {props.data.taskTitle}
          </h2>
          <p className="first-letter:uppercase text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 h-11.5">
            {props.data.taskDescription}
          </p>

          <div className="w-full py-3 text-center bg-emerald-500/5 text-emerald-500/40 rounded-xl text-[10px] font-black border border-emerald-500/10 tracking-widest uppercase">
            Task Finished ✅
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;