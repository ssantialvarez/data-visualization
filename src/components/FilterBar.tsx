import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  { id: 0, name: 'Characters', state: false },
  { id: 1, name: 'TV Shows', state: false },
  { id: 2, name: 'Films', state: false },
  { id: 3, name: 'Short Films', state: false },
  { id: 4, name: 'VideoGames', state: false },
  { id: 5, name: 'Park Attractions', state: false },
]

const FilterBar = (): React.JSX.Element => {
    const [searchByValue, setSearchByValue] = useState(options[0].name)
    const [filterValue, setFilterValue] = useState(options)
    console.log(searchByValue)
return (
    <>
        <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.1 }}
        className="fixed z-10 top-16 w-full flex flex-row justify-center rounded-b-md bg-snow/95 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
        role="menu"
        aria-orientation="horizontal" 
        aria-labelledby="menu-button" 
        tabIndex={-1}
        >
            <div className="px-4">
            Search By:
            <select defaultValue={searchByValue} className="px-4" onChange={e => setSearchByValue(e.target.value)}>
                {options?.map((option) => {
                    return <option value={option.name} > {option.name}</option>
                })}
            </select>
            </div>
            <div className="px-2 flex flex-row">
            Appears on: 
            <ul className="flex flex-row">
            {options?.map((option) => {
                return <li className="px-2"> <label>
                        <div className="flex flex-row">
                            <input 
                            type="checkbox" 
                            checked={option.state} 
                            onChange={
                                () => {
                                    const newArr = filterValue.slice()
                                    newArr[option.id].state = !filterValue[option.id].state
                                    setFilterValue(newArr)
                                }
                            } 
                            id={option.id.toString()}/>
                            <div className="px-2">{option.name}</div> 
                        </div>
                    </label>  </li>
                })}
                </ul>
            </div>
        </motion.div>

    </>
  );
};

export default FilterBar;