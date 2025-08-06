process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fetchPromise = fetch("https://fakestoreapi.com/products");


console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
   if(!response.ok)
   {
       throw new Error(`There is an error  `);
   }
 return response.json();
 
})
.then((data)=>console.log(data.title))
.catch((error)=>console.error())

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
      // for(const response of responses)
      // {
      //   console.log(`The response arae ${response.url}  and satatus code is ${response.status}`);
      // }
      console.log("All method responsess", responses)
   } )
 .catch((err)=>console.log(`fetch all error ${err}`));


Promise.any([fetchdata1,fetchdata2,fetchdata3])
 .then((response)=>response.json())  
 .then(data=>console.log(data))
 .catch((err)=>console.log(`There is some network error ${err}`));

const fetchdata4=fetch("https://jsonplaceholder.typicode.com/posts/4");

const fetchdata5=fetch("https://jsonplaceholder.typicode.com/posts/5");

const fetchdata6=fetch("https://jsonplaceholder.typicode.com/posts/6");


Promise.race([fetchdata4,fetchdata5,fetchdata6])
 .then((response)=>response.json())  
 .then(data=>console.log("fetch-race-example",data))
 .catch((err)=>console.log(` promise race example ${err}`));

 const fetchdata7=fetch("https://jsonplaceholder.typicode.com/posts/1");

const fetchdata8=fetch("https://jsonplaceholder.typicode.com/posts/2");

const fetchdata9=fetch("https://jsonplaceholder.typicode.com/posts/3");

Promise.allSettled([fetchdata7,fetchdata8,fetchdata9])
 .then((responses)=>{
     responses.forEach((value)=>
     {
           if(value.status==="fulfilled")
           {
             const response=value;

             console.log(`The promise all settled example ${response.status} and ${response.title}`);
           }
           else{
               console.log(`Thre is an error while fetching the data from url  "all-settled"`);
           }
     })
    
   } )
 .catch((err)=>console.log(`There is some network error ${err}`));



const promise1=Promise.resolve(5);
const promise2=Promise.resolve(6);
const promise3=Promise.reject(4);

Promise.allSettled([promise1,promise2,promise3])
.then(results=>
{
   results.forEach((result,index)=>
   {
      if(result.status=="fulfilled")
      {
        console.log(`The ${index+1} fulfilled with value`,result.value);
      }
      else{
        console.log(`The ${index+1} rejected with value`,result.value);
      }
   }
   )
}
)


const fetchusers=(url)=>
{
  return new Promise((resolve,reject)=>
  {
    setTimeout(()=>
    {
          if(url==='users')
          {
            resolve ({name:"Senthil",age:23});
          }
          else{
            reject("THere is some error network error or invalid url");
          }


    },10000)
  }
)}

fetchusers("users")
 .then(user=>console.log("user data",user))
.catch(err=>console.log("Error is",err));







