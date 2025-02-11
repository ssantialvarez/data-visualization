import { useInfiniteQuery, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getDisneyCharacters } from "../services/disneyService";
import CharacterCard from "../components/CharacterCard";
import Button from "../components/Button";
import { getCharacters } from "../queries/disneyQueries";

export default function CharactersHome() {
  /*
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["disneyCharacters"],
    queryFn: getDisneyCharacters,
    initialPageParam: 1, 
    getNextPageParam: (lastPage) => {
      return lastPage.info.nextPage 
        ? Number(new URL(lastPage.info.nextPage).searchParams.get("page")) 
        : null;
    },
  });
  */
  const {data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError} = useSuspenseInfiniteQuery(getCharacters)
  if (isLoading) return <p className="text-center">Loading characters...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading characters.</p>;

  return (
    <>
      <div className="container mx-auto p-4">
        {/*grid grid-cols-2 md:grid-cols-5 gap-6*/}
        {/*grid grid-flow-row auto-rows-max gap-4*/}
        <div className="grid grid-cols-1 md:grid-cols-5 content-around gap-4">  
          {data?.pages.map((group, i) =>
              group.data.map((char: any) => (
                <CharacterCard image={char.imageUrl} name={char.name} id={char._id} tvShows={char.tvShows} films={char.films} shortFilms={char.shortFilms} videogames={char.videoGames} />
              ))
          )}
        </div>
      </div>
      {hasNextPage && (
        <div className="text-center mt-6 p-2">

          <Button title={isFetchingNextPage ? "Cargando más..." : "Cargar más"} disabled={isFetchingNextPage} onClick={() => fetchNextPage()}/>
          
        </div>
      )}
    </>
  );
}
