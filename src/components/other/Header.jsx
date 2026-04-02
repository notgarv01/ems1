import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };

  return (
    <header className="px-5 md:px-10 py-6 md:py-8 w-full">
      {/* Yahan 'min-[600px]:flex-row' use kiya hai.
          Matlab 600px se upar horizontal rahega, 
          aur usse niche aate hi automatic 'flex-col' ho jayega.
      */}
      <div className="flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center justify-between gap-4 min-[600px]:gap-0">
        
        {/* LEFT SECTION: User Greeting */}
        <div className="space-y-1">
          <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            WORKSPACE SYSTEM
          </p>
          <h1 className="text-2xl min-[400px]:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white flex items-center gap-2 md:gap-3">
            Hello,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {props.data?.firstName || "User"}
            </span>{" "}
            <span className="inline-block animate-bounce text-xl md:text-4xl">👋</span>
          </h1>
        </div>

        {/* RIGHT SECTION: Log Out Button */}
        <button 
          onClick={logOutUser}
          className="group relative flex items-center gap-3 bg-[#1c1c1c] hover:bg-red-600/10 border border-white/5 hover:border-red-500/40 px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 active:scale-95 
                     /* Mobile par left align, 600px+ par auto */
                     self-start min-[600px]:self-auto"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
            Log Out
          </span>
          
          {/* Status Indicator */}
          <div className="relative flex h-2 w-2">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40"></div>
            <div className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
          </div>
        </button>
      </div>

      {/* Decorative Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-6 md:mt-8"></div>
    </header>
  );
};

export default Header;