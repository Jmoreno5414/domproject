let addParagraphButton = document.getElementById("p-button");
let addImageButton = document.getElementById("img-button");
let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let PCount = 0;
let ImgCount = 0;
let imageArray = ["images/pikachu.png", "images/pikachu.png"];
let imageCounter = 0;


function addtext() {
    imgDiv.style.display = "none";
    pDiv.style.display = "block"
    let newtext = document.createElement("p")
    newtext.innerText = "Hot chocolate is bad today";
    pDiv.appendChild(newtext);
    newtext.style.padding = "10px";
    newtext.style.backgroundColor = "black";
    newtext.style.color = "white";
    PCount ++;
}
function addImage() {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
    let newpikachu = document.createElement("img");
    newpikachu.src = "images/pikachu.png";
    imgDiv.appendChild(newpikachu);
    newpikachu.style.width = "100px";
    ImgCount ++
}


addImageButton.addEventListener("click", addImage);
addParagraphButton.addEventListener("click", addtext);





