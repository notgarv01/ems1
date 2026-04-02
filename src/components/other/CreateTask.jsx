import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  // Form States
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  // UI States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("Select Employee");

  const submitHandle = (e) => {
    e.preventDefault();

    if (!assignTo) {
      alert("Please select an employee first!");
      return;
    }

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const data = { ...userData };

    data.employees.forEach(function (elem) {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });

    setuserData(data);
    localStorage.setItem("employees", JSON.stringify(data.employees));

    // Reset Form
    settaskTitle("");
    settaskDate("");
    settaskDescription("");
    setcategory("");
    setassignTo("");
    setSelectedEmployee("Select Employee");
    
    alert("Task Deployed Successfully!");
  };

  return (
    <div className="py-8 md:py-0 bg-[#050505] min-h-screen relative overflow-x-hidden">
      {/* Background Decorative Glow */}
      <div className="fixed top-0 right-0 w-64 h-64 md:w-125 md:h-125 bg-emerald-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse"></div>

      {/* Main Grid Wrapper: px-2 for Mobile Width Stretch */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 px-3 sm:px-6 md:px-8">
        
        {/* LEFT SECTION: Heading & Info */}
        <div className="lg:col-span-1 space-y-6 px-2 md:px-0">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
            Forge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              New Task
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
            Fill in the details to deploy a new objective to your team.
          </p>
        </div>

        {/* RIGHT SECTION: The Form */}
        <div className="lg:col-span-2 relative">
          {/* Form Container: p-5 for Mobile and p-12 for Desktop */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl relative">
            <form onSubmit={submitHandle} className="space-y-6 md:space-y-8">
              
              {/* Objective & Deadline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Objective Name</label>
                  <input
                    value={taskTitle}
                    onChange={(e) => settaskTitle(e.target.value)}
                    required
                    type="text"
                    placeholder="e.g. System Migration"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 px-5 text-white placeholder-slate-600 outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Deadline</label>
                  <input
                    value={taskDate}
                    onChange={(e) => settaskDate(e.target.value)}
                    required
                    type="date"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 px-5 text-white scheme-dark outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Briefing Textarea */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Briefing</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => settaskDescription(e.target.value)}
                  required
                  rows="4"
                  placeholder="What needs to be achieved?"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white placeholder-slate-600 outline-none focus:border-emerald-500/50 focus:bg-white/8 resize-none transition-all"
                ></textarea>
              </div>

              {/* Assignee & Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Custom Assignee Dropdown */}
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Assignee</label>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 px-5 text-slate-300 flex items-center justify-between cursor-pointer hover:border-emerald-500/30 transition-all active:scale-[0.99]"
                  >
                    <span className="truncate">{selectedEmployee}</span>
                    <svg className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Dropdown List - Floating with z-index */}
                  {isOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-[#151515] border border-white/10 rounded-2xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar p-2">
                      {userData.employees.map((elem, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setassignTo(elem.firstName);
                            setSelectedEmployee(elem.firstName);
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-500/10 rounded-xl cursor-pointer transition-all mb-1"
                        >
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                            {elem.firstName.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-white">{elem.firstName}</span>
                            <span className="text-[9px] text-slate-500 uppercase">Available</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category Input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Category</label>
                  <input
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                    required
                    type="text"
                    placeholder="Design, Tech..."
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 px-5 text-white placeholder-slate-600 outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-white text-black font-black py-4 md:py-5 rounded-2xl transition-all active:scale-[0.98] mt-4"
              >
                <div className="absolute inset-0 w-full h-full bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors uppercase tracking-widest text-sm">
                  Deploy Task
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-slate-600 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-medium opacity-50 px-4">
        FORGE SYSTEM // AUTH: ADMIN_LEVEL_01
      </p>
    </div>
  );
};

export default CreateTask;