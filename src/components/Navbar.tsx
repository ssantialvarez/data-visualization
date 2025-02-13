import { Link, useNavigate } from "@tanstack/react-router";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

const Navbar = (): React.JSX.Element => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const getData = setTimeout(() => {
      if(value)
        navigate({to:'/characters', search:{ name: value }})
    }, 500)

    return () => clearTimeout(getData)
  }, [value])

return (
    <nav className="fixed top-0 left-0 right-0 bg-snow shadow-md opacity-95 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex sm:max-h-32 md:h-16 items-center justify-center">
          <Link to="/characters">
            <img className="h-10 sm:h-12 w-auto" src="/favicon-32x32-disney.png" alt="Disney Logo" />
          </Link>
          <SearchBar onSubmit={async (value) => setValue(value)}/>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

