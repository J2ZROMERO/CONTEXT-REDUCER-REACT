import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskState from "./context/task/TaskState";
import TaskForm from "./components/TaskForm";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<TaskList />} />
            <Route path="add" element={<TaskForm />} />
            <Route path="add/:id" element={<TaskForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TaskState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
