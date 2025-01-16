import React, { useState } from "react";
import Header from "../Components/Header";
import ToDoList from "../Components/ToDoList";
import { IoAddCircle } from "react-icons/io5";
function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add Todo
  const addTodo = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        task: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Completed
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Todo
  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  return (
    <div className="App h-screen  flex flex-col items-center">
      <Header length={todos.length} />
      <div className="todo-container   p-6 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <div className="flex items-center justify-between ">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              e.key === "Enter" && addTodo();
            }}
          />
          <button
            onClick={addTodo}
            className="ml-4    text-[#51E5FE] rounded-md  bg-[#162B3B] hover:transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <IoAddCircle className="text-4xl" />
          </button>
        </div>
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
