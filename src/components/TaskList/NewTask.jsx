import React from "react";

const NewTask = (props) => {
  
  // console.log(props.data);
  return (
    <div className="flex-shrink-0 h-full w-[85vw] md:w-[320px] flex flex-col group">
      {/* Column Header */}
      <div className="mb-6 pb-3 border-b-2 border-indigo-500/30 flex justify-between items-end">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400">
            New Requests
          </h3>
          <p className="text-[10px] text-slate-600 font-medium mt-1 uppercase">Incoming</p>
        </div>
        
      </div>

      {/* Vertical Task List - Direct Hardcoded Cards */}
      <div className="flex flex-col gap-5">
        
        {/* Card 1 */}
        <div className="group p-7 h-full flex flex-col justify-between bg-[#111111] border border-white/5 rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500 shadow-2xl">
          <div className="flex justify-between items-start mb-5">
            <span className="text-[10px] uppercase font-black px-3 py-1 rounded-full border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
              {props.data.category}
            </span>
            <span className="text-[10px] text-slate-600 font-mono font-bold tracking-tighter">{props.data.taskDate}</span>
          </div>
          
          <h2 className="capitalize text-lg font-bold text-white mb-3 leading-tight group-hover:text-indigo-400 transition-colors">
            {props.data.taskTitle}
          </h2>
          <p className="first-letter:uppercase text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 h-11.5 overflow-y-auto">
            {props.data.taskDescription}
          </p>

          <button className="w-full py-3 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
            Accept Assignment
          </button>
        </div>

        

      </div>
    </div>
  );
};

export default NewTask;