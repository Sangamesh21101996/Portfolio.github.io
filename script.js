// Sticky  Nav Menu JS

let nav = document.querySelector("nav");
let scrollbtn = document.querySelector(".scroll-button  a");

let val;

window.onscroll=function()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("sticky");
        scrollbtn.style.display="block";
    }
    else{
        nav.classList.remove("sticky");
        scrollbtn.style.display="none";
    }
}


//Side Nav Menu Active
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    body.style.overflow="hidden";
    scrollbtn.style.pointerEvents="none";
}

cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    body.style.overflow="auto";
    scrollbtn.style.pointerEvents="auto";

}

// side nav bar close 
let navLinks = document.querySelectorAll(".menu li a");
for(var i=0 ; i < navLinks.length; i++)
{
    navLinks[i].addEventListener("click" , function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity="1";
        menuBtn.style.pointerEvents="auto";
    });
}

//Email box
let popup=document.getElementById("popup");

function openMail(){
    popup.classList.add("open-popup");
}


function closeMail(){
    popup.classList.remove("open-popup");
}

