import React from 'react'
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'

const Days = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <FloatingHearts />
            <div className="flex-grow flex flex-col w-full justify-evenly">
                <div className="w-full flex justify-evenly items-center">
                    <Link to="/rose_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            🌹 Rose Day
                        </button>
                    </Link>
                    <Link to="/propose_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            💍 Propose Day
                        </button>
                    </Link>
                    <Link to="/choco_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            🍫 Chocolate Day
                        </button>
                    </Link>
                    <Link to="/teddy_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            🧸 Teddy Day
                        </button>
                    </Link>
                </div>
                <div className="w-full flex justify-evenly items-center">
                    <Link to="/promise_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            🤝 Promise Day
                        </button>
                    </Link>
                    <Link to="/hug_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            😘 Hug Day
                        </button>
                    </Link>
                    <Link to="/kiss_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            💋 Kiss Day
                        </button>
                    </Link>
                    <Link to="/v_day" >
                        <button style={{ fontFamily: "Pacifico, cursive" }} className='w-[240px] cursor-pointer border-4 border-[#ff9a8d] rounded-lg text-[18px] p-4 transition duration-300 hover:bg-[#ff9a8d] hover:text-white hover:shadow-lg'>
                            💖 Valentine's Day
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Days
