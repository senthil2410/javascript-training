
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
function * makeGeneratorRanage(start=0,end=Infinity,step=3)
{
     for(let i=start;i<end;i=i+step)
     {
         yield i;
     }
}

const it=makeGeneratorRanage(40,100,5);

console.log(it.next());

console.log(it.next());

console.log(it.next());

let result=it.next();

while(!result.done)
{
    console.log(result);
    result=it.next();

}

console.log("End of the loop",result);


async function * fetchProduct(url,limit)
{
     let product=1;
     let start=1;

     while(start<limit)
     {
         const response=await fetch(`${url}/${product}`);
         const data=await response.json();
          if(!data|| !response)
          {
             break;
          }
          const title=data.title;
          yield title;
          product=product+1;
          start++;
     }


}

(async () => {
  const data = fetchProduct('https://dummyjson.com/products',5);
   
  for await (const title of data) {
    console.log(title);
  }
})();