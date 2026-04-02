import React from "react";

const LandingPage = (props) => {
  return (
    <div>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 md:p-12 selection:bg-emerald-500/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/5">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              Project Overview
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
            FORGE <span className="text-emerald-500">EMS</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            A high-performance **Employee Management System** designed to
            streamline your workforce operations. Manage tasks, track
            performance, and organize your team with zero database latency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <div className="group bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:bg-emerald-500/[0.02] hover:border-emerald-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-emerald-500 font-black text-xl">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Task Assignment
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Assign real-time tasks to employees and monitor their progress
              through a dedicated dashboard interface.
            </p>
          </div>

          <div className="group bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:bg-cyan-500/[0.02] hover:border-cyan-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-cyan-500 font-black text-xl">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Local Persistence
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Your data stays on your machine. Using Browser LocalStorage, we
              ensure lightning-fast speeds without external API calls.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full"></div>

          <h3 className="text-3xl font-black mb-10 text-center tracking-tight">
            OPERATIONAL GUIDE
          </h3>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">A</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">
                  Secure Authentication
                </h4>
                <p className="text-slate-500 text-sm">
                  Use your unique 'Access Key' and 'Authorized Email' to enter
                  the Forge terminal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">B</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">
                  Admin Controls
                </h4>
                <p className="text-slate-500 text-sm">
                  As an Admin, you can create new employee profiles, assign
                  specific tasks, and review performance logs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">C</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-sm">
                  Real-time Updates
                </h4>
                <p className="text-slate-500 text-sm">
                  Every change you make is instantly saved to your browser
                  session, ensuring zero data loss during your workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                console.log("Button Click Hua!");
                props.setscreen("login"); // 'login' string pass karna zaroori hai
              }}
              className="relative group bg-white hover:bg-emerald-500 text-black hover:text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-2xl shadow-emerald-500/10"
            >
              Initialize System &rarr;
            </button>
          </div>
        </div>

        <p className="text-center mt-12 text-slate-700 text-[10px] uppercase tracking-[0.5em] font-medium">
          FORGE v1.0 // Operational Status: Optimal
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
