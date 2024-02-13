
/* ----------------------------------------------------------- */
/*  modern javaScript ↓
/* ----------------------------------------------------------- */

"use strict";

//get all svg paths(cities)
const cities = document.querySelectorAll("path");
cities.forEach(city => {

    //get city name
    const text = city.parentElement.querySelector('text');

    city.addEventListener('mouseenter', () => {
        city.style.fill = '#2f2b2d';
    });
    city.addEventListener('mouseleave', () => {
        city.style.fill = '#f0cc1c';
    });

    city.addEventListener('click', () => {
        city.style.fill = '#c90f0b';
        // Link:
        // window.location.href = 'https://kk.rks-gov.net/' + text.innerHTML.trim().toLowerCase();


        //alert
        alert(text.innerHTML.trim());
    });

    /* ----------------------------------------------------------- */
    /*  phone event listeners
    /* ----------------------------------------------------------- */
    city.addEventListener('touchstart', () => {
        city.style.fill = '#2f2b2d';
    });
    city.addEventListener('touchend', () => {
        city.style.fill = '#f0cc1c';
    });

})


/* ----------------------------------------------------------- */
/*  non-modern javaScript ↓
/* ----------------------------------------------------------- */
// "use strict";

// var cities = document.querySelectorAll("path");
// cities.forEach(function (city) {
//   var text = city.parentElement.querySelector("text");
//   city.addEventListener("mouseenter", function () {
//     city.style.fill = "#32590e";
//     text.style.color = "black";
//   });
//   city.addEventListener("mouseleave", function () {
//     city.style.fill = "#72B626";
//   });
//   city.addEventListener("click", function () {
//     city.style.fill = "#72B626"; // Link:
//     // window.location.href = 'https://kk.rks-gov.net/' + text.innerHTML.trim().toLowerCase();
//     //alert

//     alert(text.innerHTML.trim());
//   });
//   city.addEventListener("touchstart", function () {
//     city.style.fill = "#32590e";
//   });
//   city.addEventListener("touchend", function () {
//     city.style.fill = "#72B626";
//   });
// });