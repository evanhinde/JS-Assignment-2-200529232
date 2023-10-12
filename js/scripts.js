// constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColor = document.getElementById("custColor");
const randColor = document.getElementById("randColor");
const imageSelect = document.getElementById("imageSelect");

//const imageArray = [document.query]
const imageArray = document.getElementById("imageArray");

// function to change bg color from user input and add student id
function changeCustomColor() {
    // when clicked studentId is made visible
    myStudentId.textContent = "200529232";
    // storing input into variable
    const customNumber = customNumberInput.value;
    // if else ladder for color parameters
    if (customNumber <  0 || customNumber > 100) {
        document.body.style.backgroundColor = "red";
    } 
    else if (customNumber > 0 && customNumber < 20) {
        document.body.style.backgroundColor = "green";
    }
    else if (customNumber > 19 && customNumber < 40) {
        document.body.style.backgroundColor = "blue";
    }
    else if (customNumber > 39 && customNumber < 60) {
        document.body.style.backgroundColor = "orange";
    }
    else if (customNumber > 59 && customNumber < 80) {
        document.body.style.backgroundColor = "purple";
    }
    else if (customNumber > 79 && customNumber < 101) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // creating random value between 1-100
    const randomValue = Math.floor(Math.random() * 100);
    // if else ladder for random number cases
    if (randomValue <  0 || randomValue > 100) {
        document.body.style.backgroundColor = "red";
    } 
    else if (randomValue > 0 && randomValue < 20) {
        document.body.style.backgroundColor = "green";
    }
    else if (randomValue > 19 && randomValue < 40) {
        document.body.style.backgroundColor = "blue";
    }
    else if (randomValue > 39 && randomValue < 60) {
        document.body.style.backgroundColor = "orange";
    }
    else if (randomValue > 59 && randomValue < 80) {
        document.body.style.backgroundColor = "purple";
    }
    else if (randomValue > 79 && randomValue < 101) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    // creating empty array to store options
    const optionList = []; 
    // for loop to push array items to optionList
    for (let i = 0; i < imageArray.children.length; i++) {
        optionList.push(imageArray.children[i]);
    }
    // for loop to fill select box with options
    for (let i = 0; i < optionList.length; i++) {
        newOption = document.createElement("option");
        newOption.value = "Image " + (i + 1);
        imageSelect.appendChild(newOption);
        newOption.textContent = "Image" + (i + 1);
    }
}

// function to change image
function changeImage() {
    // variable to store which image selction has been chosen
    var selectedImage = imageSelect.value;

    // for loop to make all images invisible
    for (let i = 0; i < imageArray.children.length; i++) {
        imageArray.children[i].style.display = "none";
    }
    // switch case statement taking in selected image and displaying it
    switch (selectedImage) {
        case "Image 1": 
            imageArray.children[0].style.display = "block";
            break;
        case "Image 2": 
            imageArray.children[1].style.display = "block";
            break;
        case "Image 3": 
            imageArray.children[2].style.display = "block";
            break;
        case "Image 4": 
            imageArray.children[3].style.display= "block";
            break;
        case "Image 5": 
            imageArray.children[4].style.display = "block";
            break;
        default:
            break;
    }
}

// event listeners for on click event of buttons and select
custColor.addEventListener('click', changeCustomColor);
randColor.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

