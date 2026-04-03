import React, { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";
import { useSmartDropdown } from "../../pages/Dropdown";

const CreateTask = (props) => {
  const { theme } = useContext(ThemeContext);
  const [userData, setuserData] = useContext(AuthContext);

  // Form States
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("Select Employee");

  // UI States
  const [showToast, setShowToast] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const calendarRef = useRef(null);

  const {
    isOpen,
    dropdownDirection,
    dropdownRef,
    toggleDropdown,
    closeDropdown,
  } = useSmartDropdown(200);

  // Click outside calendar to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-hide toast logic
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Calendar Logic
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (day) => {
    const year = currentMonth.getFullYear();
    const month = String(currentMonth.getMonth() + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    settaskDate(`${year}-${month}-${d}`);
    setShowCalendar(false);
  };

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + offset)));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!assignTo) {
      alert("Please select an employee first!");
      return;
    }
    if (!taskDate) {
      alert("Please select a deadline!");
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
    data.employees.forEach((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
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
    setShowToast(true);
  };

  return (
    <div className="py-8 md:py-10 bg-app-bg min-h-screen relative overflow-x-hidden transition-colors duration-300 font-sans">
      
      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${showToast ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"}`}>
        <div className="bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400">
          <div className="bg-white/20 p-1 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <span className="font-bold uppercase tracking-widest text-[11px]">Task Deployed Successfully!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 px-3 sm:px-6 md:px-8">
        
        {/* --- LEFT SECTION --- */}
        <div className="lg:col-span-1 space-y-6">
          <button className="flex items-center gap-2 text-sm font-medium text-text-sub hover:text-emerald-500 transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main tracking-tighter leading-tight uppercase">
            Forge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 text-6xl">New Task</span>
          </h1>
        </div>

        {/* --- RIGHT SECTION: FORM --- */}
        <div className="lg:col-span-2">
          <div className="bg-card-bg border border-border-subtle rounded-[2.5rem] p-6 md:p-12 shadow-xl relative transition-all">
            <form onSubmit={submitHandle} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Objective Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1 text-xs">Objective Name</label>
                  <input
                    value={taskTitle}
                    onChange={(e) => settaskTitle(e.target.value)}
                    required
                    type="text"
                    placeholder="e.g. System Migration"
                    className="w-full bg-surface dark:bg-white/5 border border-border-subtle rounded-2xl py-4 px-6 text-text-main outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                {/* --- CUSTOM CALENDAR INPUT --- */}
                <div className="space-y-2 relative" ref={calendarRef}>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1 flex items-center gap-1 text-xs">
                    Deadline <span className="text-emerald-500 animate-pulse">•</span>
                  </label>
                  <div 
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full bg-surface dark:bg-white/5 border border-border-subtle rounded-2xl py-4 px-6 text-text-main cursor-pointer flex items-center justify-between hover:border-emerald-500/50 transition-all"
                  >
                    <span className={taskDate ? "text-text-main font-bold" : "text-text-sub text-sm"}>
                      {taskDate || "Select Target Date"}
                    </span>
                    <span className="text-emerald-500">📅</span>
                  </div>

                  {/* Calendar Dropdown UI */}
                  {showCalendar && (
                    <div className="absolute z-50 top-full mt-3 w-80 bg-card-bg border border-border-subtle rounded-[2rem] shadow-2xl p-6 backdrop-blur-xl animate-in fade-in zoom-in duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <button type="button" onClick={() => changeMonth(-1)} className="p-2 hover:bg-emerald-500/10 rounded-full text-emerald-500">←</button>
                        <span className="font-black uppercase tracking-widest text-xs text-text-main">
                          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                        </span>
                        <button type="button" onClick={() => changeMonth(1)} className="p-2 hover:bg-emerald-500/10 rounded-full text-emerald-500">→</button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-[10px] font-black text-text-sub opacity-40 uppercase">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {Array(firstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth())).fill(null).map((_, i) => <div key={i}></div>)}
                        {Array.from({ length: daysInMonth(currentMonth.getFullYear(), currentMonth.getMonth()) }, (_, i) => i + 1).map(day => {
                          const isSelected = taskDate === `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                          return (
                            <div key={day} onClick={() => handleDateClick(day)} className={`py-2 text-sm font-bold rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'hover:bg-emerald-500/10 text-text-main'}`}>
                              {day}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Briefing */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1 text-xs">Briefing</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => settaskDescription(e.target.value)}
                  required rows="4"
                  placeholder="What needs to be achieved?"
                  className="w-full bg-surface dark:bg-white/5 border border-border-subtle rounded-2xl py-4 px-6 text-text-main outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Assignee */}
                <div className="space-y-2 relative" ref={dropdownRef}>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1 text-xs">Assignee</label>
                  <div onClick={toggleDropdown} className="w-full bg-surface dark:bg-white/5 border border-border-subtle rounded-2xl py-4 px-6 text-text-main flex items-center justify-between cursor-pointer hover:border-emerald-500/50 transition-all">
                    <span className="truncate font-medium">{selectedEmployee}</span>
                    <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
                  </div>
                  {isOpen && (
                    <div className={`absolute z-40 w-full bg-card-bg border border-border-subtle rounded-2xl shadow-2xl max-h-48 overflow-y-auto p-2 custom-scrollbar ${dropdownDirection === "up" ? "bottom-full mb-2" : "top-full mt-2"}`}>
                      {userData.employees.map((elem, idx) => (
                        <div key={idx} onClick={() => { setassignTo(elem.firstName); setSelectedEmployee(elem.firstName); closeDropdown(); }} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-500/10 rounded-xl cursor-pointer transition-all">
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 font-bold text-xs">{elem.firstName.charAt(0)}</div>
                          <span className="text-sm font-semibold text-text-main">{elem.firstName}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-sub ml-1 text-xs">Category</label>
                  <input
                    value={category}
                    onChange={(e) => setcategory(e.target.value)}
                    required type="text" placeholder="Design, Tech..."
                    className="w-full bg-surface dark:bg-white/5 border border-border-subtle rounded-2xl py-4 px-6 text-text-main outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* --- DEPLOY BUTTON (LOGIN STYLE) --- */}
              <button
                type="submit"
                className={`w-full relative group overflow-hidden py-5 rounded-2xl transition-all active:scale-[0.98] mt-4 font-black shadow-lg ${theme === "light" ? "bg-slate-200 text-slate-800 border border-slate-300" : "bg-white text-black"}`}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 uppercase tracking-[0.4em] text-xs group-hover:text-white transition-colors duration-200">Deploy Objective</span>
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;