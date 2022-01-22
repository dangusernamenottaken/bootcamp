
const express = require("express") //requiring express module

const app = express();
const cors = require("cors")
const pool = require("./db")
//const PORT = 8000;

app.use(cors());
app.use(express.json()); //req.body
//create a movie list
 app.post("/movies",async(req,res)=>{
   try{
      // {"topping":"cheese"}
//const {topping} = reg.body; 
//const newTopping = await pool.query("INSERT INTO pizzatable (topping) VALUES ($1) RETURNING *",[topping])
  //res.json(newTopping.rows[0])
  const {description} = req.body;
  const newMovie = await pool.query("INSERT INTO movies (description) VALUES($1) RETURNING *",[description]);
  res.json(newMovie.rows[0])
}catch(err){
        console.error(err.message)
    }
})
//get all movies
app.get("/movies",async(req,res)=>{
    try{
     const allMovies = await pool.query
     ("SELECT * FROM movies")
     res.json(allMovies.rows)
    } catch(err){
        console.error(err.message)
    }
})
//get a specific movie
app.get("/movies/:id",async (req,res)=>{
    try{
        const {id} = req.params
        const movie = await pool.query("SELECT * FROM movies WHERE movie_id = $1",[id])
        res.json(movie.rows[0])
    } catch(err){
        console.error(err.message);
    }
} )
//update a movie
app.put("/movies/:id",async (req,res)=>{
    try{
    const {id} = req.params
    const {description} = req.body;
    const updateMovie = await pool.query("UPDATE movies SET description = $1 WHERE movie_id = $2",
    [description,id]);
    res.json("Movies were updated");
    }
    catch (err){
     console.error(err.message)

    }
})
// delete a movie
app.delete("/movies/:id",async (req,res)=>{
try{
 
     const {id} = req.params;
     const deleteMovie = await pool.query("DELETE FROM movies WHERE movie_id = $1",
     [id]);
  res.json("Movie was deleted")
 }


catch(err){
    console.error(err.message)
}




});
// app.get("/pizzas", async (req,res)=>{
//     try{
//         const allTopings = await pool.query("SELECT * FROM pizzatable");
//         res.json(allToppings.rows)
//     }
//     catch(err){
//         console.error(err.message)
//     }
// })
// //get one data
// app.get("/pizzas/::id", async (req,res)=>{
//   try{
//      console.log(req.params)
//      const { id } = req.params
//      const oneData = await pool.query("SELECT * FROM pizzatable WHERE topping id = $1",[id])
//      res.joson(oneData,rows[0])
//   }
//   catch(err){
//       console.error(err.message)
//   }
// })
// //Update 
// //id,column name,newdata
// app.put("/pizzas:id",async (req,rest)=>{
//     try{

//         const { id } = req.params;
//         const {topping} = req.body;
//         const updateDate = await pool.query("UPDATE pizzatable SET topping id = $1 WHERE topping = $2",[id,topping])
//         rest.json("Topping was updated")

//     }
//     catch(err){
//         console.error(err.message)
//     }
// })
app.listen(5000,() => {

    console.log(`server has started on port 5000`)
})
