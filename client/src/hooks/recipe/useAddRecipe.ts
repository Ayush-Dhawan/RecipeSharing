import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useAddRecipe() {
    const queryClient = useQueryClient();
    //@ts-ignore
  const {mutate: addRecipe, isLoading: isAddingRecipe} = useMutation({
    //@ts-ignore
        mutationFn: ({authorID, dishName, ingredients, recipe, image}: {authorID:string, dishName: string, ingredients: [string], recipe: [string], image: string}) => helper({authorID, dishName, ingredients, recipe, image}),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users recipes"] });
            toast.success("Thank you for your new recipe!!");
        },
        onError: () => toast.error("something went wrong")
  })
  return {addRecipe, isAddingRecipe};
}

async function helper({authorID, dishName, ingredients, recipe, image}: {authorID:string, dishName: string, ingredients: [string], recipe: [string], image: string}){
    console.log(authorID, dishName, ingredients,  recipe,  "this is helper")
    try {
        const res = await fetch("/api/recipe/add", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({authorID, dishName, ingredients, recipe, image})
        })

        if(!res.ok) toast.error("unable to add recipe via helper");
        const data = await res.json();
        return data;
    } catch (error: any) {
        toast.error(error.message);
        throw new Error(error.message);
    }
}
