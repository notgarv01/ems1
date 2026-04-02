import React, { useState } from "react";

const Login = (props) => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showPassword, setshowPassword] = useState(false)


  const submitHandler = (e)=>{
    // console.log("hello");
    e.preventDefault()
    props.handleLogin(email,password)
    
  }
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse delay-700"></div>

      <div className="w-full max-w-md mx-4 relative z-10">
        
        {/* --- BACK BUTTON --- */}
        <button 
          onClick={() => props.setscreen("landing")}
          className="absolute -top-12 left-0 flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors group"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Return to terminal</span>
        </button>

        <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
              FORGE<span className="text-emerald-500">.</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Secure Access Portal</p>
          </div>

          <form className="space-y-6" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Authorized Email</label>
              <input value={email} onChange={(e)=>{
                setemail(e.target.value)
              }} required type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white placeholder-slate-600 outline-none focus:border-emerald-500/50 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Access Key</label>
              <input value={password} onChange={(e)=>{
                setpassword(e.target.value)
              }} required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white placeholder-slate-600 outline-none focus:border-emerald-500/50 transition-all" />
            </div>

            <button
              type="submit"
              className="w-full relative group overflow-hidden bg-white text-black font-black py-4 rounded-2xl transition-all active:scale-[0.98] mt-4"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors uppercase tracking-widest text-sm">Initialize Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;