import React from 'react'
import {useForm} from "react-hook-form"
import { authenticated } from '../Context/ContextProvides'
import {Link} from "react-router-dom"


export default function Register() {

    const {registerUser} = authenticated()

    const {register, handleSubmit} = useForm()

    const onSubmit = async (data) => {
        const {username, email, password} = data
        await registerUser(username, email, password)
    };
    
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-red-200 rounded p-4 flex flex-col gap-10 font-bold' >
                <div className='flex gap-2'>
                <label htmlFor="email">username</label>
                <input className='border rounded border-black px-1' type="text" {...register("username")}/>
                </div>
                <div className='flex gap-2'>
                <label htmlFor="email">Email</label>
                <input className='border rounded border-black px-1' type="text" {...register("email")}/>
                </div>
                <div className='flex gap-2'>
                <label htmlFor="password">Password</label>
                <input className='border rounded border-black px-1' type="password" {...register("password")}/>
                </div>
                <button className='p-1 bg-red-500 rounded text-white font-bold'>Login</button>
                <p>Do you have and account? <Link to="/" className='text-blue-500'>Login</Link></p>
            </form>
        </div>
    )
}
