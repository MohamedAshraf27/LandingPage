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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section");
let sectionsArr = Array.from(sections);
let navbar = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//Appending navbar items and giving them style

function navbarItems() {
    for (let i = 0; i < sectionsArr.length; i++) {
        let sectionName = sectionsArr[i].getAttribute("data-nav");
        let sectionLink = sectionsArr[i].getAttribute("id");
        let item = document.createElement("li");
        item.innerHTML = `<a class="menu__link" href="#${sectionLink}"> ${sectionName} </a>`
        navbar.appendChild(item);
    }
};

// Section determination

function viewedSection(section) {
    let sectionPoistion = section.getBoundingClientRect();
    return (sectionPoistion.top >= 0 && sectionPoistion.left >= 0 && sectionPoistion.right <= window.innerWidth && sectionPoistion.bottom <= window.innerHeight);
};

//Toggling active view

function toggleActiveView() {
    sections.forEach(function(section){
        if(viewedSection(section)) {
            !section.classList.contains("your-active-class")? section.classList.add("your-active-class"):"";
        }
        else {
            section.classList.remove("your-active-class");
        }
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navbarItems();

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", toggleActiveView);

$(document).ready(function() {
    $('ul li a').click(function() {
        $('li a').removeClass("menu__active");
        $(this).addClass("menu__active");
        })
    })

document.addEventListener("wheel",function() {
     $('li a').removeClass("menu__active");     
    });

// Scroll to anchor ID using scrollTO event
let items = document.querySelectorAll(".menu__link");
items.forEach(anchor => {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


