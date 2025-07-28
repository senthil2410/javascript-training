process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fetchPromise = fetch("https://fakestoreapi.com/products");


console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>response.json())
.then((data)=>console.log(data.body));


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>console.log(data));


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
   if(!response.ok)
   {
       throw new Error(`${response.json}`);
   }
 return response.json();
 
})
.then((data)=>console.log(data));












