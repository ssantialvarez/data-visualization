import { motion } from "framer-motion";

interface Option {
  id: number;
  name: string;
  state: boolean;
}

const FilterBar = ({
  searchByValue,
  setSearchByValue,
  filterValue,
  setFilterValue,
}: {
  searchByValue: string;
  setSearchByValue: (value: string) => void;
  filterValue: Option[];
  setFilterValue: (value: Option[]) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.1 }}
      className="fixed z-10 top-16 w-full md:h-min flex flex-row flex-wrap justify-center rounded-b-md bg-snow/95 ring-1 shadow-lg ring-black/5"
    >
      <div className="px-4">
        Search By:
        <select value={searchByValue} className="px-4" onChange={(e) => setSearchByValue(e.target.value)}>
          {filterValue.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="px-2 flex flex-row">
        Appears on:
        <ul className="flex flex-col md:flex-row">
          {filterValue.map((option) =>
            option.id === 0 ? null : (
              <li key={option.id} className="px-2">
                <label>
                  <input
                    type="checkbox"
                    checked={option.state}
                    onChange={() =>
                      setFilterValue(
                        filterValue.map((opt) => (opt.id === option.id ? { ...opt, state: !opt.state } : opt))
                      )
                    }
                  />
                  <span className="px-2">{option.name}</span>
                </label>
              </li>
            )
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default FilterBar;
