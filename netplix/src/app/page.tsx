import Image from "next/image";
import './globals.css'
export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold text-red-500 bg-yellow-300 p-8 m-4 border-4 border-blue-500">
        Netflix clone
      </h1>
      <p className="text-2xl text-green-500 underline">
        If you can see colors and styles, Tailwind is working!
      </p>
    </>
  );
}