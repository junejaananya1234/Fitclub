import Gym from '../../Images/Training.png'
import Group from '../../Images/Girl.png'
const Hero = ()=>{
    return(
        <>
        <div className='w-full h-96  flex pt-10 gap-20  '>
    <div className='flex  flex-col gap-3 pt-8 ml-20'>
     <section>
     <h1 className='text-slate-300 text-sm text-left ml-14 '>TRAIN SMARTER. GET STRONGER</h1>
     </section>
     <section>
     <p className='text-white font-bold text-4xl text-left ml-14'>Get Healthy Body With</p>
     </section>
     <section className='font-bold text-4xl text-orange-600 text-left ml-14'>
     The Perfect Exercises
     </section>
     <section className='text-white text-left ml-14'>
        <button className='border border-solid border-white px-5 py-3 rounded-full'>Book a Class</button>
     </section>
    </div>
    <div className=''>
     <img src={Gym} className='h-80'></img>
    </div>
        </div>


        </>
    )
}
export default Hero;