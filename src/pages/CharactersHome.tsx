import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import CharacterCard from "../components/CharacterCard";
import Button from "../components/Button";
import { getCharacters } from "../queries/disneyQueries";
import { Route } from "../routes/characters";

export default function CharactersHome({ film, tvShow, shortFilm, parkAttraction, videoGame }: { 
  film?: string;
  tvShow?: string;
  shortFilm?: string;
  parkAttraction?: string;
  videoGame?: string;
}) {

  const { name } : {name: string} = Route.useSearch()
  console.log(name)
  const {data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError} = useSuspenseInfiniteQuery(getCharacters({name, film, tvShow, shortFilm, parkAttraction, videoGame}))
  
  if (isLoading) return <p className="text-center">Loading characters...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading characters.</p>;
  
  
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-around gap-4">  
          {data?.pages.map((group) => {
            const characters = Array.isArray(group.data) ? group.data : [group.data]; // Asegura que siempre sea un array

            return characters.map((char: any) => (
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
            ));
          })}
        </div>
      </div>
      
      {hasNextPage && (
        <div className="text-center mt-6 p-2">
          <Button 
            title={isFetchingNextPage ? "Cargando más..." : "Cargar más"} 
            disabled={isFetchingNextPage} 
            onClick={() => fetchNextPage()} 
          />
        </div>
      )}
    </>
  );
}
