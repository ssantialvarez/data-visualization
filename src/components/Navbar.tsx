import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

const Navbar = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-snow shadow-md opacity-95 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/characters">
              <img className="h-10 sm:h-12 w-auto" src="/favicon-32x32-disney.png" alt="Disney Logo" />
            </Link>
          </div>

          {/* Search Bar + Filter Button */}
          <div className="flex flex-col sm:flex-row w-full max-w-lg sm:max-w-2xl items-center sm:justify-center gap-2">
            {/* Search Input */}
            <input
              className="bg-snow opacity-90 placeholder:text-black placeholder:text-center placeholder:italic p-2 rounded-lg w-full sm:w-64 md:w-80 lg:w-96 ring-1 ring-gray-300 ring-inset"
              type="text"
              placeholder="Search character..."
            />

            {/* Filter Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-snow opacity-90 hover:bg-slate-300 transition rounded-lg px-4 py-2 flex items-center gap-2 ring-1 shadow-sm ring-gray-300"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              Filter
              <ChevronDown className="size-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//