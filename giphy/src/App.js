import "./App.css"
import React,{useState,useEffect} from 'react';
//import SearchField from "./SearchField"
//import GifCard_Component from "./GifCard_Component";

function App() {
const [zipCode,setZipCode] = useState("")
  const [list,setList] = useState([])
  const [loading,setLoad] = useState(true)
  const handleChange = (event) => {
    
             setZipCode(event.target.value)
             console.log(zipCode)

  }
  fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3").then((response)=>{
     response
     .json()
     .then((data) => {
     console.log(data) 
      const wow = document.getElementById("wow")
      const bob = JSON.stringify(data)
      const arr = bob.split(",")
      let string = '"Zipcode":"10016"'
      if(zipCode===5){
        console.log(zipCode)
      }
     // wow.innerText = arr[1]
      for(let i  = 0; i < arr.length; i++){
        if(arr[i]===string){
         // console.log(arr[i])
          wow.innerText = arr[i]
        }
      }
      console.log(arr[1])
     
     })
     .catch((err) =>{  
       console(err);
     });
    });
     
   
  return (
    <div className="App">
      <header className="App-header">
      <form>
  <label>
    Search Gifs:
    <input 
          value = {zipCode}
          placeholder="XXXXX"
          onChange = {handleChange}/>
  </label>
  <input type="submit" value="Submit" />
</form>
      <div id = "wow">
      
      </div>
      </header>
    </div>
  );
  }
export default App;
