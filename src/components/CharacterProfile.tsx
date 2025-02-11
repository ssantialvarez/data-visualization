import React from "react";
import CharacterList from "./CharacterList";

interface CharacterProfileProps {
  image: string;
  name: string; 
  tvShows: string[];
  films: string[];
  shortFilms: string[];
  videogames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
}

const CharacterCard: React.FC<CharacterProfileProps> = ({ 
    image, 
    name,  
    tvShows, 
    films, 
    shortFilms, 
    videogames, 
    parkAttractions, 
    allies, 
    enemies 
}) => {
    if(!image) 
        image = '/placeholder-no-image.jpg'
    return (
        <div className="flex flex-col pt-16">
        <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-row h-full">
            <div className="flex flex-col basis-3xl">
            <img src={image} alt={name} className="w-full h-128 object-cover rounded-lg" />
            <h1 className="text-7xl text-center font-bold mt-4">{name}</h1>
            </div>
            {/* Character data */}
            <div className="p-4 mx-auto basis-3xl">
            <div className="flex flex-col">
                <CharacterList arr={tvShows} title="TV Shows" />
                <CharacterList arr={films} title="Films" />
                <CharacterList arr={shortFilms} title="Short Films" />
                <CharacterList arr={videogames} title="VideoGames" />
                <CharacterList arr={parkAttractions} title="Park Attractions" />
                <CharacterList arr={allies} title="Allies" />
                <CharacterList arr={enemies} title="Enemies" />
            </div>
            </div>
        </div>
        </div>
    );
};

export default CharacterCard;
