import React from 'react'
import {useForm} from "react-hook-form"
import { authenticated } from '../Context/ContextProvides'


export default function Login() {

    const {login} = authenticated()

    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        const {email, password} = data
        await login(email, password)
        console.log(data)
    };
    
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-red-200 rounded p-4 flex flex-col gap-10 font-bold' >
                <div className='flex gap-2'>
                <label htmlFor="email">Email</label>
                <input className='border rounded border-black px-1' type="text" {...register("email")}/>
                </div>
                <div className='flex gap-2'>
                <label htmlFor="password">Password</label>
                <input className='border rounded border-black px-1' type="password" {...register("password")}/>
                </div>
                <button className='p-1 bg-red-500 rounded text-white font-bold'>Login</button>
            </form>
        </div>
    )
}
