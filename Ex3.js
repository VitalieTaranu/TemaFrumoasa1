// Ex3.js

// let n = [1, 2, 3, 4, 1];

// console.log(n);
// console.log("Numarul este " + n[0] + n[1] + n[2] + n[3] + n[4]);
// console.log(n.length);
// if (n[0] == n[n.length-1] && n[1] == n[n.length-2]) {
//         console.log("Numarul este un polindrom");
// } else {
//       console.log("Numarul nu este un polindrom");
//     }

// Alt exemplu

// let n = 101;
// let m = '' + n;
// let mesaj = '';

// for (i=0; i < m.length/2; i++) {
//         let indexStanga = i;
//         let indexDreapta = (m.length - 1) - indexStanga;
//         if (m[indexDreapta] !== m[indexStanga]) {
//                 mesaj = 'Nu este polindrom';
//                 break;
//         }
// }
// if (mesaj == '') {
//         mesaj = 'Este polindrom';
// }

// console.log(mesaj);



// Alt exemplu


// let n = 12231;
// let m = '' + n;

// let nspatiuArray = m.split('');
// let nInversat = nspatiuArray.reverse();
// if (m == nInversat.join('')) {
//         console.log('Numarul este polindrom');
// }
// else {
//         console.log('Numarul nu este polindrom');
// }


// Alt exemplu

let n = 212;
let nOriginal = n;
let nInvers = "";

while(n != 0) {
        nInvers = nInvers + (n % 10);
        n = (n - (n % 10)) / 10;
}

console.log(nOriginal);
console.log(nInvers);

if(nOriginal == nInvers) {
        console.log("Da, este polindrom");
} else {
        console.log("Nu, nu este polindrom");
}