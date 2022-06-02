{
    "use strict";

    // id
    const firstName = document.getElementById("fn");
    console.log(firstName);

    // querySelector
    let pic = document.querySelector("img");
    console.log(pic);

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

    const sky = mood => {
        if(mood === "happy")
            pic.parentElement.className="happy";
        else
        pic.parentElement.className="sad";
    }

    const moodCheck = () => {
        let mood = "g";
        // alternativ for-loop und nach true break setzen
        allRadios.forEach(radio => {
            if(radio.checked)
                mood = radio.value;
        }); 

        return mood;
    }

    // Bild und Hintergrund mit Laune ändern.


 
    

    let submit = document.querySelector("[type=submit]");
    submit.addEventListener("click",
                                (e) => {
                                    changeImage();
                                    
                                    e.preventDefault();
                                });

    
}