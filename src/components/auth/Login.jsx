import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext"; // Path check kar lein

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  // Theme Context extract karein
  const { theme, toggleTheme } = useContext(ThemeContext);

  const submitHandler = (e) => {
    e.preventDefault();
    props.handleLogin(email, password);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-app-bg overflow-hidden transition-colors duration-500">
      
      {/* --- THEME TOGGLE BUTTON --- */}
      <button 
        onClick={toggleTheme}
        className="absolute top-6 right-6 z-50 p-3 rounded-2xl bg-card-bg border border-border-subtle shadow-lg hover:scale-110 active:scale-95 transition-all"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Glow effects - Color opacity adjust ki hai taaki light mode mein ganda na lage */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] rounded-full animate-pulse delay-700"></div>

      <div className="w-full max-w-md mx-4 relative z-10">
        
        {/* --- BACK BUTTON --- */}
        <button 
          onClick={() => props.setscreen("landing")}
          className="absolute -top-12 left-0 flex items-center gap-2 text-text-sub hover:text-emerald-500 transition-colors group"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Return to terminal</span>
        </button>

        {/* --- LOGIN CARD --- */}
        <div className="bg-card-bg border border-border-subtle rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all duration-500">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-text-main tracking-tighter mb-2">
              FORGE<span className="text-emerald-500">.</span>
            </h1>
            <p className="text-text-sub text-sm font-medium uppercase tracking-widest">Secure Access Portal</p>
          </div>

          <form className="space-y-6" onSubmit={submitHandler}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1">Authorized Email</label>
              <input 
                value={email} 
                onChange={(e) => setemail(e.target.value)} 
                required 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-surface border border-border-subtle rounded-2xl py-4 px-5 text-text-main placeholder-text-sub outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1">Access Key</label>
              <input 
                value={password} 
                onChange={(e) => setpassword(e.target.value)} 
                required 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-surface border border-border-subtle rounded-2xl py-4 px-5 text-text-main placeholder-text-sub outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all" 
              />
            </div>

            <button
              type="submit"
              className={`w-full relative group overflow-hidden font-black py-4 rounded-2xl transition-all active:scale-[0.98] mt-4
                ${theme === 'light' 
                  ? 'bg-slate-200 text-slate-800 border border-slate-300' 
                  : 'bg-white text-black'
                }`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors uppercase tracking-widest text-sm">Initialize Login</span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer info */}
      <p className="absolute bottom-8 text-center w-full text-text-sub text-[9px] uppercase tracking-[0.4em] opacity-80">
        FORGE ENCRYPTION // AES-256 BIT
      </p>
    </div>
  );
};

export default Login;