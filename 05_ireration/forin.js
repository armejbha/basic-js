const info={
    'email':'mejbha@gmail.com',
    'price':99
}
for (const key in info) {
    // console.log(`informaiton ${key} is the ${info[key]}`)
}

const heros=["mejbha","rahim","kabul"];

for (const key in heros) {
    // console.log(heros[key])
}


const map= new Map();

map.set('a',1)
map.set('b',2)
map.set('c',3)


for (const [key] in map) {
    // console.log(key)
}