//Assignment #2

//forEach()

function myEach(myArr,callBack){
    for(let i = 0; i < myArr.length; i++){
           callBack(myArr[i])
    }
}
let myArr = [7, 5, 4, 9, 12]



function callBack(item){
console.log(item);
}
myEach(myArr,callBack)
/*
7
5
4
9
12
*/

//map()
let myArrr = [8, 5, 4, 9, 12]
function myMap(myArrr,callBack){
        let newArray = [];
        for(let i = 0; i<myArrr.length; i++){
           newArray[i] = (myArrr[i]  + 7);
        }
        callback(newArray)
        
 
 
}

function callback(item){
      console.log("(Old array / 2) + 7")
      console.log(item)
    }

    myMap(myArrr,callback)
   // (Old array / 2) + 7
//  [ 15, 12, 11, 16, 19 ]

//filter()
let arr = [3,4,2,7,9]
function myFilter(arr,call){
    let newArray = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
            
        newArray[count] = arr[i];
        count++;
        }
    }
    call(newArray)

}
function call(item){
    console.log("old array if the value is perfectly divisible by 2")
    console.log(item)
}

myFilter(arr,call)

//old array if the value is perfectly divisible by 2
//[ 4, 2 ]

//some() (aka any())
let arraY = [2,1,7,3]
function mySome(arraY,back){
    let truth;
    for(let i = 0; i<arr.length; i++){
        if(arraY[i]>3){
         truth = true;
         break
        }
        else{
            truth = false;
           
        }
         
          
        }
        
        back(truth)
}
function back(item){
    console.log("If a value in array is greater than or = to 3 than true otherwise false")
    console.log(item)
}

mySome(arraY,back)

//If a value in array is greater than or = to 3 than true otherwise false
//true

//every()
let myarr = [3,4,5]
function myEvery(myarr,callingBack){
    let truth;
    for(let i = 0; i<myarr.length; i++){
        if(myarr[i]<20){
            truth = true;
        }
        else{
            truth = false;
            break;
        }

    }
    callingBack(truth)
}
function callingBack(item){
    console.log("if every value in array is less than 20 return true else return false")
    console.log(item)


}
myEvery(myarr,callingBack)

//if every value in array is less than 20 return true else return false
//true

//reduce()
let arrr = [3,4,6]
function myReduce(arrr,callB){
    let multiply = 1;
    for(let i = 0; i<arrr.length; i++){
        multiply*=arrr[i];
    }
    callB(multiply)

}
function callB(item){
    console.log("all values of array multiplied")
    console.log(item)
}

myReduce(arrr, callB)

//all values of array multiplied
//72

//includes()
let aRRAY = ["wow",3,5,7,"no"]
let target = "wo"
let truth;
function myIncludes(aRRAY,target){
    console.log("if array includes target print true else print false")
    for(let i = 0; i < aRRAY.length; i++){
        if(aRRAY[i]==target){
            truth = true
           
            break
        } 
        
        else{
            truth = false
        }
        
    }
         console.log(truth)
    
}
myIncludes(aRRAY,target)

//if array includes target print true else print false
//false

//indexOf()
let arrray = [1, 2, 3, "moo"]
let tarj = "moo"
let index
function myindexOf(arrray, tarj){
    for(let i = 0; i < arrray.length; i++){
           if(arrray[i]==tarj){
               index = i
               break
           }

           else{
               index = -1
           }

    }  
       console.log("prints index of target unless target not there then -1")
       console.log(index)
}

myindexOf(arrray,tarj)
//prints index of target unless target not there then -1
//3

//push()
let aarray = [3,2,"pop",3,23]
let elementToAdd = "wow"
function myPush(aarray,elementToAdd){
  aarray[aarray.length] = elementToAdd
  console.log("array with new element at end of array")
  console.log(aarray)
}

myPush(aarray,elementToAdd)
//array with new element at end of array
//[ 3, 2, 'pop', 3, 23, 'wow' ]

//lastIndexOf()

let arrAY = [5,2,3,7,2]
let tar = 3


function myUnshift(arrAY,tar){
    let idx = -1
   for(let i = 0; i < arrAY.length; i++){
       if(arrAY[i]==tar){
          idx = i
       }
      
   }
   console.log("Index of last instance of target value in array")
   console.log(idx)
}

myUnshift(arrAY,tar)

//Index of last instance of target value in array
//4

//Object.keys()
let obj = {
    z: 2,
    y: "wow",
    x: 7
}
obj.grabKeys = function (){
    for(const key in obj){
        console.log(key)
    }
}
console.log("Keys in Object")
obj.grabKeys()
/*
Keys in Object
z
y
x
*/
//Object.values()
let obj2 = {
    5: "cow",
    "wow": 77,
    7: 32
}
obj2.grabValues = function(){
    for(const keyy in obj2){
        console.log(obj2[keyy])
    }
}
console.log("Values in Object")
obj2.grabValues()

/*
Values in Object
cow
32
77
*/