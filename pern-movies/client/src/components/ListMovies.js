import React,{Fragment, useEffect, useState} from "react";

const ListMovies = () => {

const [movies,setMovies] = useState([]);
   const getMovies = async () => {

    try{

        const response = await fetch("http://localhost:5000/movies")
        const jsonData = await response.json()
        setMovies(jsonData)
    }
    catch(err){
        console.error(err.message);
    }

   };
        
   
    useEffect(()=>{
        getMovies();
    },[]);
    console.log(movies);
    return(
         <Fragment>
             {""}
        <table className="table mt-5 text-center">
         <thead>
           <tr>
             <th>Description</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
            {/* {<tr>
             <td>John</td>
             <td>Doe</td>
             <td>john@example.com</td>
           </tr>} */}
       {movies.map((movie,id) =>(
           <tr>
               <td key = {movie.id}>{movie.description}</td>
               <td key = {movie.id}>Edit</td>
               <td>
                   <button className = "btn btn-danger">Delete</button>
                   </td>
           </tr>
       ))}
         </tbody>
       </table></Fragment>
    );
};

export default ListMovies;