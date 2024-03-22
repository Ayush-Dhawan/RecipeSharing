import { useQuery } from "@tanstack/react-query";
//@tsignore
// import { readRecipes } from '../../../../server/routes/recipeControllers/readRecipes.js';

export default function useGetRecipes(){
    const { data: recipes, isLoading: isGettingRecipes } = useQuery({
        queryFn: getAllRecipes,
        queryKey: ['recipes']
    });

    return { recipes, isGettingRecipes };
}       

 async function getAllRecipes(){
    try {
        const res = await fetch("/api/recipe");
        console.log("res", res)
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Failed to fetch recipes');
        }

        return data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to fetch recipes');
    } 
}

