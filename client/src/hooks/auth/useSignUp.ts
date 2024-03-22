import {useMutation, useQueryClient} from '@tanstack/react-query'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


export function useSignUp(username: string, fullName: string, password: string, confirmPassword: string, gender: string){
    const navigate = useNavigate();

    //@ts-ignore
    const {mutate: signUp, isLoading: isSigningUp} = useMutation({
        //@ts-ignore
        mutationFn: () => SignupApi(fullName, username, password, confirmPassword, gender),

        onSuccess: () =>{
            navigate("/recipes", {replace: true}) //replace: true disables back button of browser
            localStorage.setItem('username-recipe-app', username);
            toast.success('Registered succesfully!');
        },

        onError: (error: any) => toast.error(error.message)
    })

    return {signUp, isSigningUp}
}

async function SignupApi(fullName: string, username: string, password: string, confirmPassword: string, gender: string){
    try {
        const res = await fetch("/api/auth/signup",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
        });
        console.log("res", res)
        const data = await res.json();

        console.log("data from api", data)
        if (!res.ok) {
            throw new Error(data.error );
        }
        return data;
    } catch (error: any) {
        console.error(error.message);
        throw new Error(error.message);
    } 
}