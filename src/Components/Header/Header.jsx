import { FaDumbbell } from "react-icons/fa";
const Header = () =>{
    return(
        <>
       <div  className="flex justify-around text-white  shadow-2xl">
        <section className="flex gap-2">
             <p><FaDumbbell  className="text-5xl text-orange-600"/></p>
            <h1 className="font-bold text-4xl tracking-widest ">FitClub</h1> 
           
        </section>
        <section>
            <ul className="flex gap-6">
                <li className="hover:text-orange-600 cursor-pointer text-bold">Home</li>
                <li className="hover:text-orange-600 cursor-pointer text-bold">Programes</li>
                <li className="hover:text-orange-600 cursor-pointer text-bold">Price</li>
                <li className="hover:text-orange-600 cursor-pointer text-bold">Class</li>
                <li className="hover:text-orange-600 cursor-pointer text-bold">Location</li>
            </ul>
        </section>
        <section>
            <button className="border border-3 border-white px-6 py-2 rounded-full hover:text-slate-200, text-bold"> Get Free Trial</button>
        </section>
       </div>

        </>
    )
}

export default Header;