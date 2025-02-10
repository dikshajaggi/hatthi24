import FloatingEle from "../components/FloatingEle"
import Footer from "../components/Footer"

const ChocoDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <FloatingEle />
            <div className="flex-grow flex w-full justify-evenly items-center">
                <div className='flex flex-col'>
                    <p className='text-[22px] mb-6' style={{ fontFamily: "Pacifico, cursive" }}>Happy Chocolate day !!</p>
                    <p style={{ fontFamily: "Courgette, cursive" }}>You tease, you nag, you drive me mad</p>
                    <p style={{ fontFamily: "Courgette, cursive" }}>Yet without you, I&apos;d be so sad!</p>
                    <p style={{ fontFamily: "Courgette, cursive" }}>But one thing is true, come what my way</p>
                    <p style={{ fontFamily: "Courgette, cursive" }}>I&apos;d pick you over chocolate any day!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChocoDay
