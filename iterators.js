const employess=["Senthil","Kumar","Thangaraj","Suchind","Suriya"];

const iterator=employess[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


const makeRangeIterator=(start=0,end=Infinity,step=1)=>
{
    let nextIndex=start;
   

    const rangeIterator=
    {
        next()
        {
               let result;
               if (nextIndex < end) {
                result = { value: nextIndex, done: false };
              nextIndex += step;
            return result;
        }
          return { value: nextIndex, done: true };
    },
  };
  return rangeIterator;
}


const it=makeRangeIterator(0,45,5);

let result=it.next();

while(!result.done)
{
    console.log(result.value);
    result=it.next();
}

console.log("The last non looped value is",result);



const makeRangeIterator1=(start=0,end=Infinity,step=1)=>
{
    let nextIndex=start;
   

    const rangeIterator=
    {
        next()
        {
               let result;
               if (nextIndex < end) {
                result = { value: nextIndex, done: false };
              nextIndex += step;
            return result;
        }
          return { value: nextIndex, done: true };
         
       },
         [Symbol.iterator]()
          {
              return this;
          }
  };
  return rangeIterator;
}

 const values=makeRangeIterator1(2,30,2);

 for(const value of values)
 {
     console.log(value);
 }



