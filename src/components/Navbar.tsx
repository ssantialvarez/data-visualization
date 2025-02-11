import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Navbar = () : React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar fixed top-0 right-0 left-0">
        <div className="mx-8 max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 text-center items-center justify-between">
            <div className="flex p-1 m-auto shrink-0 items-center">
                <Link to="/characters">
                <img className="h-8 w-auto" src="/favicon-32x32-disney.png" alt="Disney Logo"/>
                </Link>
                
            </div>
            <div className="flex flex-1 items-center mx-32  justify-center sm:items-stretch sm:justify-start">
                <div className="ml-8 w-7/8">
                    <input className=" bg-snow opacity-90 placeholder:text-black placeholder:text-center placeholder:italic pl-2 pt-1 pr-1 pb-1 rounded-l-2xl w-full" type="text" placeholder="Search character..."/>
                    {/* bg-midnight-blue opacity-80 placeholder:text-snow placeholder:italic text-snow pl-2 pt-1 pr-1 pb-1 rounded-2xl w-full */}
                </div>
                <div className="mr-8 w-1/8">
                {/*inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50*/}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-snow opacity-90 hover:bg-slate-300 transition rounded-r-2xl inline-flex w-full justify-center gap-x-1.5 px-3 text-sm py-2 h-8 ring-1 shadow-xs ring-gray-300 ring-inset"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    Filter
                    <ChevronDown className="size-5 text-gray-400" />
                </button>

                </div>
            </div>

            </div>
        </div>
        
        
        </nav>
    )
}

export default Navbar;

//