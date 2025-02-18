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
  sourceUrl: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ image, name, id, tvShows, films, shortFilms, videogames, sourceUrl }) => {
    const viewValue = useContext(ViewContext)
    if(!image) 
        image = '/placeholder-no-image.jpg'
    
    let view, imageView, dataView;
    view = 'bg-white opacity-95 shadow-lg rounded-2xl overflow-hidden p-4 h-full flex justify-between relative hover:opacity-100 transition-opacity'
    
    if(viewValue){
        view = view + "w-80 flex-col"
        imageView = "w-full object-cover rounded-lg h-64"
        dataView = "p-4 flex-grow flex flex-col"
    }
    else{
        view = view + "w-full flex-row"
        imageView = "w-64 h-full object-cover rounded-lg"
        dataView = "p-4 flex-grow flex flex-row gap-16" 
    }


    return (
        <>
            <div className={view}>
            <div className="flex flex-col">
                <Link to={sourceUrl}>
                <img src={image} alt={name} className={imageView} />
                </Link>
            </div>
                <div className="flex flex-col">
                <h1 className="text-4xl text-center font-bold mt-4">{name}</h1>
                <div className={dataView}>
                    <List arr={tvShows} viewValue={viewValue} title="TV Shows"/>
                    <List arr={films} viewValue={viewValue} title="Films"/>
                    <List arr={shortFilms} viewValue={viewValue} title="Short Films"/>                
                    <List arr={videogames} viewValue={viewValue} title="VideoGames"/>
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


const List = ({ arr, viewValue, title } : { arr: string[], viewValue: boolean, title: string }) => {
    
    return (
        <div>
            <h2 className="text-gray-600 text-2xl">{title}:</h2>
            <ul className="list-disc list-inside text-gray-800 text-2xl">
                {arr.length ? ( viewValue ? <li>{arr[0]}</li> : arr.map((show) => (<li>{show}</li>))): <li>None</li>}
            </ul>
        </div>
    );
};

