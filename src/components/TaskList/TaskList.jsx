import React from "react";
import NewTask from "./NewTask";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = (props) => {
  return (
    <div
      id="tasklist"
      className="mt-10 w-full py-5 flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-start md:overflow-x-auto md:flex-nowrap custom-scrollbar transition-colors duration-300"
    >
      {props.data.tasks.map((elem, idx) => {
        if (elem.active)
          return <ActiveTask key={idx} index={idx} data={elem} user={props.data} />;
        if (elem.newTask)
          return <NewTask key={idx} index={idx} data={elem} user={props.data} />;
        if (elem.completed)
          return <CompletedTask key={idx} index={idx} data={elem} user={props.data} />;
        if (elem.failed)
          return <FailedTask key={idx} index={idx} data={elem} user={props.data} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;