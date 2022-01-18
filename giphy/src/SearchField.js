import React from 'react'

export default function SearchField(props) {
    return (
        <div>
            Search Gifs:
 <input onChange = {props.onChange}  ></input>
 <button>Submit</button>
        </div>
    )
}
