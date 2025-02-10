import React from 'react'
import "./styles.css"
import Footer from '../components/Footer'

const RoseDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex-grow flex w-full justify-evenly items-center">
                <div className="loveNote">
                    <h4>Happy Rose Day Haathi</h4>
                    <p>Yellow rose because you know...... yellow is my favourite color</p>
                </div>
                <div className="rose">
                    <div className="flower">
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                        <div className="petal"></div>
                    </div>
                    <div className="leaf">
                        <div className="stem"></div>
                        <div className="leafs"></div>
                        <div className="leafs"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RoseDay
