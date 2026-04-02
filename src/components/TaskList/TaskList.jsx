import React from "react";
import NewTask from "./NewTask";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  return (
    <div
      id="tasklist"
      className="mt-10 w-full py-5 
                 /* Mobile: Vertical stack */
                 flex flex-col items-center gap-8 
                 /* Desktop (768px+): Horizontal scroll */
                 md:flex-row md:items-stretch md:justify-start md:overflow-x-auto md:flex-nowrap 
                 custom-scrollbar"
    >
      {props.data.tasks.map((elem, idx) => {
        if (elem.active) return <ActiveTask key={idx} data={elem} />;
        if (elem.newTask) return <NewTask key={idx} data={elem} />;
        if (elem.completed) return <CompletedTask key={idx} data={elem} />;
        if (elem.failed) return <FailedTask key={idx} data={elem} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;