import "./styles.css"
import Footer from '../components/Footer'
import FloatingRose from "../components/FloatingRose"

const RoseDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <FloatingRose />
            <div className="flex-grow flex flex-col w-full justify-evenly items-center sm:flex">
                <div className="loveNote mb-100 p-6 sm:mb-1 sm:p-0">
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy Rose day !!</p>
                    <p>Yellow rose because you know...... yellow is my favourite color</p>
                </div>
                <div className="rose ">
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
