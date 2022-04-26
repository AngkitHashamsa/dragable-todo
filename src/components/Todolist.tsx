import React from "react";
import { Todo } from "../Interface/inputInterface";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function Todolist({
  todos = [],
  setTodos,
  completedTodo = [],
  setCompletedTodo,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Droppable droppableId="Todo">
        {(provided) => (
          <div
            className="flex w-full flex-col gap-3 rounded-md bg-yellow-300 p-4 shadow-md"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="text-center">Todo</h2>

            {todos.map((todo, index) => (
              <SingleTodo
                key={todo?.id}
                index={index}
                todo={todo}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="Completed">
        {(provided) => (
          <div
            className="flex w-full flex-col gap-3 rounded-md bg-orange-300 p-4 shadow-md"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="text-center">Completed</h2>

            {completedTodo?.map((todo, index) => (
              <SingleTodo
                key={todo?.id}
                todo={todo}
                index={index}
                setTodos={setCompletedTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Todolist;
