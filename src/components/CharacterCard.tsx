import React from "react";
import Button from "./Button";
import { Link } from "@tanstack/react-router";

interface CharacterCardProps {
  image: string;
  name: string;
  id: string; 
  tvShows: string[];
  films: string[];
  shortFilms: string[];
  videogames: string[];
}

const CharacterCard: React.FC<CharacterCardProps> = ({ image, name, id, tvShows, films, shortFilms, videogames }) => {
    if(!image) 
        image = '/placeholder-no-image.jpg'
    return (
        <>
            <div className="bg-white opacity-95 shadow-lg rounded-2xl overflow-hidden p-4 w-80 h-full flex flex-col justify-between relative hover:opacity-100 transition-opacity">
            <img src={image} alt={name} className="w-full object-cover rounded-lg h-64" />
            <h1 className="text-2xl text-center font-bold mt-4">{name}</h1>

            {/* Character data */}
            <div className="p-4 flex-grow flex flex-col">
                <div>
                <h2 className="text-gray-600">TV Shows:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {tvShows.length ? <li>{tvShows[0]}</li> : <li>None</li>}
                </ul>
                <h2 className="text-gray-600">Films:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {films.length ? <li>{films[0]}</li> : <li>None</li>}
                </ul>
                <h2 className="text-gray-600">Short Films:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {shortFilms.length ? <li>{shortFilms[0]}</li> : <li>None</li>}
                </ul>
                <h2 className="text-gray-600">VideoGames:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {videogames.length ? <li>{videogames[0]}</li> : <li>None</li>}
                </ul>
                </div>
            </div>

            {/* Details button (centrado y al final) */}
            <div className="self-center pb-4">
                <Link to={'/characters/' + id}>
                <Button disabled={false} title="See details..." />
                </Link>
            </div>
            </div>

        </>
    );
};

export default CharacterCard;
