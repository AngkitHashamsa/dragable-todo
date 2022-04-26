import { useState } from "react";
import InputFiled from "./components/InputFiled";
import { Todo } from "./Interface/inputInterface";
import Todolist from "./components/Todolist";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);
  console.log(completedTodo);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    let newTodo: Todo = {
      id: new Date().getTime().toString(),
      isDone: false,
      todo,
    };
    setTodos([...todos, newTodo]);

    setTodo("");
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    let add,
      active = todos,
      complete = completedTodo;

    if (source.droppableId === "Todo") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "Todo") {
      active.splice(source.index, 0, add);
    } else {
      complete.splice(source.index, 0, add);
    }
    console.log(active, "active");
    console.log(complete, "complete");

    // setTodos(active);
    // setCompletedTodo(complete);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
          <div className="mx-auto mt-8 w-11/12 max-w-5xl ">
            <Todolist
              todos={todos}
              setTodos={setTodos}
              completedTodo={completedTodo}
              setCompletedTodo={setCompletedTodo}
            />
          </div>
        </main>
      </div>
    </DragDropContext>
  );
};

export default App;
