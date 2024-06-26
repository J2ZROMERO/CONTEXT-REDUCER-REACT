import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/task/TaskContext";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const { state, addTask, updateTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: "", description: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const { id } = useParams(); // Initialize useParams
  console.log(id);

  useEffect(() => {
    if (id) {
      const taskFound = state.tasks.find((task) => task.id === parseInt(id));
      setTask(taskFound);
    }
  }, []);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateTask(task);
    } else {
      addTask(task);
      navigate("/"); // Navigate to the specified path
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        placeholder="Add a task"
        value={task.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />
      <button> {id ? "Editing" : "Creating"} </button>
    </form>
  );
};

export default TaskForm;
