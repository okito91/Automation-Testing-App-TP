// Create TypeScript file and add following Dom Manipulations
// Change the text of the h1 tag.
var h1 = document.getElementById("title");
h1.textContent = "I have changed!";
// Change the color of the paragraph inside div.content.
var divParagraph = document.querySelector(".content p");
divParagraph.style.color = "red";
// Change the list items textContent for example to be list of fruits.
var fruitslist = ["Apple", "Banana", "Cherry"];
var listItems = document.querySelectorAll("#list li");
listItems[0].textContent = fruitslist[0];
listItems[1].textContent = fruitslist[1];
listItems[2].textContent = fruitslist[2];
// Add a button and apply border style "1px solid red" to it. -->
var button = document.createElement("button");
button.textContent = "Don't click";
button.style.border = "1px solid red";
document.body.appendChild(button);
