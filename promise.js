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
.then((data)=>console.log(data.body));


fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
   if(!response.ok)
   {
       throw new Error(`There is an error  `);
   }
 return response.json();
 
})
.then((data)=>console.log(data.title));

fetch('https://jsonplaceholder.typicode.com/po')
.then(response=>
{
    if(!response.ok)
    {
       throw new Error("THere is an error")
    }
    return response.json
})
.then(data=>console.log(data.title))
.catch(err=>console.log(`error ${err}`));

const fetchInput = (input) => {
  return new Promise((resolve, reject) => {
    if (input) {
      resolve("Promise succeeded");
    } else {
      reject("Promise not succeeded");
    }
  });
};

fetchInput(true)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


const fetchData=(endpoint)=>
{
  return new Promise((resolve, reject) => {
      setTimeout(()=>
      {
        if(endpoint=="/users")
        {
            const userdata={id:1,name:"Senthil",place:"palani",education:[{SLC:"VEVEAHAM"},{HSC:"Veveaham"},{BE:"Bannari"}]};
            resolve(userdata);
        }
        
        else if(endpoint=="/education")
        {
           const education={education:[{SLC:"VEVEAHAM"},{HSC:"Veveaham"},{BE:"Bannari"}]};
           resolve(education);
        }
        else{
          reject("There is an http error while fetching the data");
        }
          
      },2000 );
  });
};

fetchData("/users")
.then((response)=>console.log(response))
.catch(error=>console.log(`${error}`));

fetchData("/education")
.then((response)=>console.log(response))
.catch(error=>console.log(`${error}`));


fetchData("/error")
.then((response)=>console.log(response))
.catch(error=>console.log(`${error}`));


const fetchdata1=fetch("https://jsonplaceholder.typicode.com/posts/1");

const fetchdata2=fetch("https://jsonplaceholder.typicode.com/posts/2");

const fetchdata3=fetch("https://jsonplaceholder.typicode.com/posts/3");

Promise.all([fetchdata1,fetchdata2,fetchdata3])
 .then((responses)=>{
      for(const response of responses)
      {
        console.log(`The response arae ${response.url}  and satatus code is ${response.status}`);
      }
   } )
 .catch((err)=>console.log(`There is some network error ${err}`));



 

Promise.any([fetchdata1,fetchdata2,fetchdata3])
 .then((response)=>response.json())  
 .then(data=>console.log(data))
 .catch((err)=>console.log(`There is some network error ${err}`));









