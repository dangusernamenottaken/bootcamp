
import './App.css';
import React,{useState} from 'react';
import stringify from 'fast-json-stable-stringify';

function App() {
  const [zipCode,setZipCode] = useState("")
  const [list,setList] = useState([])
  const handleChange = (event) => {
    
             setZipCode(event.target.value)
             console.log(zipCode)

  }
  fetch("http://ctp-zip-api.herokuapp.com/zip/10016").then((response)=>{
     response
     .json()
     .then((data) => {
     //console.log(data) 
      const wow = document.getElementById("wow")
      const bob = JSON.stringify(data)
      const arr = bob.split(",")
      let string = '"Zipcode":"10016"'
      if(zipCode===5){
        console.log
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
    Zip Code::
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
