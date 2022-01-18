import "./App.css"
import React,{useState,useEffect} from 'react';

import SearchField from "./SearchField"
import GifCard_Component from "./GifCard_Component";

function App() {
const [zipCode,setZipCode] = useState("")
  const [list,setList] = useState([])
  const [loading,setLoad] = useState(true)
  const handleChange = (event) => {
               event.preventDefault()
             setZipCode(event.target.value)
             console.log(zipCode)

  }
  fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3").then((response)=>{
     response
     .json()
     .then((data) => {
     console.log(data) 
    
     // wow.innerText = arr[1]
   
      
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
        
          onChange = {handleChange}/>
  </label>
  <input type="submit" value="Submit" />
</form>
      <div id = "wow">
      <SearchField handleChange = {handleChange} />

      </div>
      </header>
    </div>
  );
  }
export default App;
