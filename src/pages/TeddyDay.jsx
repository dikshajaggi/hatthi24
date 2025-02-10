import Footer from '../components/Footer'
import teddy from "../assets/teddy.mp4"

const TeddyDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex-grow flex flex-col w-full justify-evenly items-center p-6 sm:flex sm:p-0">
                <div className='flex flex-col'>
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy Teddy day !!</p>
                </div>
                <video className='h-110 w-110' controls>
                    <source src={teddy} type="video/mp4" />
                </video>
            </div>
            <Footer />
        </div>
    )
}

export default TeddyDay
