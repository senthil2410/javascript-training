(()=>
{
    console.log("Immediate Invke function expression")
})();

(function()
{
   console.log("Immediate invoke function using normal functions");
})();


const numbers=[1,2,3,4,5];

const singleline=numbers.map(number=>number*2);
console.log(singleline);

const arrowwithreturn=numbers.filter(number=>
{
    return number%2==0;
}
)

console.log(arrowwithreturn);

const object={fname:"Senthil",age:23,place:"palani"};

const objectarrow=({fname,...rest})=>
{
    console.log(fname);
     console.log(rest);

}
objectarrow(object);

const modifyObject=({fname,age})=>
({
    fname:fname.toUpperCase(),
    age:age+1
})

console.log(modifyObject(object));

function * incrementby5(start,end,step)
{
     for(let i=start;i<end;i=i+step)
     {
         yield i;
     }
}

const generator=incrementby5(5,100,5);
console.log(generator.next());

let output=generator.next();

while(!output.done)
{
    console.log(output);
     output=generator.next();
}

// default parameter

const defaultParameter=(value=5)=>
{
    console.log(value);
}

defaultParameter(7);

defaultParameter();

