

const CharacterList = ({ arr, title }: { arr: string[], title: string }) => {

  return (
    <div className="relative inline-block text-left">
      
      <h1 className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset">
        {title}
      </h1>
      
      <div className="z-10 my-2 w-full origin-top-right rounded-md bg-white ">
        <ul className="p-1 list-disc list-inside">
          {arr.length ? arr.map((show) => (<li>{show}</li>)) : <li>None</li>}
        </ul>
      </div>
      
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