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
                <li>Home</li>
                <li>Programes</li>
                <li>Price</li>
                <li>Class</li>
                <li>Location</li>
            </ul>
        </section>
        <section className="border-3 border-white">
            <button> Get Free Trial</button>
        </section>
       </div>

        </>
    )
}

export default Header;