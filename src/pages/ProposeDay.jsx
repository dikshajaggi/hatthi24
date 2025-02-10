import React from 'react'
import Footer from '../components/Footer'
import propose from "../assets/propose.png"

const ProposeDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex-grow flex w-full justify-evenly items-center">
                <div className='flex flex-col'>
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy propose day !!</p>
                    <p>Are you ready to have kalesh with me....</p>
                    <p>for the rest of your life??</p>
                    <p>I know the answer is YES!</p>
                </div>
                <img src={propose} alt="propose-day" className='h-100 w-100' />
            </div>
            <Footer />
        </div>
    )
}

export default ProposeDay
