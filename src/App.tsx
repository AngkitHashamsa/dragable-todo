import { useState } from "react";
import InputFiled from "./components/InputFiled";
import { Todo } from "./Interface/inputInterface";
import Todos from "./components/Todos";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("submit");
    let newTodo: Todo = {
      id: new Date().getTime().toString(),
      isDone: false,
      todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  return (
    <div className="text-gray-600">
      <h4 className="mt-8 text-center text-6xl tracking-widest text-white">
        Taskify
      </h4>
      <main>
        <section className="mx-auto w-[95%] max-w-lg ">
          <InputFiled
            handleSubmit={handleSubmit}
            todo={todo}
            setTodo={setTodo}
          />
        </section>
        <section className="mx-auto w-[95%] max-w-xl ">
          <Todos todos={todos} />
        </section>
      </main>
    </div>
  );
};

export default App;
