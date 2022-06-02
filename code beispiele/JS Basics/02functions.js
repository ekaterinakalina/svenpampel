{
    "use strict";

    // hoisting
    squareTwo();
    // kein hoisting
    // Initialierungen werden nicht gehoisted
    // arrowFunc();
    // Funktionsdeklarationen
    function squareTwo(){
        let square = 2;
    }
    // Aufruf
    console.log(squareTwo());
    // Referenz auf eine Funktion
    const takeAfunction = squareTwo;
    console.log(takeAfunction);
    takeAfunction();

    // Vereinbarung als Ausdruck
    const anonymousFunction = function(){
        let message = "Diese Funktion braucht keinen Bezeichner.";
        return message;
    };
    console.log(anonymousFunction());

    // Arrow Function
    const arrowFunc = () => {
        console.log("Ich bin eine arrow function");
        return true;
    }

    // Wenn ich nur ein return statement habe:
    const squareArrow = () => console.log(4);
    // Wenn nur ein Parameter vereinbart ist:
    const ArrowPar = x => x*x;
    // Immediately invoked functions expression
    (function(){console.log("IIFE")})();

    console.clear();
    // Parameterlisten: arguments[]
    // arguments gibt es nicht für arrow functions
    function funcArgs(x,y,z){
        let strArgs = "";
        for(i=0; i<arguments.length; i++){
            strArgs += arguments[i];
            console.log("Wir sind in der Funktion: " + x,y,z);
        }
        return strArgs;
    }
    // Aufrufe
    console.log(funcArgs(1,true,"test"));
    console.log(funcArgs());
    console.log(funcArgs(42));
    console.log(funcArgs(1,2,3,4,true));

    // Default-Werte für Parameter:
    function multiply(x=2,y=3){
        let product = x * y;
        console.log(`x=${x}`);
        return product;
    }

    // Implizite Typkonvertierung
    console.log(multiply(2,"2"));
    console.log(multiply(5));
    // auch benannte Arguemente gehen in der Reihenfolge ein, wie sie vereinbart worden sind
    console.log(multiply(y=5));




}