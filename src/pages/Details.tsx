import CharacterCard from "../components/CharacterCard";
import CharacterProfile from "../components/CharacterProfile";
import { Route } from "../routes/characters/$id";

export default function Details() {
    //const { isPending, isError, data, error } = useSuspenseQuery(getById(charId))
  /*
    if (isPending) {
      return <span>Loading...</span>
    }
    console.log(data)
    if (isError) {
      return <span>Error: {error?.message}</span>
    }
  */
    const data = Route.useLoaderData(); // ✅ Obtiene los datos precargados

    if (!data) {
      return <span>Error: No se encontraron datos</span>;
    }
    console.log(data)
    // We can assume by this point that `isSuccess === true`
    return (
      <div className="container mx-auto p-4">
      <CharacterProfile 
        image={data.imageUrl} 
        name={data.name} 
        id={data._id}
        tvShows={data.tvShows} 
        films={data.films} 
        shortFilms={data.shortFilms} 
        videogames={data.videoGames} 
        allies={data.allies} 
        enemies={data.enemies} 
        parkAttractions={data.parkAttractions}
        />
      </div>
    )
  }