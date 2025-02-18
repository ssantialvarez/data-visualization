import CharacterProfile from "../components/CharacterProfile";
import { Route } from "../routes/characters/$id";

export default function Details() {
    
    const data = Route.useLoaderData(); 

    if (!data) {
      return <span>Error: No se encontraron datos</span>;
    }
    
    
    return (
      <div className="container mx-auto p-4">
      <CharacterProfile 
        image={data.imageUrl} 
        name={data.name} 
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