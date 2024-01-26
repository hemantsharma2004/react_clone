import SecondContainer from "./secondContainer";
import FirstContainer from "./firstContainer";
import Header from "./header";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSLice";

const Browse=()=>{
      const dispatch=useDispatch();
     useEffect(()=>{
          getNowPlaying();  
     },[])

     const getNowPlaying=async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
         const json= await data.json();

         

           dispatch(addMovie(json.results));
     }

       
      


     
    

     return(
         <div>
             <Header />
             <FirstContainer />
             <SecondContainer />
         </div>
     )
}

export default Browse;