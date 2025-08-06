process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fetchdata1=fetch("https://jsonplaceholder.typicode.com/posts/1");

const fetchdata2=fetch("https://jsonplaceholder.typicode.com/posts/2");

const fetchdata3=fetch("https://jsonplaceholder.typicode.com/posts/3");

Promise.all([fetchdata1,fetchdata2,fetchdata3])
 .then((response)=>console.log(response))
  .catch((err)=>console.log(`There is some network error ${err}`));



const promise1=Promise.reject(5);

const promise2=Promise.resolve(4);

const promise3=Promise.reject(10);

Promise.all([promise1,promise2,promise3])
 .then(data=>console.log(data))
 .catch((err)=>console.log(`There is some network error ${err}`));

 const promise4=Promise.reject(5);

const promise5=Promise.reject(4);

const promise6=Promise.reject(10);

Promise.all([promise4,promise5,promise6])
 .then(data=>console.log(data))
 .catch((err)=>console.log(`There is some network error ${err}`));