import React from 'react'

export default function GifCard_Component(props) {
     const {trendingData} = props
     console.log(trendingData)
    return (
        <div>
            {trendingData && trendingData.map((ele,idx)=> {
               
                return(
                   
                  
                   
            <><h2 key = {idx}>
                <img src = {ele.images.original.url.toString()}></img>
                </h2>
                </> 
                )

            })}
          <h2>Hello</h2>
        </div>
    )
}
