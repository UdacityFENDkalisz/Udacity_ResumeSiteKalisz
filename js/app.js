/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

'use strict';
/**
 * Define Global Variables
 * 
*/

// build an array from all the sections
const sections = Array.from(document.getElementsByTagName("section"));
let section = document.querySelectorAll(".section");
// selecting the ul tag to append the navigation items
const navBar = document.getElementById("navbar__list");
const nameSection = document.querySelectorAll('.section h2');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

for (let i = 0; i < sections.length; i++) {
    let navBarItem = document.createElement("li");
    let navBarItemLink = document.createElement("a");
    navBarItemLink.textContent = nameSection[i].innerHTML;
    navBarItemLink.setAttribute("href", "#" + sections[i].id);
    navBarItemLink.setAttribute("class", "anchors");
    navBarItemLink.setAttribute("id", i);
    navBarItem.setAttribute("class", "navbar__item")
    navBarItem.appendChild(navBarItemLink)
    navBar.appendChild(navBarItem)
}


// Add class 'active' to section when near top of viewport


window.addEventListener("scroll", function activeSection() {
    for (section of sections) {
        let position = section.getBoundingClientRect(); // returns information about the size of an element and its position relative to the viewport

        if (position.top <= 150 && position.bottom >= 150) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    }
});

// Scroll to anchor ID using scrollTO event
/* navbar.addEventListener("click", function scroll(e){
    e.preventDefault();

    document.querySelectorAll('.navbar__item').forEach(anchor => {
        for (let i=0; i < section.length; i++){
            let location = section[i];
            location.scrollIntoView ({
                    behavior: 'smooth'
                })
    };
});
});
*/
