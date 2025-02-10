import Footer from "../components/Footer"
import promise from "../assets/promise.m4a"
const PromiseDay = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex-grow flex flex-col w-full justify-evenly items-center sm:flex p-4 sm:p-0">
                <div className="flex flex-col mt-6">
                    <p className='text-[22px]' style={{ fontFamily: "Pacifico, cursive" }}>Happy Promise day !!</p>
                    <audio className="mt-10 mb-4" controls>
                        <source src={promise} type="audio/mp4" />
                    </audio>
                    <p className="mt-4 mb-4">Ye to maine bta dia hai bohot baar <br></br>
                        Ki hai mujhe tumse kitna pyaar</p>
                    <p className="mb-4">To chlo ab krte hai kuch kaam ki baat <br></br>
                        Jeeni jo hai poori life tumhare saath</p>
                    <p className="mb-4">Sun lo mere tumse jo hai ye waadein <br></br>
                        Mujhe tumhare saath banani hai bohot yaadein</p>
                    <p className="mb-4">I know at times ho jati hu thodi zda rude<br></br>
                        But, I promise ki humesha theek kr dugi tumhara mood</p>
                    <p className="mb-4">Wait krugi tumhara humesha...chahe ho jao kitne bhi late<br></br>
                        Zda daaru peekr aaye to nhi kholugi ghr ka gate</p>
                    <p className="mb-4">Bina kisi demand ke krugi tumhari sewa<br></br>
                        Bss tum mujhe koi insecurities ka reason mt dena</p>
                    <p className="mb-4">Mummy, papa, shanno...sbko krugi bohot pyar<br></br>
                        Tum bss kbhi kbhi chai aur maggie khila dena yaar</p>
                    <p className="mb-4">Kudh se phele... krugi poori tumhari saari dreams<br></br>
                        Tum time pe meri insta pe bheji hui dekhna sb reels</p>
                    <p className="mb-4">Hai tumhare lye ye situation win-win<br></br>
                        Kabhi kr lia kro mere saath twining</p>
                    <p className="mb-4">Chd ke kabhi na tumhe jaugi<br></br>
                        Tumhari hrr khushi...hrr dukh apna smjh ke nibhaugi</p>
                    <p className="mb-4">Ab lines aur mil nhi rhi hai kuch khass<br></br>
                        Btao? Can you spend your whole life listening to my bkwaas?</p>
                    <p className='mt-10 mb-4'>Maine he likhi hai ye....</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PromiseDay
