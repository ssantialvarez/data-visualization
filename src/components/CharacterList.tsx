import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


const CharacterList = ({ arr, title }: { arr: string[], title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <ChevronDown className="size-5 text-gray-400" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="z-10 mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5"
        >
          <ul className="py-1">
            {arr.length ? arr.map((show) => (<li>{show}</li>)) : <li>None</li>}
          </ul>
        </motion.div>
      )}
    </div>
  )
};

export default CharacterList;


/*
<h2 className="text-gray-600 text-2xl text-center underline">{title}:</h2>
        <ul className="list-disc list-inside text-gray-800">
            {arr.length ? arr.map((show) => (<li>{show}</li>)) : <li>None</li>}
        </ul>
        
<div className="py-1" role="none">
            
            
            
            <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
            <form method="POST" action="#" role="none">
                <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
            </div>*/