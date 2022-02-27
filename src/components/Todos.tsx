// import React from 'react'

import { Todo } from "../Interface/inputInterface";
interface props {
  todos: Todo[];
}
const Todos: React.FC<props> = ({ todos }) => {
  // console.log(todos);

  return (
    <div className="mt-3 rounded-md bg-white px-3 py-2 shadow-md">
      {todos.map((item) => {
        return (
          <article key={item.id} className="my-3 flex items-center  gap-2">
            <h4>{item.todo}</h4>
            <p>completed:{item.isDone}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Todos;
