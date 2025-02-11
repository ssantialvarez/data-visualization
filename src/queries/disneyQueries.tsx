import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
import { getDisneyCharacterById, getDisneyCharacters } from "../services/disneyService";


export const getById = (id : string) => queryOptions({
    queryKey: ["GET_BY_ID", id],
    queryFn: () => getDisneyCharacterById(id),
})

export const getCharacters = infiniteQueryOptions({
    queryKey: ["disneyCharacters"],
    queryFn: getDisneyCharacters,
    initialPageParam: 1, 
    getNextPageParam: (lastPage) => {
        return lastPage.info.nextPage 
            ? Number(new URL(lastPage.info.nextPage).searchParams.get("page")) 
            : null;
    }
})