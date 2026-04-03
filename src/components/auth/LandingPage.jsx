import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LandingPage = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-app-bg text-text-main font-sans transition-colors duration-500 selection:bg-emerald-500/30 relative overflow-hidden">
      
      {/* THEME TOGGLE */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-card-bg border border-border-subtle shadow-lg hover:scale-110 active:scale-95 transition-all"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="relative z-10 p-6 md:p-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/5">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              V1.0 Live Terminal
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic text-text-main uppercase">
            FORGE <span className="text-emerald-500">EMS</span>
          </h1>
          <p className="text-text-sub text-lg leading-relaxed max-w-2xl mx-auto">
            A robust **Employee Management System** built with React. 
            Assign tasks, track real-time progress, and manage your workforce with a seamless dashboard experience.
          </p>
          
          {/* LOCAL STORAGE NOTE */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest">
              Note: Saara data aapke LocalStorage mein secure hai.
            </p>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <div className="group bg-card-bg border border-border-subtle p-8 rounded-[2.5rem] hover:bg-emerald-500/[0.02] hover:border-emerald-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-emerald-500 font-black text-xl">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-text-main">
              Role-Based Access
            </h3>
            <p className="text-text-sub leading-relaxed">
              Admin aur Employee ke liye alag-alag dashboards. Admin tasks assign kar sakta hai aur Employee unhe update kar sakta hai.
            </p>
          </div>

          <div className="group bg-card-bg border border-border-subtle p-8 rounded-[2.5rem] hover:bg-cyan-500/[0.02] hover:border-cyan-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-cyan-500 font-black text-xl">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-text-main">
              Task Lifecycle
            </h3>
            <p className="text-text-sub leading-relaxed">
              Tasks ko 'Accept', 'Complete', ya 'Failed' mark karne ki suvidha. Har badlav instantly update aur save hota hai.
            </p>
          </div>
        </div>

        {/* SYSTEM CAPABILITIES */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-card-bg to-app-bg border border-border-subtle rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-xl">
          <h3 className="text-3xl font-black mb-10 text-center tracking-tight text-text-main">
            SYSTEM CAPABILITIES
          </h3>

          <div className="space-y-8 mb-12">
            {/* Capability 1: Persistence */}
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1 uppercase tracking-wider text-sm text-emerald-600 dark:text-emerald-400">
                  Data Persistence & Smart Reset
                </h4>
                <p className="text-text-sub text-sm">
                  Active session ke dauran aapka data safe rehta hai. Jab tak aap logged in hain, refresh karne par data nahi jayega, lekin Logout karne ke baad refresh karne par system auto-reset hokar fresh data load karega.
                </p>
              </div>
            </div>

            {/* Capability 2: Admin Control */}
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1 uppercase tracking-wider text-sm text-emerald-600 dark:text-emerald-400">
                  Admin Control Panel
                </h4>
                <p className="text-text-sub text-sm">
                  Admin dashboard se naye tasks create karein aur har employee ka task count ( `New`, `Active`, `Completed`, `Failed`) monitor karein.
                </p>
              </div>
            </div>

            {/* Capability 3: Credentials (Naya Section) */}
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-500 text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main mb-1 uppercase tracking-wider text-sm text-emerald-600 dark:text-emerald-400">
                  Pre-Configured Credentials
                </h4>
                <p className="text-text-sub text-sm">
                  System testing ke liye default IDs: <br/>
                  <span className="font-mono text-xs opacity-80">Admin: admin@me.com (Pass: 123)</span> <br/>
                  <span className="font-mono text-xs opacity-80">Employee: e@e.com (Pass: 123)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => props.setscreen("login")}
              className={`relative group px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-2xl
                ${theme === 'light' 
                  ? 'bg-slate-900 text-white hover:bg-emerald-600 shadow-slate-200' 
                  : 'bg-white text-black hover:bg-emerald-500 shadow-emerald-500/10 hover:text-white'
                }`}
            >
              Access Terminal &rarr;
            </button>
          </div>
        </div>

        <p className="text-center mt-12 text-text-main text-[10px] uppercase tracking-[0.5em] font-black">
          FORGE v1.0 // Local Storage Mode: Active
        </p>
      </div>
    </div>
  );
};

export default LandingPage;