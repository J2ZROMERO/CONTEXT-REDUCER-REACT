import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReducer";
import { useReducer } from "react";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      done: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      done: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      done: false,
    },
  ],
};

const TaskState = (props) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: state.tasks.length + 1, done: false },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: task,
    });
  };

  const doneTask = (id) => {
    dispatch({
      type: "DONE_TASK",
      payload: id,
    });
  };

  return (
    <TaskContext.Provider
      value={{ state, addTask, deleteTask, updateTask, doneTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
