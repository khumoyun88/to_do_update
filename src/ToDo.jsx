import "./style.css";
import { useState } from "react";

const init = [
  {
    id: 1,
    title: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    done: true,
  },
  {
    id: 3,
    title: "Complete homework",
    done: false,
  },
  {
    id: 4,
    title: "Read a book",
    done: true,
  },
  {
    id: 5,
    title: "Exercise",
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const toggleDoneTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setText("");
  };

  const doneTodos = todos.filter((todo) => todo.done);

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button  style={{
          fontWeight:"bold",
          color:"#000"
          
        }} disabled={text === ""} onClick={addNewTodo}>
          +
        </button>
      </div>
      <div>
        <h1>Tasks to do - {todos.length > 0 ? todos.length : "Empty"}</h1>
        <ul>
          {todos
            .filter((t) => !t.done)
            .map((t) => (
              <li key={t.id}>
                <span>{t.title}</span>
                <div>
                  <img
                    src="./src/assets/tickBtn.svg"
                    alt="tickButton"
                    onClick={() => toggleDoneTodo(t.id)}
                  />
                  <img
                    src="./src/assets/deleteBtn.svg"
                    alt="delButton"
                    onClick={() => deleteTodo(t.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div>

        <h1>Completed Tasks: </h1>
        <ul>
          { doneTodos.map((t) => (
              <li  key={t.id}>
                <span style={{
                  color:"#228b22",
                  textDecorationLine:"line-through"
                  }}>{t.title}</span>
                <button style={{}} onClick={() => toggleDoneTodo(t.id)}>Undo</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
