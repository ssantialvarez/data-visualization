import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <form
      className="flex flex-row w-full max-w-lg sm:max-w-2xl items-center sm:justify-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        onChange(value);
      }}
    >
      <Search className="invisible md:visible"/>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-snow opacity-90 placeholder:text-black placeholder:text-center placeholder:italic p-2 rounded-lg w-full sm:w-64 md:w-80 lg:w-96 ring-1 ring-gray-300 ring-inset"
        type="text"
        placeholder="Search character..."
      />
    </form>
  );
};

export default SearchBar;
