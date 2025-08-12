import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  // Handle form submit and add new task
  let addNewTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return; // ignore empty tasks
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newTask.trim(), id: uuidv4(), isDone: false },
    ]);
    setNewTask(""); // Clear the input field after adding the task
  };

  let updateTaskValue = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  let UpperCaseAll = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return { ...task, task: task.task.toUpperCase() };
      });
    });
  };

  let UpperCaseOne = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, task: task.task.toUpperCase() } : task
      )
    );
  };

  let isDoneAll = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((tasks) => {
        return { ...tasks, isDone: true };
      });
    });
  };

  let isDoneOne = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );
    });
  };

  let isDoneStyle = (isDone) => ({
    textDecoration: isDone ? "line-through" : "none",
    color: isDone ? "green" : "white",
  });

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={updateTaskValue}
        />
        <br />
        <button type="submit" disabled={!newTask.trim()}>
          Add Task
        </button>
      </form>
      <br />
      <br />
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span style={isDoneStyle(task.isDone)}>{task.task}</span>
              &nbsp;&nbsp;
              <button onClick={() => deleteTask(task.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={() => UpperCaseOne(task.id)}>
                <i className="fa-solid fa-up-long"></i>
              </button>
              <button onClick={() => isDoneOne(task.id)}>
                <i class="fa-solid fa-check"></i>
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={UpperCaseAll}>UpperCase All</button>
      <button onClick={isDoneAll}>All Done</button>
    </div>
  );
}
