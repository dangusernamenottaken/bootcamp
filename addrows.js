
/*/*let table = document.getElementsByTagName("table")[0]
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
/*
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
//column.addEventListener("click",()=>{ addColumn()})

let rowButton = document.getElementById("roww")

rowButton.addEventListener("click",()=>{
    addRow()})
let colNum = 3;
let rowNum = 3;
let selectedColor = "red";
let mouseDown = false;

const addRow = () => {
  let content = document.getElementsByTagName("table")[0]

  const row = document.createElement("tr");
  
  row.tagName = "td";
  for (let i = 0; i < colNum; i++) {
    let cell = document.createElement("td")
    row.appendChild(cell)
    //row.style.backgroundColor === "white"
    //const col = document.createElement("tr");
   // cell.className = "col-sm";
    cell.addEventListener("click", (event) => {
      console.log("hey");
      event.preventDefault();
      cell.style.backgroundColor = selectedColor;
    });

    cell.addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseDown = true;
      cell.style.backgroundColor = selectedColor;
    });
    cell.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (mouseDown) {
        mouseDown = false;
      }
    });
    cell.addEventListener("mousemove", (event) => {
      event.preventDefault();
      if (mouseDown) {
        cell.style.backgroundColor = selectedColor;
      }
    });
    //row.appendChild(cell);
  }
  content.appendChild(row);
  rowNum++;
  //return row
};
let color = document.getElementById('fillEmpty')
color.addEventListener("click",()=>{setAllColors()})
const setAllColors = () => {
  let colss = document.getElementsByTagName("td");

  for (let i = 0; i < colss.length; i++) {
    
    if (colss[i].style.backgroundColor != selectedColor) {
      
      colss[i].style.backgroundColor = selectedColor;
    }
  }
};
//let rowButton = document.getElementById("roww")

//rowButton.addEventListener("click",()=>{
   // addRow()})
   let all = document.getElementById('fillAll')
   all.addEventListener("click",()=>{setAll()})
const setAll = () => { 
  const cols = document.getElementsByTagName("td");
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.backgroundColor = selectedColor;
  }
};
let columns = document.getElementById("column")
columns.addEventListener("click",()=>{
    addCol()})
const addCol = () => {
    let content = document.getElementsByTagName("table")[0]
    //const rows = document.createElement("tr");
  const rows = document.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let cell  = document.createElement("td");
    
    //col.className = "col-sm border border-dark box white";
    cell.addEventListener("click", (event) => {
      console.log("hey");
      event.preventDefault();
      cell.style.backgroundColor = selectedColor;
    });
    cell.addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseDown = true;
      cell.style.backgroundColor = selectedColor;
    });
    cell.addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (mouseDown) {
        mouseDown = false;
      }
    });
    cell.addEventListener("mousemove", (event) => {
      event.preventDefault();
      if (mouseDown) {
        col.style.backgroundColor = selectedColor;
      }
    });
    rows[i].appendChild(cell);
  }
  colNum++;
};
let delCol = document.getElementById("deleteColumn")

delCol.addEventListener("click",()=>{
   removeCol()}) 
let removeCol = () => {
  if (colNum === 0) {
    alert("No more columns to remove");
  } else {
    const cells =  document.getElementsByTagName("td")
    const coll = document.getElementsByTagName("tr")
    console.log(cells)
    let last = cells.length/coll.length;
    
    for (let i = 0; i < last; i++) {
      cells[i].remove();
    }
    cells--;
    if (colNum === 0) {
      rowNum = 1;
    }
  }
};
let delRow = document.getElementById("deleteRow")
delRow.addEventListener("click",()=>{
    removeRow()})
const removeRow = () => {
  if (rowNum === 0) {
    alert("No more rows to remove");
  } else {
    let content = document.getElementsByTagName("table")[0]
    console.log(content)
    content.removeChild(content.lastElementChild);
    rowNum--;
    if (rowNum === 0) {
      colNum = 1;
    }
  }
};

const selectColor = (colorVal) => {
  selectedColor = colorVal;
};

const init = () => {
  const cols = document.getElementsByTagName("td");
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.backgroundColor = "white";
    cols[i].addEventListener("click", (event) => {
      console.log("hey");
      event.preventDefault();
      cols[i].style.backgroundColor = selectedColor;
    });
    cols[i].addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseDown = true;
      cols[i].style.backgroundColor = selectedColor;
    });
    cols[i].addEventListener("mouseup", (event) => {
      event.preventDefault();
      if (mouseDown) {
        mouseDown = false;
      }
    });
    cols[i].addEventListener("mousemove", (event) => {
      event.preventDefault();
      if (mouseDown) {
        cols[i].style.backgroundColor = selectedColor;
      }
    });
  }
};

init();
