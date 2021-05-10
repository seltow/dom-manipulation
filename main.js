// 1.
console.log(document.querySelectorAll("id"));


// 2.
var mainHeading = document.getElementById("main-heading");
mainHeading.innerText = "New Dom Layout";
mainHeading.classList.add('bg-success');


// 3.
var para1 = document.getElementById("para1");
para1.innerText = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

var para2 = document.getElementById("para2");
para2.innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";


// 4.
const button  = document.querySelector(".btn");
button.addEventListener("click", () =>{
    var para4 = document.getElementById("para4");
    para4.innerText = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});


// 5.

var card = document.getElementsByClassName("card");
for( var i = 0; i < card.length; i++){
    card[i].classList.remove("bg-white");
}

var red = document.getElementById("red");
red.classList.add('bg-danger');

var blue = document.getElementById("blue");
blue.classList.add("bg-primary");

var yellow = document.getElementById("yellow");
yellow.classList.add("bg-warning");

var green = document.getElementById("green");
green.classList.add("bg-success");

var black = document.getElementById("black");
black.classList.add("bg-dark");