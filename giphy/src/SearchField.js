import React,{Fragment} from 'react'

export default function SearchField(props) {
    return (
        <Fragment>
            
            Search Gifs:
            
 
 
 <input 

 onChange = {props.onChange} 

 
  ></input>
  <button type="submit" 
  onClick = {props.onClick}
  
  >Submit</button> 
        </Fragment>
       
    )
}
