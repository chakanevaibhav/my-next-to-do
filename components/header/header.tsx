import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="border border-slate-300 bg-slate-600 px-2 py-1 rounded hover:bg-slate-900 focus-within:bg-slate-900 outline-none"
        href="/new"
      >
        New
      </Link>
    </header>
  );
};

export default Header;
