import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="mt- mb-8 bg-[#050505] px-4 md:px-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 px-2 gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
            Team Velocity
          </h2>
          <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            Real-time performance tracking
          </p>
        </div>

        <div className="flex items-center gap-3 w-fit px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-1">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
            System Live
          </span>
        </div>
      </div>

      {/* Main Container with Horizontal Scroll Support */}
      <div className="bg-[#080808] border border-white/5 rounded-[2rem] shadow-2xl overflow-hidden">
        
        {/* Wrapper for Horizontal Scroll */}
        <div className="overflow-x-auto custom-scrollbar">
          
          {/* Minimum width ensures columns don't collapse on mobile */}
          <div className="min-w-[700px]">
            
            {/* Table Header */}
            <div className="grid grid-cols-5 py-6 px-10 bg-white/[0.02] border-b border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <div className="col-span-1">Team Member</div>
              <div className="text-center">New</div>
              <div className="text-center">Active</div>
              <div className="text-center">Completed</div>
              <div className="text-center">Failed</div>
            </div>

            {/* Table Body with Vertical Scroll */}
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
              {userData?.employees.map((elem, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-5 items-center py-4 md:py-5 px-10 border-b border-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  {/* Member Name */}
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-xs font-black text-white group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all">
                      {elem.firstName.charAt(0)}
                    </div>
                    <span className="font-bold text-sm md:text-base text-slate-200 group-hover:text-white transition-colors truncate">
                      {elem.firstName}
                    </span>
                  </div>

                  {/* Task Counts */}
                  <div className="flex justify-center">
                    <span className="bg-blue-500/5 border border-blue-500/10 px-4 py-1 rounded-lg text-blue-400 font-mono text-xs md:text-sm font-bold">
                      {elem.taskCounts.newTask}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <span className="bg-yellow-500/5 border border-yellow-500/10 px-4 py-1 rounded-lg text-yellow-500 font-mono text-xs md:text-sm font-bold">
                      {elem.taskCounts.active}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <span className="bg-emerald-500/5 border border-emerald-500/10 px-4 py-1 rounded-lg text-emerald-400 font-mono text-xs md:text-sm font-bold">
                      {elem.taskCounts.completed}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <span className="bg-red-500/5 border border-red-500/10 px-4 py-1 rounded-lg text-red-500 font-mono text-xs md:text-sm font-bold">
                      {elem.taskCounts.failed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-slate-600 text-[10px] uppercase tracking-[0.4em] font-medium">
        FORGE SYSTEM // AUTH: ADMIN_LEVEL_01
      </p>
    </div>
  );
};

export default AllTask;