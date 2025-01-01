const counts=[1,2,3,4,5,6,7,8,9,10];

const store=counts.map((count)=>count+1);
// console.log(store)

const result=counts
                .map((count)=>count*10)
                .map((count)=>count+1)
                .filter((count)=>count>40);

console.log(result)