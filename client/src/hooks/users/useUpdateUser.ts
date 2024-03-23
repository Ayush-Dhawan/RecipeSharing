import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function useUpdateUser(username: string, fullName: string,  gender: string, profilePic: string){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    //@ts-ignore
    const {mutate: updateUser, isLoading: isUpdatingUser} = useMutation({
        //@ts-ignore
        mutationFn: () => updateUserbyUsername(username, fullName, gender, profilePic),
        onSuccess: ()=>{
            toast.success("Details updated succesfully!");
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: (error: any) => toast.error(error.message)
    })
    return {updateUser, isUpdatingUser}
}

async function updateUserbyUsername(username: string, fullName: string, gender: string, profilePic: string) {
    console.log("username in mutate", fullName);
    try {
        const res = await fetch(`/api/user/${username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, fullName, gender, profilePic }) // Send profilePic directly
        });

        if (!res.ok) {
            toast.error("Something went wrong communicating with the database");
            throw new Error('Something went wrong communicating with the database');
        }

        const data = await res.json();
        return data;
    } catch (error: any) {
        toast.error("Could not update details");
        throw new Error(error.message);
    }
}
