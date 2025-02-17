import { Search } from "lucide-react";
import { useState } from "react";




const SearchBar = ({ onSubmit }: { onSubmit: (value: string) => {} }): React.JSX.Element => {
  const [value, setValue] = useState('') 

  return (
    <>
     <form
        className="flex flex-row w-full max-w-lg sm:max-w-2xl items-center sm:justify-center gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(value);
        }}
      >
        <Search />
      
        <input
          value={value}
          onChange={(event) => {
          event.preventDefault()
          setValue(event.target.value)}}
          className="bg-snow opacity-90 placeholder:text-black placeholder:text-center placeholder:italic p-2 rounded-lg w-full sm:w-64 md:w-80 lg:w-96 ring-1 ring-gray-300 ring-inset"
          type="text"
         placeholder="Search character..."
        />
    </form>
    </>
  );
}
export default SearchBar;


/*
<label>
            Search By:      
          <select name="selectedFruit" defaultValue={options[0].name} >
            {options?.map((option) => {
              return <option className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} value={option.name}>{option.name}</option>
            })}
          </select>
          </label>
        


className="bg-snow opacity-90 hover:bg-slate-300 transition rounded-lg px-4 py-2 flex items-center gap-2 ring-1 shadow-sm ring-gray-300"
    
    <div className="flex flex-col sm:flex-row w-full max-w-lg sm:max-w-2xl items-center sm:justify-center gap-2">
    

        <Search />
        <input
        className="bg-snow opacity-90 placeholder:text-black placeholder:text-center placeholder:italic p-2 rounded-lg w-full sm:w-64 md:w-80 lg:w-96 ring-1 ring-gray-300 ring-inset"
        type="text"
        placeholder="Search character..."
        />

    
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
    </div>*/