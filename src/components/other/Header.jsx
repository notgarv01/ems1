import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };

  return (
    <header className="px-5 md:px-10 py-6 md:py-8 w-full transition-colors duration-300">
      <div className="flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4 min-[600px]:gap-0">
        
        {/* LEFT SECTION: User Greeting */}
        <div className="space-y-1">
          <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            WORKSPACE SYSTEM
          </p>
          <h1 className="text-2xl min-[400px]:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-text-main flex items-center gap-2 md:gap-3">
            Hello,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 dark:from-red-500 dark:to-orange-500">
              {props.data?.firstName || "User"}
            </span>{" "}
            <span className="inline-block animate-bounce text-xl md:text-4xl">👋</span>
          </h1>
        </div>

        {/* RIGHT SECTION: Buttons Group */}
        <div className="flex items-center gap-3 self-start min-[600px]:self-auto">
          
          {/* THEME TOGGLE BUTTON: Subtle Border and Soft Background */}
          <button 
  onClick={toggleTheme}
  className="p-2.5 md:p-3 rounded-full bg-card-bg border border-border-subtle hover:border-indigo-500/40 transition-all duration-300 shadow-sm active:scale-90"
  title="Toggle Theme"
>
  {theme === 'dark' ? "☀️" : "🌙"}
</button>

          {/* LOG OUT BUTTON: Professional Contrast */}
          <button 
            onClick={logOutUser}
            className="group relative flex items-center gap-3 bg-white dark:bg-card-bg hover:bg-red-50 dark:hover:bg-red-900/10 border border-border-subtle hover:border-red-500/40 px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-text-main">
              Log Out
            </span>
            
            {/* Status Indicator: Red Ping */}
            <div className="relative flex h-2 w-2">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40"></div>
              <div className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Line: Uses the border-subtle color */}
      <div className="w-full h-[1px] bg-gradient-to-r from-border-subtle via-border-subtle/50 to-transparent mt-6 md:mt-8"></div>
    </header>
  );
};

export default Header;