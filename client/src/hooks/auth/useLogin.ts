import {useMutation, useQueryClient} from '@tanstack/react-query'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


export function useLogin(username: string, password: string){
    const navigate = useNavigate();

    //@ts-ignore
    const {mutate: login, isLoading: isLoggingIn} = useMutation({
        //@ts-ignore
        mutationFn: () => loginApi(username, password),

        onSuccess: () =>{
            navigate("/recipes", {replace: true}) //replace: true disables back button of browser
            localStorage.setItem('username-recipe-app', username);
            toast.success("Logged in succesfully!")
        },

        onError: () => toast.error("Incorrect credentials")
    })

    return {login, isLoggingIn}
}

async function loginApi(username: string, password: string){
    console.log("loginapi: ", username, password)
    try {
        const res = await fetch("/api/auth/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        console.log("res", res)
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Failed to login');
        }
        return data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error('Failed to login');
    } 
}