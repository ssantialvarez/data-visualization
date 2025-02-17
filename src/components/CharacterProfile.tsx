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
        <div className="bg-white shadow-lg rounded-2xl py-8 flex flex-col h-full">
            <div className="flex justify-center basis-1/2 p-4 ">
                <img src={image} alt={name} className="rounded-2xl object-fit h-max w-1/2" />
            </div>
            
            <div className="flex flex-col p-2">
                <h1 className="text-7xl text-center font-bold">{name}</h1>
                <hr/>
                <div className="flex flex-col mt-2">
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
    );
};

export default CharacterCard;
