import { Link } from "@tanstack/react-router";

export default function Index() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-snow text-center p-4">
      <h1 className="text-6xl text-black font-bold mb-4">Welcome to Disney API</h1>
      <p className="text-xl text-black font-bold mb-6">Find the characters you love!</p>
      
      <Link
        to="/characters"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
        Home
      </Link>
    </div>
    )
  }

  //<p className="text-lg mb-6">Parece que te has perdido en la magia de Disney.</p>
//<div className="min-h-screen bg-[url(/250145.jpg)] bg-fixed bg-no-repeat">