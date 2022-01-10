let count = 0;
const rowButton = document.getElementById("roww")
console.log(rowButton)
let rectArray = []
let x = 0

rowButton.addEventListener("click",()=>{
     if(count==0){
    var first = document.getElementById("myCanvas");
 start = first.getContext("2d");
start.beginPath();
start.rect(20, 100, 150, 100);
start.stroke();
rectArray[count] = start
count++;


}
else if(count>0){
//for(let i = 0; i<rectArray.length; i++){
    let next = document.getElementById("myCanvas");
    start = next.getContext("2d");
    start.beginPath();
    
start.rect(20,x, 150, 100);
x=x-90
start.stroke();
rectArray[count] = start
count++;
let everything = document.querySelector(".everything")
let z = 100
everything.setAttribute("top",z)
z=z+100



//}

}

})
