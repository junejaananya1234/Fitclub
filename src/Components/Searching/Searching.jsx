
import { IoSearchCircleSharp } from "react-icons/io5";
import { useState,useEffect } from "react";

const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e967742ccmshe87417d50838fa0p19bae3jsn6d941a75f7da',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const Searching = ()=>{
 const [exercise, setExercise] = useState([])
 
 return(
        <>
        <div className="w-full h-20 bg-white bg-opacity-5 rounded-2xl  shadow-md ">
          <section className="flex justify-center  ">
              <input type="text" className="w-[45%] h-10 mt-4 outline-none bg-orange-600  bg-opacity-40 border border-solid border-black p-5 py-6 rounded-3xl placeholder:text-white shadow-xl" placeholder="Find the best exercise for you... "></input>
              <button> <IoSearchCircleSharp className=" text-5xl mt-3 text-white text-opacity-50 shadow-xl " /></button>
          </section>
        </div>
        </>
    )
}
export default Searching;