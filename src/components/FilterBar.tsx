import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  { id: 0, name: 'Characters' },
  { id: 1, name: 'TV Shows' },
  { id: 2, name: 'Films' },
  { id: 3, name: 'Short Films' },
  { id: 4, name: 'VideoGames' },
  { id: 5, name: 'Park Attractions' },
]

const FilterBar = (): React.JSX.Element => {
  const [filterValue, setFilterValue] = useState(options[0].name)
  
return (
    <>
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
        className="fixed z-10 top-16 w-full rounded-b-md bg-snow/95 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
        role="menu"
        aria-orientation="horizontal" 
        aria-labelledby="menu-button" 
        tabIndex={-1}
        >
        <div className="flex flex-row justify-center">
            <label className="p-2">
            Search By:
            <select className="p-2" defaultValue={filterValue}>
                {options?.map((option) => {
                return <option value={option.name} onChange={(e) => {e.preventDefault(); setFilterValue(e.currentTarget.value)} }> {option.name}</option>
                })}
            </select>
            </label>
            
            {/*<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">*/}
            <label className="p-1 flex flex-row">
                Appears on: 
                <ul className="p-1 flex flex-row">
                {options?.map((option) => {
                    return <li className="px-2"> <label><input type="checkbox" id={option.id.toString()}/> {option.name}</label>  </li>
                })}
                </ul>
            </label>
        </div>
        
        </motion.div>

    </>
  );
};

export default FilterBar;