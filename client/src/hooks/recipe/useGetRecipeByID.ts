import { useQuery } from "@tanstack/react-query";

export default function useGetRecipeByID(id: string){
    const { data: recipe, isLoading: isGettingRecipe } = useQuery({
        queryFn: () => getRecipe(id),
        queryKey: ['recipe']
    });

    return { recipe, isGettingRecipe };
}       

 async function getRecipe(id: string){

    try {
        const res = await fetch(`/api/recipe/${id}`)
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

