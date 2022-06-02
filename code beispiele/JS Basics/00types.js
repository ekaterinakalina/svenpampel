{
    /*namespace für diese Datei*/
    "use strict";

    // Browsermethoden
    // alert("Hallo Welt!");
    // prompt("Sag mir was ...");
    // console.log("Für Entwicklungsphasen.")

    // Deklaration von Variablen
/*  let - blockscope
    const - blockscope
    var - functionscope*/

    var message;
/*     message = "text";
    message = 5; */
    console.log(typeof message);

    /* 
    Datentypen, bestimmt durch den Wert, veränderbar:
    number
    string
    boolean
    undefined: kein Wert, kein Typ
    object
        object
        array
        function
        null: kein Wert
    */

    
    const NUM = 2; 
    let nothing = undefined;
    let nothingAgain = null;
    let n = 0;
    let m = 1;
    let test = true;
    let sign = "1";
    let anotherString = 'so geht es auch';

    // Vergleiche: 
    // ==   Wert
    // ===  Wert und Typ (deep comparison)
    if(m===test)
        console.log(m + " ist gleich " + test);
    else
        console.log(`${m} ist ungleich ${test}`);

    console.log(nothingAgain);


}
console.log(message);