import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import CharacterCard from "../components/CharacterCard";
import { getCharacters } from "../queries/disneyQueries";
import { Route } from "../routes/characters";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Grid2x2, Rows4 } from "lucide-react";
import { ViewContext } from "../Contexts";

export default function CharactersHome({ film, tvShow, shortFilm, parkAttraction, videoGame }: { 
    film?: string;
    tvShow?: string;
    shortFilm?: string;
    parkAttraction?: string;
    videoGame?: string;
}) 
{
    const { ref, inView } = useInView()
    const { name } : {name: string} = Route.useSearch()
    const [viewValue, setViewValue] = useState(useContext(ViewContext))
  
    const {data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError} = useSuspenseInfiniteQuery(getCharacters({name, film, tvShow, shortFilm, parkAttraction, videoGame}))
  
    if (isLoading) return 
      <div className="text-center">
        <Spinner />
      </div>  
      
    ;
    if (isError) return <p className="text-center text-red-500">Error loading characters.</p>;
      
    let view
    if(viewValue)
      view = "grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-around gap-4"
    else
      view = "flex flex-col gap-4"

    const totalPages = data.pages[0].info.totalPages as number
    const count = data.pages[0].info.count as number
    
    useEffect(() => {
      if (inView) {
        fetchNextPage()
      }
    }, [fetchNextPage, inView])
  
    return (
      <>
        <div className="container mx-auto p-4">
          <div className="p-4 mb-4 ml-8 mr-8 text-2xl text-bold bg-white/40 shadow-lg rounded-2xl">
            <div className="opacity-100 flex flex-row justify-between">
              <div>
                {totalPages*count} {count == 1 && <>character</>} {count != 1 && <>characters</>} found.
              </div>
              <div className="invisible lg:visible">
                <button className="rounded-l-md bg-amber-50 hover:bg-amber-200 p-1" onClick={() => setViewValue(false)}>
                <Rows4 />
                </button>
                <button className="rounded-r-md bg-amber-50 hover:bg-amber-200 p-1" onClick={() => setViewValue(true)}>
                <Grid2x2 />
                </button>
              </div>
              
            </div>
          </div>
          <div className={view}>  
            {data?.pages.map((group) => {
              const characters = Array.isArray(group.data) ? group.data : [group.data]; 

              return characters.map((char: any) => (
                <ViewContext.Provider value={viewValue}>
                  <CharacterCard 
                    key={char._id} 
                    image={char.imageUrl} 
                    name={char.name} 
                    id={char._id} 
                    tvShows={char.tvShows} 
                    films={char.films} 
                    shortFilms={char.shortFilms} 
                    videogames={char.videoGames} 
                  />
                  </ViewContext.Provider>
              ));
            })}
          </div>
        </div>
        
        {hasNextPage && (
          <div className="text-center mt-6 p-2">
            <button ref={ref}>
              <Spinner/>
            </button>        
          </div>
        )}
      </>
      );
}
/*


<Button 
              ref={ref}
              title={isFetchingNextPage ? "Loading..." : "Load"} 
              disabled={isFetchingNextPage} 
              onClick={() => fetchNextPage()} 
            />

            */