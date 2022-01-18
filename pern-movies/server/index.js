
const express = require("express") //requiring express module

const app = express();
const cors = require("cors")
const pool = require("./db")
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.post("/pizzas",async (req,res)=>{
    try{
      //  {"topping":"cheese"}
const {topping} = reg.body; 
const newTopping = await pool.query("INSERT INTO pizzatable (topping) VALUES ($1) RETURNING *",[topping])
  res.json(newTopping.rows[0])
}catch(err){
        console.error(err.message)
    }
})
app.get("/pizzas", async (req,res)=>{
    try{
        const allTopings = await pool.query("SELECT * FROM pizzatable");
        res.json(allToppings.rows)
    }
    catch(err){
        console.error(err.message)
    }
})
//get one data
app.get("/pizzas/::id", async (req,res)=>{
  try{
     console.log(req.params)
     const { id } = req.params
     const oneData = await pool.query("SELECT * FROM pizzatable WHERE topping id = $1",[id])
     res.joson(oneData,rows[0])
  }
  catch(err){
      console.error(err.message)
  }
})
//Update 
//id,column name,newdata
app.put("/pizzas:id",async (req,rest)=>{
    try{

        const { id } = req.params;
        const {topping} = req.body;
        const updateDate = await pool.query("UPDATE pizzatable SET topping id = $1 WHERE topping = $2",[id,topping])
        rest.json("Topping was updated")

    }
    catch(err){
        console.error(err.message)
    }
})
app.listen(PORT,() => {

    console.log(`server has started on port ${PORT}`)
})
