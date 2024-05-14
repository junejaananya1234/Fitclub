import Gym from '../../Images/Training.png'
import Group from '../../Images/Girl.png'
const Hero = ()=>{
    return(
        <>
        <div>






        </div>
        <div className='w-full h-96  border-2 border-white flex flex-col text-left p-20 gap-2 '>
            <section>
         
           <h1 className='text-slate-300 text-sm'>TRAIN SMARTER. GET STRONGER</h1>

            </section>
            <section>
                <p className='text-white font-bold text-4xl'>Get Healthy Body With</p>
            </section>
            <section className=' font-bold text-4xl text-orange-600'>
                The Perfect Exercises
            </section>
            <section className='text-white '>
               <button className='border-3 border-solid border-white rounded-full'>Book a Class</button>     
            </section>
           <div className='flex justify-center items-start'  >
           
           <img src={Gym} className='h-96'></img>
           </div>
           
          
        </div>

        </>
    )
}
export default Hero;