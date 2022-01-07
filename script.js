//1) Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"))
//2) Select the section with an id of container using querySelector. not working
console.log(document.querySelector("#container"))
//3) Select all of the list items with a class of "second".
console.log(document.querySelectorAll(".second"))
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("ol li.third"))
//5)Give the section with an id of container the text "Hello!".
const wow = document.querySelector("#container")
const element = document.createElement("p")
element.innerHTML = "Hello!"
wow.append(element)
//6) Add the class main to the div with a class of footer.
const foot = document.querySelector(".footer")
foot.classList.add("main")
//7) Remove the class main on the div with a class of footer.
foot.classList.remove("main")
//8) Create a new li element.
const lili = document.createElement("li")
//9) Give the li the text "four".
lili.innerHTML = "four"
//10) Append the li to the ul element.
const ulul = document.querySelector("ul")
ulul.append(lili)
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const backG = document.getElementsByTagName("ol")
for(let i = 0; i < backG.length; i++){
    backG[i].style.backgroundColor = "green"

}
//13) Remove the div with a class of footer.

let uo = document.querySelector('.footer')
uo.remove()