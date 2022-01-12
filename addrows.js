
let table = document.getElementsByTagName("table")[0]
//console.log(table)
function addRow(){

    let row;
    row = document.createElement("tr")
//console.log(table)
  
  //let insert = table.insertRow
  for( let i = 0; i<2; i++){
   //row.insertCell(i)
     let cell = document.createElement("td")
    row.appendChild(cell)
  }
 table.appendChild(row)

 function deleter(){
    
  if(table.parentNode)
table.parentNode.removeChild(table)
}
 let delRow = document.getElementById("deleteRow")
 delRow.addEventListener("click",()=>{ deleter() })
}

//let count = 0;
let rowButton = document.getElementById("roww")
//console.log(rowButton)
//let rectArray = []
//let x = 75
//let first = document.getElementById("myCanvas");
//start = first.getContext("2d");
rowButton.addEventListener("click",()=>{ addRow()})

    //      if(count==0){
//     start.save()
 
// start.beginPath();
// start.rect(5, 100, 37, 25);
// start.stroke();
// rectArray[count] = start
// count++;


// }
// else if(count>0){
// //for(let i = 0; i<rectArray.length; i++){
// start.save()
//     let next = document.getElementById("myCanvas");
//     start = next.getContext("2d");
//     start.beginPath();
    
// start.rect(5,x, 37, 25);
// x=x-25
// start.stroke();
// rectArray[count] = start
// count++;

     
// start.closePath();



// //}

// }

// })

/*function deleter(){
   
    document.getElementsByTagName("td").remove()
   
}
let delRow = document.getElementById("deleteRow")
//rowButton.addEventListener("click",()=>{ addRow()})  
delRow.addEventListener("click",()=>{ deleter() })

 */

// let delRow = document.getElementById("deleteRow")
// console.log(delRow)
// //oldRow = document.getElementsByClassName("row")
// delRow.addEventListener("click",()=>{
//     let r = document.getElementsByClassName("col-sm")
//    r.remove()

// })

// let column = document.getElementsByClassName("col-sm ")
// column.addEventListener("click",()=>{

// })
   

//let table = document.getElementsByTagName("table")[0]
let col;
col = document.createElement("tr")


   
//console.log(table)

function addColumn(){
    let cel = document.createElement("td")
  //let insert = table.insertRow
  for( let i = 0; i<2; i++){
   //col.insertCell(i)
     
    col.appendChild(cel)
  }
 table.appendChild(col)
}
/*
//let count = 0;
let rowButton = document.getElementById("roww")
//console.log(rowButton)
//let rectArray = []
//let x = 75
//let first = document.getElementById("myCanvas");
//start = first.getContext("2d");
*/
column.addEventListener("click",()=>{ addColumn()})

