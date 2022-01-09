let count = 0;
const rowButton = document.getElementById("roww")
console.log(rowButton)
let rectArray = []
rowButton.addEventListener("click",()=>{
     if(count==0){
    var first = document.getElementById("myCanvas");
 start = first.getContext("2d");
start.beginPath();
start.rect(20, 20, 150, 100);
start.stroke();
rectArray[count] = start
count++;
}
else if(count>0){
//for(let i = 0; i<rectArray.length; i++){
    let next = document.getElementById("myCanvas");
    start = next.getContext("2d");
    start.beginPath();
start.rect(20, -80, 150, 100);
start.stroke();
rectArray[count] = start
count++;
//}

}

})
