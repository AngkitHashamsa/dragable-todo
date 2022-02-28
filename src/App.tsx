import { useState } from "react";
import InputFiled from "./components/InputFiled";

import { Todo } from "./Interface/inputInterface";
import Todos from "./components/Todos";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // console.log("submit");
    if (isEdit) {
      // console.log("isEdit");
      let newData = todos.map((item) => {
        if (item.id === selectedId) {
          return { ...item, todo: editValue, isDone: check ? true : false };
        }
        return item;
      });
      // console.log(newData);

      setTodos(newData);
      setIsEdit(false);
    }
    if (!isEdit) {
      let newTodo: Todo = {
        id: new Date().getTime().toString(),
        isDone: false,
        todo,
      };
      setTodos([...todos, newTodo]);
    }

    setTodo("");
  };

  const handleUpdate = (id: string): void => {
    // console.log(id);
    let singleTodo = todos.find((item) => item.id === id);
    // console.log(singleTodo);
    if (singleTodo) {
      setEditValue(singleTodo.todo);
    }
    setIsEdit(true);
    setSelectedId(id);
  };

  const handleDelete = (id: string): void => {
    let newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  const cancelEdit = (): void => {
    setIsEdit(false);
    setSelectedId("");
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
        <section className="mx-auto my-4 mt-3 w-[95%] max-w-xl ">
          <h4 className="">Todos</h4>
          <Todos
            todos={todos}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            isEdit={isEdit}
            editValue={editValue}
            setEditValue={setEditValue}
            handleSubmit={handleSubmit}
            cancelEdit={cancelEdit}
            check={check}
            setCheck={setCheck}
            selectedId={selectedId}
          />
        </section>
      </main>
    </div>
  );
};

export default App;
