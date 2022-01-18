import "./App.css"
import React,{useState,useEffect} from 'react';

import SearchField from "./SearchField"
import GifCard_Component from "./GifCard_Component";
//http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3
function App() {
const [trendingData,setTrendingData] = useState([])
  const [list,setList] = useState([])
  const [loading,setLoad] = useState(true)
  const getTrendingData = () => {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3").then((response)=>{
     response
     .json()
     .then((data) => {
     console.log(data) 
    })
     .catch((err) =>{  
       console(err);
     });
    });

  }
  useEffect(()=>{
    getTrendingData();
  },[])
  const handleChange = (event) => {
               event.preventDefault()
             //setZipCode(event.target.value)
            // console.log(zipCode)

  }
  
  fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=crZ51SXbdB3siSVYVP0djB4JSuM3guA3").then((response)=>{
     response
     .json()
     .then((response) => {
     console.log("Trending Data",response.data) 
     setTrendingData(response.data)
     
   
      
      
     
     })
     .catch((err) =>{  
       console(err);
     });
    });
     
   
  return (
    <div className="App">
      <header className="App-header">
      
      <div id = "wow">
      <SearchField  />
      <GifCard_Component/>


      </div>
      </header>
    </div>
  );
  }
export default App;
