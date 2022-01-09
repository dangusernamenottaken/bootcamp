
document.getElementById("right").style.cssFloat = "right"
document.getElementById("left").style.cssFloat = "justify"
let z;
function wow(){
    let e = document.getElementById("id")
    e.innerHTML = "I'm right"
  /*  let t = document.createTextNode("I'm right")
    e.appendChild(t)
    document.body.appendChild(e)
    z = 0;
  */  
}

function woww(){
    let e = document.getElementById("id")
    e.innerHTML = "No, I'm right!"
    /*let e = document.createElement("p");
    let t = document.createTextNode("No, I'm right!")
    e.appendChild(t)
    document.body.appendChild(e)
    z = 1;*/
}

const mouse =document.getElementsByClassName("h")
console.log(mouse)
mouse[0].addEventListener("mouseover", function(event){
  
alert("Hey, I told you not to hover over me!")
})

//form.addEventListener("submit",function(event){
   // event.preventDefault()
   // const b = document.getElementById("exampleInputPassword1").value
  function onSubmit(){
    const pass = document.getElementById("exampleInputPassword1").value
    const y = document.getElementById("header")
    //const form = document.querySelector("form")
   if(pass==="12345678"){
        y.innerHTML = "y"
        return 1
    }
    else{
        alert("Wrong password")
        return 0
    }

}





    

