import React from 'react'
import { authenticated } from '../Context/ContextProvides'

export default function Home() {
    const { signOut } = authenticated()

    const handleLogout = async (e) => {
        e.preventDefault()
        await signOut()
    }

    return (
        <>
            <div className='text-blue-700'>HOLAAAAAAAAAAAAAAAAAA</div>
            <button className='bg-red-500 p-2 rounded-md' onClick={handleLogout}>Logout</button>
        </>
    )
}
