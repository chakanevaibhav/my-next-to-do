import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <ul>
      <li className="flex gap-4 items-center border-b p-2">
        <input type="radio" id="todo" className="h-5 w-5 rounded" />
        <label htmlFor="todo" className="text-xl line-through">
          This is my to do
        </label>
      </li>
      <li className="flex gap-4 items-center border-b p-2">
        <input type="radio" id="todo" className="h-5 w-5 rounded" />
        <label htmlFor="todo" className="text-xl line-through">
          My second to do
        </label>
      </li>
    </ul>
  );
}
