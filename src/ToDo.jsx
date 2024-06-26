
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
  // const [done, setDone] = useState("")

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => {
      // 2
      return t.id != id;
    });

    setTodos(newTodos);
  };

  // const doneToDo = (id) => {
  //   const doneList = done.filter((d) => {
  //     // 2
  //     return d.id != id;
  //   });

  //   setDone(doneList);
  // }

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1></h1>

      <div>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <button disabled={text == ""} onClick={addNewTodo}>
          +
        </button>
      </div>

      <div>
        <h1>Tasks to do - {todos.length > 0 ? todos.length : "Empty"}</h1>


        <ul>
          {todos.map((t) => {

            return (
              <li key={t.id}>
                <span>{t.title}</span>
               <div>
                {/* <img src="./src/assets/tickBtn.svg" alt="tickBUtton" onClick={() => doneToDo(t.id)} /> */}
                <img src="./src/assets/deleteBtn.svg" alt="delBUtton" onClick={() => deleteTodo(t.id)} />
               </div>
              </li>
            );

          })}
        </ul>

        {/* <ul>
          {todos.map((t) => {

            return (
              <li key={t.id}>
                <span>{t.title}</span>
              <div>
                <img src="./src/assets/deleteBtn.svg" alt="delBUtton" onClick={() => deleteTodo(t.id)} />
              </div>
              </li>
            );

          })}
        </ul> */}
      </div>
    </div>
  );
}
