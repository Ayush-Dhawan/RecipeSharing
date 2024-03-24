import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';

export default function useEditRecipe() {
    const queryClient = useQueryClient();
    //@ts-ignore
  const {mutate: editRecipe, isLoading: isEditingRecipe} = useMutation({
    mutationFn: ({recipeID, dishName, ingredients, recipe, image}: {recipeID: string, dishName: string, ingredients: any, recipe: any, image: string}) => helper({recipeID, dishName, ingredients, recipe, image}),
    onSuccess: () => {
        toast.success("Succesfully edited the recipe!");
        queryClient.invalidateQueries({queryKey: ['users recipes']});
    },
    onError: (error: any) => toast.error(error.message)
  })
  return {editRecipe, isEditingRecipe}
}

async function helper({recipeID, dishName, ingredients, recipe, image}: {recipeID: string, dishName: string, ingredients: any, recipe: any, image: string}){
   
    try {
        const res = await fetch(`/api/recipe/edit/${recipeID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({dishName, ingredients, recipe, image})
        })
        if(!res.ok) toast.error("unable to edit recipe from client");
        const data = await res.json();
        
        return data;
    }  catch (error: any) {
        toast.error("Could not edit recipe");
        throw new Error(error.message);
    }
}
