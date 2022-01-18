import "./App.css"
import React,{useState,useEffect,Fragment} from 'react';
import SearchField from "./SearchField";
import GifCard_Component from "./GifCard_Component";

function App() {
const [img,setImg] = useState("")
  const [list,setList] = useState([])
  //const [loading,setLoad] = useState(true)
  const handleChange = (event) => {
    
             setImg(event.target.value)
             
             
           
  }
  const handleSubmit = (event) => {
  event.preventDefault()
    fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3").then((response)=>{
    response
    .json()
    .then((data) => {
    setList(data)
     })
    .catch((err) =>{  
      console(err);
    });
   });
  
  }
   
  return (

    <div className="App">
      <header className="App-header">

      <div id = "wow">
      
         
              <SearchField> </SearchField>
            
              <GifCard_Component/>
      
      </div>
      </header>
    </div>
  );
  }
export default App;
