const age="mejbha";

const convertedToNUmber= Number(age)

//  console.log(typeof convertedToNUmber);
//  console.log(typeof (convertedToNUmber));

//  console.log(convertedToNUmber);

 /*
        Number Conversion
// 25=> 25
// "25" => 25
// ""=> 0
// "25abc"=> NaN
// "mejbha"=> NaN
// null=> 0
// undefined => NaN
// true => 1; false =>0

 */

let myName= null;
// console.log(typeof myName)

const conversionString= String(myName)

// console.log(typeof conversionString);
// console.log(typeof (conversionString));
// console.log(conversionString);

/*
    String conversion
//  33=> "33"
// "mejbha"=> "mejbha"
// "undefined"=> undefined
// null => null
// true => true; false=> false


*/

const isSheCome =undefined;


const conversionBoolean= Boolean(isSheCome);

// console.log(typeof conversionBoolean);
// console.log(conversionBoolean)

/*
    conversiton Boolean
// 1=> true ; 0=> false
// "mejbha"=> true; ""=> false
// null=> false ; undefined=> false
*/

// ---------------------opereations ---------------------

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let nam1="mejbha";
let nam2= " rahim";
let nam3= nam1 + nam2;
// console.log(nam3)

// console.log("1" +2);
// console.log(1 +"2");
// console.log(1+2 +"2");
// console.log("2"+2 +2);

let count=100;
let a= count++;
let c=++count;
console.log(c)
console.log(a)
console.log(count)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
// postfix: increment oparator increment and returns the value before incremating

// let a = 3;
// const b = ++a;

// // console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// prefix: increment oparator increment and returns the value after incremating


