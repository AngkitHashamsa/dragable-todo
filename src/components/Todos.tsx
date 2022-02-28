// import React from 'react'

import { Todo } from "../Interface/inputInterface";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
interface props {
  todos: Todo[];
  handleDelete: (id: string) => void;
  handleUpdate: (id: string) => void;
  isEdit: boolean;
  editValue: string;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  cancelEdit: () => void;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  selectedId: string;
}
const Todos: React.FC<props> = ({
  todos,
  handleDelete,
  handleUpdate,
  isEdit,
  editValue,
  setEditValue,
  handleSubmit,
  cancelEdit,
  check,
  setCheck,
  selectedId,
}) => {
  // console.log(todos);

  return (
    <div className=" h-[calc(100vh-5rem)] overflow-auto rounded-md bg-white px-3 py-4 ">
      {todos.map((item) => {
        return (
          <article
            key={item.id}
            className="text-tea my-3 flex items-center justify-between gap-2 rounded-md bg-yellow-300 px-3  py-2"
          >
            <div>
              {selectedId === item.id && isEdit ? (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  type="text"
                  className="rounded-md px-2 py-1 text-base focus:outline-none"
                />
              ) : (
                <>{item.isDone ? <h4>{item.todo}</h4> : <s>{item.todo}</s>}</>
              )}
              {/* <p>status : {item.isDone ? "True" : "False"}</p> */}
            </div>
            <div className="flex items-center gap-3">
              {selectedId === item.id && isEdit ? (
                <>
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                  />
                  <button onClick={handleSubmit}>
                    <AiOutlineCheck className="text-2xl text-green-400" />
                  </button>
                </>
              ) : (
                <button onClick={() => handleUpdate(item.id)}>
                  <MdModeEditOutline className="text-2xl text-gray-500" />
                </button>
              )}
              {isEdit ? (
                <button onClick={cancelEdit}>
                  <AiOutlineClose className="text-2xl text-red-600" />
                </button>
              ) : (
                <button onClick={() => handleDelete(item.id)}>
                  <FaTrashAlt className="text-xl text-red-600" />
                </button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Todos;
