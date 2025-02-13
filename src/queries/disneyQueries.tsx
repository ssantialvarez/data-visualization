import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { getDisneyCharacterById, getDisneyCharacters } from "../services/disneyService";


export const getById = (id : string) => queryOptions({
    queryKey: ["GET_BY_ID", id],
    queryFn: () => getDisneyCharacterById(id),
})

export const getCharacters = ({ name, film, tvShow, shortFilm, parkAttraction, videoGame }: { 
    name?: string;
    film?: string;
    tvShow?: string;
    shortFilm?: string;
    parkAttraction?: string;
    videoGame?: string;
}) => infiniteQueryOptions({
    queryKey: ["disneyCharacters", name, film, tvShow, shortFilm, parkAttraction, videoGame],
    queryFn: ({ pageParam }) => getDisneyCharacters({ 
        pageParam, 
        name, 
        film, 
        tvShow, 
        shortFilm, 
        parkAttraction, 
        videoGame 
    }),
    initialPageParam: 1, 
    getNextPageParam: (lastPage) => {
        return lastPage.info.nextPage 
            ? Number(new URL(lastPage.info.nextPage).searchParams.get("page")) 
            : null;
    }
});
