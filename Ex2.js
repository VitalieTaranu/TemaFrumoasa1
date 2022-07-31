// Ex2.js
let suma = 200;
if (suma > 50 && suma < 800) {
    console.log("Valoarea tips este de " + (15*suma/100));
    console.log("Valoarea notei este de " + (suma+15*suma/100));
} else if (suma > 800) {
    console.log("Valoarea tips este de " + (20*suma/100));
    console.log("Valoarea notei este de " + (suma+20*suma/100));
} else {
    console.log("Valoarea tips este 0");
    console.log("Valoarea notei este de " + (suma));
}