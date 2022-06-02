{
    "use strict";

    // Zugriff auf Elemente im HTML-Dokument
    // Einzelne Elemente:
    /*
    document.getElementById("der Wert einer id")
    document.querySelector("jeder gültige CSS-Selektor")
    */
    // Element-Listen:
    /* 
    document.querySelectorAll("jeder gültige CSS-Selektor")
    document.getElementsByClassName("Wert eines class-Attributes")
    document.getElementsByName("Wert eines name-Attributs")
    document.getElementsByTagName("HTML-Element")
    object collections
    */

    // id
    const firstName = document.getElementById("fn");
    console.log(firstName);

    // querySelector
    let pic = document.querySelector("img");
    console.log(pic);

    // tagName
    let allP = document.getElementsByTagName("p");
    console.log(allP);
    console.log(allP[0]);
    console.log(allP[0].innerHTML);
    console.log(allP[0].firstChild);
    console.log(allP[0].childNodes);
    console.log(allP[0].parentElement);

    // className
    let headLines = document.getElementsByClassName("head-line");
    console.log(headLines);
    for(i=0; i<headLines.length; i++){
        console.log(headLines[i]);
    }

    // name 
    // für die Verwendung von Array-Methoden wandeln wir die Collection in ein Array um.
    let allRadios = Array.from(document.getElementsByName("mood"));
    console.log(typeof allRadios);
    allRadios.forEach(radio => {
        console.log(radio.value);
    });

    // querySelectorAll
    let allText = document.querySelectorAll("[type=text]");
    console.log(allText);
    allText.forEach(text => {
        console.log(text);
    });

    console.clear();

    const changeImageOnce = () => pic.src = "sonneSad.jpg";
    // changeImageOnce();
    // Die Funktion darf nur referenziert werden, bei Aufruf wird sie sonst sofort ausgeführt und nicht erst auf das event.
    // pic.addEventListener("click", changeImageOnce);
    // Für Parameterübergabe wird die Funktion gewrapped
/*     pic.addEventListener("click",
                            (e) => changeImageOnce(),
                            false); */

    console.log(pic);
    const changeImage = () => {
        if(pic.alt === "Die Sonne :-)"){
            pic.src = "sonneSad.jpg";
            pic.alt = ":("
        }
        else{
            pic.src = "sonne.png";
            pic.alt = "Die Sonne :-)";
        }
       
    }

    pic.addEventListener("click",
                            (e) => changeImage(),
                            false);

    // styles über js manipulieren
    const changeStyle = () => pic.classList.toggle("invert");
    pic.addEventListener("mouseover", (e) => changeStyle(), false);

    // Argumente übergeben
    const sky = mood => {
        if(mood === "happy")
            pic.parentElement.className="happy";
        else
        pic.parentElement.className="sad";
    }

    // über den EventListner kann man beliebig viele Funktionen
    // für ein Element auf dasselbe event aufrufen.
    // pic.addEventListener("click", (e)=>sky("sad"),false);

    const moodCheck = () => {
        let mood = "g";
        // alternativ for-loop und nach true break setzen
        allRadios.forEach(radio => {
            if(radio.checked)
                mood = radio.value;
        });
        return mood;
    }

    let submit = document.querySelector("[type=submit]");
    submit.addEventListener("click",
                                (e) => {
                                    changeImage();
                                    e.preventDefault();
                                });

}