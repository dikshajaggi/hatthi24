import React from 'react'
import Footer from '../components/Footer'
import FloatingHearts from '../components/FloatingHearts'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <FloatingHearts />
            <div className='flex flex-col justify-center items-center flex-grow'>
                <p className='mb-6 text-2xl text-center' style={{ fontFamily: "Pacifico, cursive" }}>Hi, haathi 🐘!! This is for you...</p>
                <Link to="/days" >
                    <button className='cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[16px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>Open Your Valentine’s Portal</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage