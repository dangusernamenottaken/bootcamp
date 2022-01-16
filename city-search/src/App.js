import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [city,setCity] = useState("")
  const [list,setList] = useState([])
  const handleChange = (event) => {
       setCity(event.target.value)
       console.log(city)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
   // console.log("wow")

    fetch(`http://ctp-zip-api.herokuapp.com/city/${city.toUpperCase()}`).then((response)=>{
      response
      .json()
      .then((data)=>{
        console.log(data)
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
        <form>
          <label>City:
          <input
          value = {city}
          onChange = {handleChange}/>
          </label>
          <button type = "submit"
          onClick = {handleSubmit}>Submit</button>
        </form>
        <div id = "wow">
          {list && list.map((ele,idx)=>{
            return(
              <><p key = {list.idx}>{ele}</p></>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
