import React from "react";
import ToDoItem from "../Components/ToDoItem";

function ToDoList({ todos, deleteTodo, toggleCompleted, editTodo }) {
  return (
    <div className="max-w-4xl shadow-custom mx-auto mt-6  p-4 rounded-lg ">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Your To-Do List
      </h2>
      <div className="space-y-4 ">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              editTodo={editTodo}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
