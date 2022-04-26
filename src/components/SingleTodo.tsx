import { useState } from "react";
import { Todo } from "../Interface/inputInterface";
import { MdOutlineDone } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";
type Props = {
  todo: Todo;
  index: number;
  // todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, setTodos, index }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState<string>("");

  const deleteTodo = (id: string) =>
    setTodos((prevState) => prevState.filter((x) => x.id !== id));

  const handleDone = (id: string) =>
    setTodos((prevSate) =>
      prevSate.map((x) => {
        if (x.id === id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      })
    );

  const handleSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos((prevState) =>
      prevState.map((x) => {
        if (x.id === id) {
          return { ...x, todo: editTodo };
        }
        return x;
      })
    );
    setIsEdit(false);
  };

  return (
    <Draggable draggableId={todo?.id} index={index}>
      {(provided, snapshot) => (
        <article
          className={`flex cursor-pointer items-center justify-between gap-2 rounded-md bg-sky-400 p-2 text-white hover:scale-100 ${
            snapshot.isDragging && "bg-blue-600"
          } `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <form onSubmit={(e) => handleSubmit(e, todo.id)}>
            {isEdit ? (
              <input
                value={editTodo}
                className="rounded-md py-2 px-3 text-gray-500 outline-none"
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : todo.isDone ? (
              <s>{todo.todo}</s>
            ) : (
              <div>{todo.todo}</div>
            )}
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (!isEdit && !todo.isDone) {
                  setIsEdit(!isEdit);
                }
              }}
            >
              <FiEdit
                className="text-white transition-all 
          hover:text-gray-50"
              />
            </button>
            <button onClick={() => handleDone(todo.id)}>
              <MdOutlineDone className="text-green-600 transition-all hover:text-green-700" />
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
              <BsFillTrashFill className="text-red-500 transition-all hover:text-red-600" />
            </button>
          </div>
        </article>
      )}
    </Draggable>
  );
}

export default SingleTodo;
