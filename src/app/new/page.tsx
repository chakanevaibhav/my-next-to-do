"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewToDo = () => {
  const router = useRouter();

  const onAdd = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="w-full h-10 rounded-lg p-3 text-black border-none focus-within: outline-slate-900"
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="w-full h-32 rounded-lg p-3 text-black border-none focus-within: outline-slate-900"
        />
      </div>
      <button
        type="submit"
        className="bg-slate-600 p-2 text-xl rounded-lg w-full hover:bg-slate-500"
        onClick={onAdd}
      >
        Add
      </button>
    </div>
  );
};

export default NewToDo;
