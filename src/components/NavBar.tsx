import { Link, useNavigate } from "@tanstack/react-router";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import FilterBar from "./FilterBar";

const options = [
  { id: 0, name: 'Characters', state: false },
  { id: 1, name: 'TV Shows', state: false },
  { id: 2, name: 'Films', state: false },
  { id: 3, name: 'Short Films', state: false },
  { id: 4, name: 'VideoGames', state: false },
  { id: 5, name: 'Park Attractions', state: false },
];

const Navbar = (): React.JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const [searchByValue, setSearchByValue] = useState(options[0].name);
  const [filterValue, setFilterValue] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchValue) return;

    const getData = setTimeout(() => {
      const filters = {
        name: searchByValue === "Characters" ? searchValue : "",
        tvShow: searchByValue === "TV Shows" ? searchValue : filterValue[1].state ? " " : undefined,
        film: searchByValue === "Films" ? searchValue : filterValue[2].state ? " " : undefined,
        shortFilm: searchByValue === "Short Films" ? searchValue : filterValue[3].state ? " " : undefined,
        videoGame: searchByValue === "VideoGames" ? searchValue : filterValue[4].state ? " " : undefined,
        parkAttraction: searchByValue === "Park Attractions" ? searchValue : filterValue[5].state ? " " : undefined,
      };

      navigate({
        to: "/characters",
        search: filters,
      });

      setSearchValue("");
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchValue, searchByValue, filterValue]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-snow/95 shadow-md z-10">
        <div className="px-2 lg:px-8">
          <div className="relative flex flex-row h-16 items-center justify-center">
            <Link to="/characters">
              <img className="h-10 sm:h-12 w-auto" src="/favicon-32x32-disney.png" alt="Disney Logo" />
            </Link>

            <SearchBar value={searchValue} onChange={setSearchValue} />

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
        <FilterBar 
          searchByValue={searchByValue}
          setSearchByValue={setSearchByValue}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      )}
    </>
  );
};

export default Navbar;
