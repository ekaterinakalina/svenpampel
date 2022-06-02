{/**
  Ekaterina Kalina, Webprogrammierung, MIB SS 22, ESA JS Basics, 02.06.22
 */

    
    
"use strict";


//Liest alle Werte aus allen Formularfeldern aus
const allForms = document.getElementById("message_form", "color_form", "fish_form", "futter_form", "range_form", "password_form");
const allFormsElements = Array.from(allForms.elements);

allFormsElements.forEach (element => {
    console.log(element);
});


//Liest die Werte nur aus den _ausgefüllten_ Formularfeldern aus
var inputName = document.getElementById("first_name").value;
console.log("The value in the name box is " + inputName);

var inputNumber = document.getElementById("phone_number").value;
console.log("The value in the phone box is " + inputNumber); 

var inputEmail = document.getElementById("email").value;
console.log("The value in the email box is " + inputEmail);
}

//Unterdrückt die Weiterleitung eines leeren Formulars mit "submit"
function preventSubmit() {
    document.getElementById("submit_button").addEventListener("click", (event) => {
        event.preventDefault()
    });
    alert("Man darf kein leeres Kenntwort abschicken.");
}

//Prüft die Eingabe des Kennwort
function checkPassword(){
    var myInput = document.getElementById("password_input").value;

    //Warnung wenn die Eingabe leer ist
    if (myInput == " ") {
        alert("Das Kenntwortfeld darf nicht leer sein.");
        return false;
    }
    //Warnung wenn die Eingabe weniger als 8 Zeichen ist
    if (myInput.length < 8) {
        alert("Das Kenntwort darf nicht kürzer als 8 Zeichen sein.");
        return false;
    }
    //Warnung wenn die Eingabe mehr als 15 Zeichen ist
    if (myInput.length > 15) {
        alert("Das Kenntwort darf nicht länger als 15 Zeichen sein.");
        return false;
    } else {
        alert("Das Kenntwort ist richtig!");
        return true;
    };
}

