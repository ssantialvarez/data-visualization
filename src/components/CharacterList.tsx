

const CharacterList = ({ arr, title }: { arr: string[], title: string }) => {

  return (
    <div className="relative inline-block text-left">
      
      <h1 className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 ">
        {title}
      </h1>
      
      <div className="z-10 my-2 w-full origin-top-right rounded-md bg-white ">
        <ul className="p-1 list-disc list-inside ">
          {arr.length ? arr.map((show) => (<li>{show}</li>)) : <li>None</li>}
        </ul>
      </div>
      <hr/>
    </div>
  )
};

export default CharacterList;
