import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


export default function useGetRecipesOfaUser(username: string) {
  const {data, isLoading} = useQuery({
    queryFn: () => getRecipe(username),
    queryKey: ['users recipes']
  })
  return {data, isLoading};
}

async function getRecipe(username: string){
    try {
        const res = await fetch(`/api/recipe/recipes/${username}`);
        if(!res.ok) throw new Error(`unable to get recipes for ${username} at client`)
        const data = await res.json();
        return data;
    } catch (error: any) {
        toast.error(error.message)
    }
}
