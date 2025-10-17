const number=[1,2,3,4,5,6,7,8,9];
const even=number.filter(num=>num%2===0);
console.log(even);
const words=["cat","dog","elephant","tiger","lion"];
const longWords=words.filter(word=>word.length>3);
console.log(longWords);
const prices=[100,200,300,400,500];
const expensive=prices.filter(price=>price>150);
console.log(expensive);

const people=[
    {name:"Alice",age:25},
    {name:"Bob",age:30},
    {name:"Charlie",age:35},
    {name:"David",age:28}
];
const adults=people.filter((person)=>person.age>=18);
console.log(adults);
