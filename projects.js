/* Name: Fiona Ang
File: projects.js
Date: March 4, 2025
Description: This is a Javascript file for Assignment 1 - projects.js */

//variables
const projects = document.getElementsByClassName('project');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

//function displayProject
function displayProject(index) {
    //for loop
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove('visible');
    }
    //show the current project
    projects[index].classList.add('visible');
}

//event listeners for 'Next' button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    displayProject(currentIndex);
});

//event listeners for 'Previous' button
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    displayProject(currentIndex);
});

//to display the first project
displayProject(currentIndex);