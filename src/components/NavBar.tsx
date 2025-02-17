import { Link, useNavigate } from "@tanstack/react-router";
import SearchBar from "./SearchBar";
import { createContext, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import FilterBar from "./FilterBar";




const Navbar = (): React.JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const SearchContext = createContext('')


  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const getData = setTimeout(() => {
      if(searchValue)
        navigate({to:'/characters', search:{ name: searchValue }})
    }, 500)

    return () => clearTimeout(getData)
  }, [searchValue])

return (
    <>
    <nav className="fixed top-0 left-0 right-0 bg-snow/95 shadow-md z-10">
      <div className="px-2 lg:px-8">
        <div className="relative flex flex-row h-16 items-center justify-center">
          <Link to="/characters">
            <img className="h-10 sm:h-12 w-auto" src="/favicon-32x32-disney.png" alt="Disney Logo" />
          </Link>
          <SearchContext.Provider value={searchValue}>
            <SearchBar onSubmit={async (value) => setSearchValue(value)}/>
          </SearchContext.Provider>
          {/* Filter Button */}
          <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-snow hover:bg-slate-300 transition rounded-lg px-4 py-2 flex items-center gap-2 ring-1 shadow-sm ring-gray-300"
          aria-expanded={isOpen}
          aria-haspopup="true"
          >
          Filter
          <ChevronDown className="size-5 text-gray-400" />
          </button>
        </div>
      </div>
    </nav>

    {isOpen && (
      <FilterBar />
    )}
    </>
  );
};

export default Navbar;

