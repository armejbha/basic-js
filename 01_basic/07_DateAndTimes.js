// Dates 

let myDate= new Date();
// console.log(myDate)
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreateDate= new Date(2024,11,14,5,33);
// console.log(myCreateDate.getDay())
// console.log(myCreateDate.toDateString());

const myTimeStamp= Date.now();

// console.log(myTimeStamp.getTime())

const moonLanding = Date.now();
// console.log(moonLanding);
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))



console.log(myCreateDate.toLocaleString('default',{
    weekday:"long"
}))