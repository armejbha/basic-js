const numbers=[1,2,3,4,5];

for (const num of numbers) {
    // console.log(num)
}

const userName="Abdur Rahim Mejbha";

for (const name of userName) {
    // console.log(name);
}


const map= new Map();

map.set('a',1)
map.set('b',2)
map.set('c',3)

for (const [key,value] of map) {
    // console.log(key,':-', value)
}

const info={
    'email':'mejbha@gmail.com',
    'price':99
}

for (const single of info) {
    // console.log(single) this is not working
}