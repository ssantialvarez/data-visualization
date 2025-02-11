import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oh no! The character you searched was not found...</p>
      <p className="text-lg mb-6">Please return to home.</p>
      <Link
        to="/characters"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
      >
        Volver a casa
      </Link>
    </div>
  );
};
  
  export default NotFound;

  /*
  const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white text-center p-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oh no! Este reino no existe...</p>
        <p className="text-lg mb-6">Parece que te has perdido en la magia de Disney.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Volver a casa
        </Link>
      </div>
    );
  };
  */