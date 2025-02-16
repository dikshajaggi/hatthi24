import vday from "../assets/vday.jpeg"
import Footer from "../components/Footer"
import FloatingHearts from "../components/FloatingHearts"

const VDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <FloatingHearts />
            <div className="flex-grow flex flex-col w-full justify-evenly items-center sm:flex-row p-4 sm:p-0">
                <div className='flex flex-col'>
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy Valentine&apos;s day love !!</p>
                    <p className="mt-6 w-[500px]" style={{ fontFamily:  "Courgette, cursive"}}>The date or day doesn&apos;t matter...instead you and the time that we spend together is what that matters... <br></br>I love you jaan! Thank you so much for the chocolate!! <br></br>I love it! </p>
                </div>
               <img src={vday} alt="v-day" className='h-100' />
            </div>
            <Footer />
        </div>
    )
}

export default VDay
