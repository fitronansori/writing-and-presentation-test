// Cara Select Element HTML dengan DOM
let headerOne = document.getElementById("header-1");
let headerTwo = document.getElementsByClassName("header-2");
let headerThree = document.getElementsByTagName("h3");
let para1 = document.querySelector("p");
let para2 = document.querySelectorAll(".para-1");

// Cara Manipulasi Element HTML dengan DOM
headerOne.innerHTML = "Hello World";
headerOne.style.color = "red";
headerOne.style.backgroundColor = "black";
headerOne.style.padding = "20px";
headerOne.style.textAlign = "center";
headerOne.style.borderRadius = "10px";
// Merubah attribute
headerOne.setAttribute("name", "header-1");
headerOne.setAttribute("id", "header-1");

// console.log(headerOne);

let wrapper = document.getElementById("wrapper");
// membuat element baru
let newHeader = document.createElement("h1");
// membuat text node
let newHeaderText = document.createTextNode("Hello World");
// menggabungkan text node dengan element baru
wrapper.appendChild(newHeaderText);

// Event Javascript
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Hello World");
});
