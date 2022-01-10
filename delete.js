//const { start } = require("@popperjs/core");


let count = 0;
let rowButton = document.getElementById("roww")
console.log(rowButton)
let rectArray = []
let x = 75
let first = document.getElementById("myCanvas");
start = first.getContext("2d");
rowButton.addEventListener("click",()=>{
     if(count==0){
    start.save()
 
start.beginPath();
start.rect(5, 100, 37, 25);
start.stroke();
rectArray[count] = start
count++;


}
else if(count>0){
//for(let i = 0; i<rectArray.length; i++){
start.save()
    let next = document.getElementById("myCanvas");
    start = next.getContext("2d");
    start.beginPath();
    
start.rect(5,x, 37, 25);
x=x-25
start.stroke();
rectArray[count] = start
count++;

     
start.closePath();



//}

}

})
let delRow = document.getElementById("deleteRow")
console.log(delRow)
r
delRow.addEventListener("click",()=>{
    
    if(count>0){
     x=x+25
    start.clearRect(0, x, 100, 31)
    count--;
    }
})

let column = document.getElementById("column")
column.addEventListener("click",()=>{

})
   

