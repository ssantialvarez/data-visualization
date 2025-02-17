import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "@tanstack/react-router";
import { ViewContext } from "../Contexts";

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
    const viewValue = useContext(ViewContext)
    if(!image) 
        image = '/placeholder-no-image.jpg'
    let view, imageView, dataView;
    if(viewValue){
        view = "bg-white opacity-95 shadow-lg rounded-2xl overflow-hidden p-4 w-80 h-full flex flex-col justify-between relative hover:opacity-100 transition-opacity"
        imageView = "w-full object-cover rounded-lg h-64"
        dataView = "p-4 flex-grow flex flex-col"
    }
    else{
        view = "bg-white opacity-95 shadow-lg rounded-2xl overflow-hidden p-4 w-full h-full flex flex-row justify-between relative hover:opacity-100 transition-opacity"
        imageView = "w-64 h-full object-cover rounded-lg"
        dataView = "p-4 flex-grow flex flex-row justify-around" 
    }


    return (
        <>
            <div className={view}>
            <div className="flex flex-col">
                <img src={image} alt={name} className={imageView} />
                <h1 className="text-2xl text-center font-bold mt-4">{name}</h1>
            </div>
            {/* Character data */}
            <div className={dataView}>
                <div>
                <h2 className="text-gray-600">TV Shows:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {tvShows.length ? ( viewValue ? <li>{tvShows[0]}</li> : tvShows.map((show) => (<li>{show}</li>))): <li>None</li>}
                </ul>
                </div>
                <div>
                <h2 className="text-gray-600">Films:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {films.length ? ( viewValue ? <li>{films[0]}</li> : films.map((show) => (<li>{show}</li>))): <li>None</li>}
                </ul>
                </div>
                <div>
                <h2 className="text-gray-600">Short Films:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {shortFilms.length ? ( viewValue ? <li>{shortFilms[0]}</li> : shortFilms.map((show) => (<li>{show}</li>))) : <li>None</li>}
                </ul>
                </div>
                <div>
                <h2 className="text-gray-600">VideoGames:</h2>
                <ul className="list-disc list-inside text-gray-800">
                    {videogames.length ? ( viewValue ? <li>{videogames[0]}</li> : videogames.map((show) => (<li>{show}</li>))): <li>None</li>}
                </ul>
                </div>
            </div>

            <div className="self-center pb-4">
                <Link to={'/characters/' + id}>
                <Button  disabled={false} title="See details..." />
                </Link>
            </div>
            </div>

        </>
    );
};

export default CharacterCard;
