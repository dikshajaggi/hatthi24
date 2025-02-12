import Footer from "../components/Footer"
import hug from "../assets/hug.gif"
const HugDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex-grow flex flex-col w-full justify-evenly items-center sm:flex p-4 sm:p-0">
                <div className='flex flex-col'>
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy Hug day !!</p>
                    <p className='mt-10'>Maine he banai hai ye....</p>
                </div>
               <img src={hug} alt="propose-day" className='h-100 w-100' />
            </div>
            <Footer />
        </div>
    )
}

export default HugDay
