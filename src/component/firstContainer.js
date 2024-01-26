import {  useSelector } from "react-redux";
import Video from "./videoBackground";
import Title from "./title";

const FirstContainer=()=>{

     const movie=useSelector((store)=> store.movies?.NowPlayingMovies)
     if(movie == null) return;
     const mainMovie=movie[0];
     console.log(mainMovie)

     const {
         id,
         original_title,
         overview,
     }=mainMovie;

     return(
         <div>
               <Video  movieId={id}/>
               <Title title={original_title} overview={overview} />
         </div>
     )
}

export default FirstContainer;