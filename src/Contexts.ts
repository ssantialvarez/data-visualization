import { createContext } from "react";

export const ViewContext = createContext(true);
export const SearchContext = createContext<{
  searchValue: string;
  setSearchValue: (value: string) => void;
} | null>(null);
