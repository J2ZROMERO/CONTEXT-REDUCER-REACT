import { useContext, useEffect } from "react";
import { TaskContext } from "../context/task/TaskContext";
import { Link } from "react-router-dom";
const TaskList = () => {
  const { state, deleteTask, doneTask } = useContext(TaskContext);

  return (
    <>
      <Link to={"/add"}>
        <button>Add new element</button>
      </Link>
      <ul>
        {state.tasks.length ? (
          state.tasks.map((e) => (
            <li key={e.id}>
              <button onClick={() => doneTask(e.id)}>
                {e.done ? "done" : "undone"}
              </button>
              {e.title}
              <Link to={`add/${e.id}`}>
                <button>Edit</button>
              </Link>

              <button onClick={() => deleteTask(e.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
    </>
  );
};

export default TaskList;
