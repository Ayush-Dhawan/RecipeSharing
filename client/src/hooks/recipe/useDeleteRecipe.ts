import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export default function useDeleteRecipe(id: string) {
  const queryClient = useQueryClient();
    //@ts-ignore
  const {mutate: deleteRecipe, isLoading: isDeleting} = useMutation({
    mutationFn: () => helper(id),
    onSuccess: () =>{
        toast.success(`Recipe ${id} deleted succesfully`);
        queryClient.invalidateQueries({ queryKey: ['users recipes']})
    }
  })
  return {deleteRecipe, isDeleting}
}

async function helper(id: string){
    try {
       const res = await fetch(`/api/recipe/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
       }) 
       if(!res.ok) toast.error("unable to fetch response from the server");
       const data = res.json();
       return data;
    } catch (error: any) {
        toast.error(error.message);
        throw new Error("Could not delete the recipe, error in helper function")
    }
}