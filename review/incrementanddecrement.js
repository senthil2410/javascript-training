let counter=5;
console.log("POST INCREMENT",counter++);
console.log("Pre increment",++counter);

const counter1=counter++ + ++counter;
console.log(counter1);

const counter2=++counter + counter++;

console.log(counter2);

let num1 = 1;
let num2 = 1;
console.log(num1 + num2);



const array=[3,5,6,7,8,12,34];

console.log("Array example");

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}

for(let i=0;i<array.length;++i)
{
    console.log(array[i]);
}

