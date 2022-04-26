import React from "react";
import { useRef } from "react";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputFiled: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="relative flex w-[90%] items-center justify-center "
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        className="shaw w-full rounded-[50px] border-0 py-4 px-7 text-lg text-gray-800 shadow-cus-1 transition-all duration-300 focus:shadow-cus-2 focus:outline-none"
        placeholder="Type here ...."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
        ref={inputRef}
      />
      <button
        type="submit"
        className="absolute top-2   right-3 h-[2.5rem] w-[2.5rem] rounded-full bg-sky-500 text-white shadow-btn-cus transition-all hover:scale-90 hover:bg-sky-400 hover:shadow-btn-active "
      >
        Go
      </button>
    </form>
  );
};

export default InputFiled;
