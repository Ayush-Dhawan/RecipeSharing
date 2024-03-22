import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


export default function useGetUserByUsername(id: string){
    const {data: user, isLoading} = useQuery({
        queryFn: () => getUser(id),
        queryKey: ['user']
    })
    return {user, isLoading};
}

async function getUser(username: string){
    try {
        const res = await fetch(`/api/user/${username}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        })
        if(!res.ok) toast.error("could not fetch the data from api/user")
        const data = await res.json();   
        return data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to fetch user');
    }
}