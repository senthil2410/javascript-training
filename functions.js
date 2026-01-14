// function without paramethers 
console.log(Math.random());

//Function that requires   parameters   strictly

const place="My  native place is palni";

console.log(place.replace("palni","Palani"));

// Default parameters

function bank(initialBalance=0)
{
    const balance=initialBalance;

    console.log(`The account has ${balance} rupees`);
}

bank(3400);


//IIFE function

const Counter = (() => {
  let count = 5;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
})();

console.log(Counter.increment()); 
console.log(Counter.decrement());
console.log(Counter.increment()); 
console.log(Counter.increment()); 
console.log(Counter.increment()); 

const addition = ((a, b) => (a + b));
console.log(addition(3,5));

function normalFunction(a,b)
{
   const num1=a;
   const num2=b;
   return num1+num2;
}

const add=normalFunction(5,6);

console.log("The normal function is",add);

//Function scope

const output=(result)=>
{
    const result1=result;
    console.log(result1);
}

const outerx=()=>
{
    const x=5;
    output(x);
}

const innery=()=>
{
    const y=7;
    output(y);
}

outerx();
innery();





