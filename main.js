"use strict"

/** 
 * Funktion wechselt class von der Navbar ($nav):
 * fügt Farbe, Animation beim Scrollen hinzu 
*/
//Open JQuery
$(function() {

    $(document).scroll(function () {
        var $nav = $('.navbar');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/**
 * Funktion liest Werte aus dem Formular;
 * verwandelt das Formular in ein JSON-Objekt;
 * stellt die Werte als Text dar
 * @param {Event} event 
 */
function handleFormSubmit(event) {
    event.preventDefault();

    //FormData API gibt Zugang zu den Werten in JS
    const data = new FormData(event.target);
    //Verwandelt die Werte in ein JSON-Objekt 
    const formJSON = Object.fromEntries(data.entries());
    //Werte werden als Text #results dargestellt
    const results = document.querySelector('#results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}
//Zugang zu dem Fomular mit querySelector
const form = document.querySelector('#form_field');
//Submit Button wartet auf die Funktion 'handleFormSubmit'
form.addEventListener('submit', handleFormSubmit);

