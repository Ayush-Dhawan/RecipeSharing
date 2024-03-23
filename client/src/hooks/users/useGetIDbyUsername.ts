import { useQuery } from "@tanstack/react-query";
//@tsignore
// import { readRecipes } from '../../../../server/routes/recipeControllers/readRecipes.js';

export default function useGetIDbyUsername(username: string){
    const { data: id, isLoading: isGettingid } = useQuery({
        queryFn: () => getID(username),
        queryKey: ['userID']
    });

    return { id, isGettingid };
}       

 async function getID(username: string){
    try {
        const res = await fetch(`/api/user/user/${username}`); 
        
        if (!res.ok) {
            throw new Error( 'Failed to fetch user id');
        }
        const data = await res.json();

        return data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to fetch user id');
    } 
}

